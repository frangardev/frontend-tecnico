<script>
  import InputTodo from "./lib/components/InputTodo.svelte";
  //Components
  import Navbar from "./lib/components/Navbar.svelte";
  import Container from "./lib/components/AppContainer.svelte";
  import Footer from "./lib/components/Footer.svelte";

  // Data todos
  import {
    completeTodo,
    deleteTodo,
    addTodo,
    supabase,
  } from "../src/lib/server";

  let myTodos = [];
  let isRefreshTodos = true;

  $: {
    const getDataTodos = async () => {
      const { data: todos, error } = await supabase.from("todos").select("*");
      if (todos !== myTodos) {
        myTodos = [...todos];
      }
    };
    if (isRefreshTodos) {
      getDataTodos();
      isRefreshTodos = false;
    }
  }

  const onCompleteTodo = (id) => {
    completeTodo(id);
    isRefreshTodos = true;
  };
  const onDeleteTodo = (id) => {
    deleteTodo(id);
    isRefreshTodos = true;
  };
  const onAddTodo = (newTitlem) => {
    if (newTitlem !== "") {
      addTodo(newTitlem);
      isRefreshTodos = true;
    }
  };

  console.log("myTodos", myTodos);
</script>

<main>
  <Navbar />
  <Container>
    <InputTodo {onAddTodo} />
    {#if myTodos.length > 0}
      {#each [...myTodos] as todo}
        <div class="container__todo">
          {todo.titlem}
          <button on:click={() => onCompleteTodo(todo.id)}>✓ </button>
          <button on:click={() => onDeleteTodo(todo.id)}>X </button>
          {todo.status}
        </div>
      {/each}
    {/if}
    <p>
      Total Todos: {myTodos.length} | Completed Todos: {myTodos.filter(
        (todo) => todo.status
      ).length}
    </p>
  </Container>
  <Footer />
</main>

<style>
  :global(:root) {
    --bg-body: #111827;
    --bg-container: #1f2937;
    --bg-todo: #374151;
    --text-color: #fffff2;
    --action-color: #2563eb;
  }
  :global(body) {
    background-color: var(--bg-body);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
</style>

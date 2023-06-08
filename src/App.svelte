<script>
  //Components
  import InputTodo from "./lib/components/InputTodo.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  import Container from "./lib/components/AppContainer.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import TodoItem from "./lib/components/TodoItem.svelte";

  // Data todos
  import { completeTodo, deleteTodo, addTodo } from "../src/lib/server";
  import supabase from "./lib/server/createClient";

  import { onMount } from "svelte";

  $: myTodos = [];

  // Actualiza myTodos
  const updateState = async () => {
    // Trae los todos
    const { data: todos, error } = await supabase.from("todos").select("*");
    let resultTodos = await [...todos];

    //Ordena los todo de "Por completar" a los que ya fuerón completados
    const todoComplete = resultTodos.filter((item) => item.status);
    const todoIncomplete = resultTodos.filter((item) => !item.status);
    const orderTodos = [];
    orderTodos.push(...todoIncomplete, ...todoComplete);

    myTodos = orderTodos;
  };

  onMount(async () => {
    updateState();
  });

  const onCompleteTodo = async (id) => {
    completeTodo(id);
    updateState();
    updateState();
  };
  const onDeleteTodo = async (id) => {
    deleteTodo(id);
    updateState();
    updateState();
  };
  const onAddTodo = async (newTitlem) => {
    if (newTitlem !== "") {
      addTodo(newTitlem);
      updateState();
      updateState();
    }
  };
</script>

<main>
  <Navbar />

  <Container>
    <InputTodo {onAddTodo} />
    {#if myTodos.length > 0}
      <ul class="container__todos">
        {#each [...myTodos] as todo}
          <TodoItem {todo} {onCompleteTodo} {onDeleteTodo} />
        {/each}
      </ul>
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
    --action-color: rgb(59 130 246);
    --action-color-hover: #2563eb;
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
  .container__todos {
    padding-left: 32px;
    list-style: none;
    margin-bottom: 32px;
  }
</style>

<!-- Componente de todo -->
<script>
  export let todo;
  export let onCompleteTodo;
  export let onDeleteTodo;
</script>

<li class={`container__todo ${todo.status && "complete"}`}>
  <span>
    {todo.titlem}
  </span>
  <div class="container__todo--botons">
    {#if !todo.status}
      <button on:click={() => onCompleteTodo(todo.id)} class="btn__complete"
        >✓
      </button>
    {/if}
    <button on:click={() => onDeleteTodo(todo.id)} class="btn__delete"
      >X
    </button>
  </div>
</li>

<style>
  .container__todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 8px;
    border-radius: 0.375rem;
    background-color: var(--bg-todo);
  }
  .container__todo--botons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .btn__complete {
    color: rgb(34 197 94);
  }
  .btn__complete:hover {
    color: #308d4b;
  }
  .btn__delete {
    color: rgb(239 68 68);
    margin-left: 8px;
  }
  .complete span {
    text-decoration: line-through;
    color: #767b83;
  }
</style>

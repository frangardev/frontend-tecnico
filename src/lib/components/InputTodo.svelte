<script>
  export let onAddTodo;

  let newTitlem = "";
  const handleInput = (event) => (newTitlem = event.target.value);
</script>

<div class="input__container">
  <input
    type="text"
    value={newTitlem}
    on:input={handleInput}
    placeholder="Add a new todo..."
  />
  <button on:click={() => onAddTodo(newTitlem)}>Add</button>
</div>

<style>
  .input__container {
    display: flex;
    width: 100%;
    height: 44px;
    margin-bottom: 24px;
  }
  .input__container input {
    width: calc(100% - 78px);
    padding: 8px;
    font-size: 1rem;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: var(--text-color);
    border: 2px solid #9ca3af;
    background-color: var(--bg-todo);
    border-radius: 0.375rem 0 0 0.375rem;
  }
  .input__container input:focus,
  input:active {
    border: 2px solid #9ca3af;
    outline: none;
  }
  .input__container input::placeholder {
    color: #9ca3af;
  }
  .input__container button {
    width: 78px;
    height: 100%;
    font-size: 1rem;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    border: 2px solid var(--action-color);
    border-radius: 0 0.375rem 0.375rem 0;
    background-color: var(--action-color);
    color: var(--text-color);
  }
  .input__container button:hover {
    cursor: pointer;
    background-color: var(--action-color-hover);
    border-color: var(--action-color-hover);
  }
</style>

<script>
  import { addTodo } from "./../server/index.js";

  const handleAddTodo = () => {
    addTodo("Add new todo");
  };
</script>

<div class="input__container">
  <input type="text" />
  <button on:click={handleAddTodo}>Add</button>
</div>

<style>
  .input__container {
    display: flex;
  }
</style>

<script>
  export let onAddTodo;

  let newTitlem = "";
  const handleInput = (event) => (newTitlem = event.target.value);
</script>

<div class="input__container">
  <input type="text" value={newTitlem} on:input={handleInput} />
  <button on:click={() => onAddTodo(newTitlem)}>Add</button>
</div>

<style>
  .input__container {
    display: flex;
  }
</style>

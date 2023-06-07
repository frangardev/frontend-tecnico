<script>
  import { todos } from "../server/index";
</script>

{#each [...todos] as todo}
  <div class="container">
    {todo.titlem}
  </div>
{/each}

<style>
  .container {
    background-color: var(--bg-container);
  }
</style>

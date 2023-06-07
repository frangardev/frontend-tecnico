<script>
  import { todos } from "../server/index";
</script>

<div class="container">
  {#each [...todos] as todo}
    <div class="container__todo">
      {todo.titlem}
    </div>
  {/each}
</div>

<style>
  .container {
    background-color: var(--bg-container);
  }
</style>

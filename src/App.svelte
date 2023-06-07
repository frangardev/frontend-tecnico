<script>
  import Container from "./lib/components/Container.svelte";
</script>

<main>
  <Container />
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
  }
</style>

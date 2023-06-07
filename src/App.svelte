<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Container from "./lib/components/Container.svelte";
  import Footer from "./lib/components/Footer.svelte";
</script>

<main>
  <Navbar />
  <div class="app__container">
    <Container />
  </div>
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
  main {
    width: 100%;
    height: 100vh;
  }
  .app__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
  }
</style>

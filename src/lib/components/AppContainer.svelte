<!-- Contenedor de la aplicación -->
<script>
  import { todos } from "../server/index";
</script>

<div class="app__container">
  <div class="container">
    <h1>TaskMaster</h1>
    <slot />
    <p>
      <em class="text--italic">
        "Success is not final, failure is not fatal: It is the courage to
        continue that counts."</em
      > - Winston Churchill
    </p>
  </div>
</div>

<style>
  .app__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
  }
  .container {
    background-color: var(--bg-container);
    padding: 24px;
    border-radius: 0.5em;
    max-width: 464px;
  }
  .container h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 24px;
  }
</style>

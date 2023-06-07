<script>
  import { todos } from "../server/index";
</script>

<div class="app__container">
  <div class="container">
    <h1>TaskMaster</h1>
    <slot />
    <p>
      "Success is not final, failure is not fatal: It is the courage to continue
      that counts." - Winston Churchill
    </p>
  </div>
</div>

<style>
  .container {
    background-color: var(--bg-container);
  }
  .app__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95vh;
  }
</style>

<script>
  import arrow from "../../assets/icon-arrow.svg";
</script>

<div class="navbar__container">
  <nav class="navbar">
    <span class="logo__navbar">TaskMaster</span>
    <div class="container__butons--navbar">
      <button class="button__navbar">
        <img
          src="https://cdn2.iconfinder.com/data/icons/membership-account-outline/200/coder-512.png"
          alt="icon navbar"
          srcset=""
        />
      </button>
      <button class="button__navbar">
        <img src={arrow} alt="arrow" srcset="" class="icon__arrow" />
      </button>
    </div>
  </nav>
</div>

<style>
  .navbar__container {
    width: 100%;
    margin: 0;
    background-color: var(--bg-container);
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0;
    width: 90%;
    max-width: 1232px;
    margin: 0 auto;
  }
  .logo__navbar {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  .container__butons--navbar {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .button__navbar {
    width: 32px;
    height: 32px;
    padding: 4px;
    border: none;
    border-radius: 50%;
    background-color: var(--bg-todo);
    cursor: pointer;
  }
  .button__navbar img {
    width: 100%;
  }
  .button__navbar .icon__arrow {
    opacity: 0.5;
  }
  .button__navbar .icon__arrow:hover {
    opacity: 1;
  }
</style>

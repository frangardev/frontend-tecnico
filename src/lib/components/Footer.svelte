<!-- Footer -->
<script>
  import iconGitHub from "../../assets/icon-github.svg";
</script>

<footer class="footer">
  <div class="container">
    <div class="container--text-link">
      <div>
        <h4>Our Mission</h4>
        <p>
          At TaskMaster, we are dedicated to helping you stay organized,
          focused, and achieve your goals. We provide a user-friendly platform
          to manage your tasks effectively, prioritize your work, and make
          progress towards your objectives. Let us be your companion on your
          journey to success.
        </p>
      </div>
      <a
        href="https://github.com/frangardev/frontend-tecnico"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconGitHub} alt="icon GitHub" srcset="" />
      </a>
    </div>
    <p>© 2023 Francisco Alejandro García Munguía. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--bg-container);
    text-align: center;
    padding: 24px;
  }
  .footer .container {
    max-width: 1280px;
    margin: 0 auto;
  }
  .footer h4 {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  .footer .container--text-link {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .container--text-link p {
    font-size: 14px;
  }
  .footer div img {
    margin-top: 1.5em;
    opacity: 0.5;
  }
  .footer div img:hover {
    opacity: 1;
  }
  .footer p {
    color: #9ca3af;
    font-weight: 400;
  }
</style>

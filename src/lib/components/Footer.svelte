<script>
  import iconGitHub from "../../assets/icon-github.svg";
</script>

<footer class="footer">
  <h4>Our Mission</h4>
  <div>
    <p>
      At TaskMaster, we are dedicated to helping you stay organized, focused,
      and achieve your goals. We provide a user-friendly platform to manage your
      tasks effectively, prioritize your work, and make progress towards your
      objectives. Let us be your companion on your journey to success.
    </p>
    <a
      href="https://github.com/frangardev/frontend-tecnico"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconGitHub} alt="icon GitHub" srcset="" />
    </a>
  </div>
  <p>© 2023 Francisco Alejandro García Munguía. All rights reserved.</p>
</footer>

<style>
  .footer {
    background-color: var(--bg-container);
    text-align: center;
    padding: 24px;
  }
  .footer h4 {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  .footer div {
    display: flex;
    align-items: center;
  }
  .footer div img {
    opacity: 0.5;
  }
  .footer div img:hover {
    opacity: 1;
  }
  .footer p {
    color: #9ca3af;
  }
</style>

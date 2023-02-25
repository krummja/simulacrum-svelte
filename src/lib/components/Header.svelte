<header>
  <div class="container">
    <a href="/">simulacrum.space</a>

    <nav>
      <!-- <a href="/testing">Testing</a> -->
      <a href="/blog">Blog</a>
    </nav>
  </div>
</header>


<style lang="scss">
  header {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 1rem 1rem;
    height: 60px;
    width: 100%;

    background-color: var(--deepnight-darker);

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      // min-width: 130px;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .container {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: auto;
      justify-content: space-between;
      max-width: var(--default-width);
    }
  }
</style>

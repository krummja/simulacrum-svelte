<header class="model--default">
  <a class="title" href="/">simulacrum.space</a>
  <nav>
    <a href="/garden">Garden</a>
    <a href="/designs">Designs</a>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-wrap: auto;
    flex-direction: row;
    margin: 0 auto 1rem auto;
    padding: 1rem 0 3rem 0;
    height: var(--header-height);
    justify-content: space-between;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > a + a {
        margin-inline-start: 3rem;
      }
    }

    a {
      text-decoration: none;
      color: inherit;

      transition: color 0.1s cubic-bezier(.33, .66, .66, 1);

      &:hover {
        color: var(--blossom-normal);
      }
    }
  }
</style>

<header class="model--default">
  <a class="title" href="/">simulacrum(space)</a>
  <nav>
    <a href="/garden">.garden()</a>
    <a href="/designs">.designs()</a>
    <!-- <a href="/changelog">.changelog()</a> -->
  </nav>
</header>

<style lang="scss">
  .title {
    height: 30px;
  }

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

      height: 30px;

      & > a + a {
        margin-inline-start: 2rem;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      height: 50px;

      transition: color 0.1s cubic-bezier(.33, .66, .66, 1);

      &:hover {
        color: var(--link-secondary);
      }
    }
  }
</style>

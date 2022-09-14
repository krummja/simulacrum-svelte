<script lang="ts">
  export let title: string;
  export let date: string;
  export let path: string;
</script>

<div class="blog-post">
  <h2><a href={path}>{title}</a></h2>
  <h3>Published {date}</h3>
</div>

<style lang="scss">
  a {
    text-decoration: none;

    &:visited {
      color: var(--fg-soft);
    }

    &:hover {
      color: var(--fg-softer);
    }
  }
</style>

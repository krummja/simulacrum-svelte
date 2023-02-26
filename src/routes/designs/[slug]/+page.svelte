<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<article>
  <h1>{data.title}</h1>
  <hr/>

  <svelte:component this={data.content} />
</article>

<style lang="scss">
  article {
    margin: 0 1.25em;
  }

  hr {
    margin-bottom: 60px;
  }
</style>
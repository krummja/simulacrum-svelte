<script lang="ts">
  import type { PageData } from './$types';
  import Tag from '$lib/components/Tag.svelte';
  import Tags from '$lib/components/Tags.svelte';
  export let data: PageData;
</script>

<article>
  <!-- Metadata is rendered up here -->
  <h1 class="title">{data.title}</h1>
  <h4 class="date">Published {data.date}</h4>

  <!-- <Tags tags={data.tags} /> -->

  <hr/>

  <!-- Then we use a dynamic component to push content -->
  <svelte:component this={data.content}/>
</article>

<style lang="scss">
  article {
    margin: 0 1.25em;
  }

  hr {
    margin-bottom: 30px;
  }

  :global(article h1) {
    margin-top: 2.5rem;
  }

  :global(article h2) {
    margin-top: 2.5rem;
  }

  :global(article h3) {
    margin-top: 2.5rem;
  }
</style>

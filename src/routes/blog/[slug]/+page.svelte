<!-- 
  Blog Post
 -->
<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<article class="prose">
  <!-- Metadata is rendered up here -->
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>

  <!-- Then we use a dynamic component to push content -->
  <svelte:component this={data.content}/>
</article>

<!-- 
  Blog Post
 -->
<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<article>
  <!-- Metadata is rendered up here -->
  <h1>{data.title}</h1>
  <h4 class="date">Published {data.date}</h4>
  <hr/>

  <!-- Then we use a dynamic component to push content -->
  <svelte:component this={data.content}/>
</article>

<!--
  Blog Post
 -->
<script lang="ts">
  import type { PageData } from './$types';
  import type { SvelteComponent } from 'svelte';
  import { selectAll } from "d3";
  import { onMount } from 'svelte';

  export let data: PageData;

  let component: SvelteComponent;

  onMount(() => {
    selectAll('h2').style('margin-top', '32px');
    selectAll('h3').style('margin-top', '16px');
    selectAll('.figure').style('margin', '16px 0');
  });
</script>

<article>
  <!-- Metadata is rendered up here -->
  <h1 class="title">{data.title}</h1>
  <h4 class="date">Published {data.date}</h4>
  <hr/>

  <!-- Then we use a dynamic component to push content -->
  <svelte:component bind:this={component} this={data.content}/>
</article>

<style lang="scss">
  article {
    margin: 0 1.25em;
  }

  hr {
    margin-bottom: 30px;
  }
</style>

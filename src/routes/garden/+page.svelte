<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPost from '$lib/components/BlogPost.svelte';
  import { fly } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { onMount } from "svelte";

  export let data: PageData;

  let mounted: boolean = false;
  let duration: number = 500;
  let offset: number = 150;

  onMount(() => {
    mounted = true;
  })
</script>

<!-- <FilterBar /> -->
<div class="index-wrapper">
  <div class="item-wrapper">
    {#if mounted}
    {#each data.posts as post, i}
      <div in:fly="{{duration: duration, delay: i * offset, easing: sineIn, x: -200}}">
        <BlogPost
          title={post.meta.title}
          date={post.meta.date}
          stage={post.meta.stage}
          path={post.path}
        />
      </div>
    {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .item-wrapper {
    margin: 8px 0;
    padding: 0 16px;
  }

  .index-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>

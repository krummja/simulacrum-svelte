<script lang="ts">
  import type { PageData } from "./$types";
  import DesignPage from "$lib/components/DesignPage.svelte";
  export let data: PageData;
  import { fly, fade } from "svelte/transition";
  import { sineIn, sineInOut } from "svelte/easing";
  import { onMount } from "svelte";

  let mounted: boolean = false;
  let duration: number = 500;
  let offset: number = 150;

  onMount(() => {
    mounted = true;
  })
</script>

<div class="index-wrapper">
  <div class="item-wrapper">
    {#if mounted}
    {#each data.designs as design, i}
      <div in:fly="{{duration: duration, delay: i * offset, easing: sineIn, x: -200}}">
        <DesignPage
          title={design.meta.title}
          path={design.path}
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

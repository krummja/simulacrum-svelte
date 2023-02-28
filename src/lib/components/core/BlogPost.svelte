<script lang="ts">
  import { onMount } from "svelte";
  let iconRef: HTMLElement;

  export let title: string;
  export let date: string;
  export let path: string;
  export let stage: string;

  const iconClass = () => {
    switch (stage) {
      case "seed":
        // iconRef.style.width = "10px";
        // iconRef.style.backgroundColor = "var(--sunset-green)";
      default:
        return "unknown";
    }
  }

  onMount(() => {
    iconClass();
  })
</script>

<div class="blog-post">
  <div class="info-wrapper">
    <h3><a href={path}>{title}</a></h3>
    <h4 class="date">Published {date}</h4>
  </div>
  <div class="icon" bind:this={iconRef}></div>
</div>

<style lang="scss">

  .blog-post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--deepnight-normal);

    padding: 16px;

    .date {
      margin-top: 8px;
      font-weight: 300;
      color: var(--deepnight-lighter);
    }

    .icon {
      margin: -16px;
    }
  }
</style>

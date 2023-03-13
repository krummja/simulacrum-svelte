<script lang="ts">
import "$lib/styles/dev/main.scss";
import "$lib/styles/crt.scss";
import Header from "$lib/components/Header.svelte";
import { theme, prefersDark } from "$lib/store/store";
import { onMount } from "svelte";

let mounted: boolean = false;

onMount(() => {
  mounted = true;

  if (mounted) {
    prefersDark.set(
      window.matchMedia &&
      window.matchMedia('prefers-color-scheme: dark').matches
    );
  }
})
</script>

<svelte:head>
  <!-- <meta
    name="color-scheme"
    content={$theme}
  />
  <link rel="stylesheet" href={`/theme/${$theme}.css`} /> -->
</svelte:head>

<Header />
<main>
  <div class="content model--default type--standard">
    <slot />
  </div>
</main>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    margin: 0 18px;
    width: 100%;
  }
</style>

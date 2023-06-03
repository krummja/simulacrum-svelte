<script lang="ts">
import "$lib/styles/main.scss";
import "$lib/styles/crt.scss";
import Header from "$lib/components/Header.svelte";
import { onMount } from "svelte";

let mounted: boolean = false;

onMount(() => {
  mounted = true;
})
</script>


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

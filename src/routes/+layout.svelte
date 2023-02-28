<script lang="ts">
import "$lib/styles/dev/main.scss";
import "$lib/styles/crt.scss";
import Header from "$lib/components/dev/Header.svelte";
</script>

<Header />
<main>
  <div class="crt"></div>
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

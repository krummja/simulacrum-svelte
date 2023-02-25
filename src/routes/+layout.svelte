<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/main.scss';
</script>


<Header />
<main>
  <div class="crt"></div>
  <slot />
</main>

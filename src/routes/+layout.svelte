<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/main.scss';
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  Footer
</footer>
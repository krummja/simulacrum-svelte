<script lang="ts">
  import Link from './Link.svelte';
  import type { Types } from './types';
  import { onMount } from 'svelte';

  export let linkData: Types.LinkInfo[];
</script>


<g class="links">
  {#each linkData as link (link.key)}
    <Link {link} />
  {/each}
</g>

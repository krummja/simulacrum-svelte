<script lang="ts">
  import { theme } from "$lib/store/store";

  const toggle = () => {
    if ($theme === 'dark') {
      $theme = 'light';
    } else if ($theme === 'light') {
      $theme = 'dark';
    }
  }
</script>

<button on:click={toggle}>
  {$theme}
</button>

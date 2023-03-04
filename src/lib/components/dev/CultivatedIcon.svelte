<script lang="ts">
  import { onMount } from "svelte";
  export let stage: number;

  let el: HTMLElement;

  const icons = ["木", "林", "森"];
  const icon: string = icons[stage];

  onMount(() => {
    el.style.color = [
      "var(--blossom-lighter)",
      "var(--blossom-light)",
      "var(--blossom-normal)",
    ][stage];
  })
</script>

<div class="icon" bind:this={el}>
  {icon}
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
  .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60px;
    margin-right: 20px;
    font-family: "Rampart One";
    font-weight: bold;
    font-size: 42pt;
  }
</style>

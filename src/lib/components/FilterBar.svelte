<script lang="ts">
  import Tag from "$lib/components/Tag.svelte";
  import StageIcon from "$lib/components/StageIcon.svelte";
  const icons = [
    ["木", "Planting"],
    ["林", "Cultivating"],
    ["森", "Flourishing"],
  ];

  let array = [
    "programming",
    "javascript",
    "python",
    "d3",
    "animation",
    "gamedev",
    "digital_gardening",
    "rust",
  ];
</script>

<div class="filter-bar">
  <div class="tag-wrapper">
    {#each [...array] as item}
    <Tag text={item} />
    {/each}
  </div>
  <!-- <div class="stage-wrapper">
    {#each icons as icon}
    <StageIcon icon={icon[0]} name={icon[1]} />
    {/each}
  </div> -->
</div>

<style lang="scss">
  .filter-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 8px;
    margin-bottom: 32px;
    background-color: var(--deepnight-darker);
  }

  .tag-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    width: 70%;
    height: 100%;
    padding: 8px;
  }

  // .stage-wrapper {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   width: 30%;
  // }
</style>

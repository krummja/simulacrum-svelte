<script lang="ts">
  export let icon: string;
  export let name: string;
</script>

<div class="stage-indicator">
  <span class="stage-item">{icon}</span>
  <span class="stage-name">{name}</span>
</div>

<style lang="scss">
  .stage-indicator {
    display: flex;
    flex-direction: row;

    align-items: center;
    align-content: center;
  }

  .stage-item {
    margin-right: 20px;
    font-family: "Rampart One";
    font-weight: bold;
    font-size: 20pt;
    opacity: 0.3;

    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
</style>

<script lang="ts">
  import CultivatedIcon from "$lib/components/dev/CultivatedIcon.svelte";

  export let title: string;
  export let date: string;
  export let path: string;
  export let stage: number;

  const stages = [
    "Planting",
    "Cultivating",
    "Flourishing",
  ];

  const stageText = stages[stage];
</script>

<div class="blog-post">
  <div class="info-wrapper">
    <h3><a href={path}>{title}</a></h3>
    <h4 class="date">{stageText} ● Published {date}</h4>
  </div>
  <div class="icon">
    <CultivatedIcon stage={stage} />
  </div>
</div>

<style lang="scss">

  .blog-post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--deepnight-normal);

    padding: 16px;

    .date {
      margin-top: 8px;
      font-weight: 300;
      color: var(--deepnight-lightest);
    }

    .icon {
      margin: -16px;
    }
  }
</style>

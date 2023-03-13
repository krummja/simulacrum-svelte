<script lang="ts">
  import CultivatedIcon from "$lib/components/CultivatedIcon.svelte";
  // import Tags from "$lib/components/dev/Tags.svelte";

  export let title: string;
  export let date: string;
  export let path: string;
  export let stage: number;
  // export let tags: string[];

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
    <!-- <Tags tags={tags} /> -->
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
    background-color: var(--bg-secondary);

    padding: 16px;
    margin: 8px 0;

    .date {
      margin-top: 8px;
      font-weight: 300;
      color: var(--fg-secondary);
    }

    .icon {
      margin: -16px;
    }
  }
</style>

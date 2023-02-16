<script lang="ts">
import anime from 'animejs';
import { onMount } from 'svelte';

type Timeline = {
  timeline: anime.AnimeTimelineInstance | null
}

// store our timeline in a state object
const state: Timeline = {
  timeline: null,
};

// play event
const play = () => {
  if (state.timeline != null) {
    state.timeline.play();
  }
}

onMount(() => {
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
  })

  state.timeline = timeline;

  const params: anime.AnimeAnimParams = {
    targets: '.test-box',
    translateX: 450,
    rotate: 360,
  };

  timeline.add(params);
});
</script>

<div>
  <div class="test-box"></div>
  <button on:click={play} class="play">Play</button>
  <!-- <button class="pause">Pause</button> -->
</div>

<style lang="scss">
  .test-box {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 0, 0, 1.0);
  }
</style>

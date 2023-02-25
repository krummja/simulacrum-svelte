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
};

// pause event
const pause = () => {
  if (state.timeline != null) {
    state.timeline.pause();
  }
};

onMount(() => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1500,
    direction: 'alternate',
    loop: true,
    // autoplay: false,
  })

  state.timeline = timeline;

  const params: anime.AnimeAnimParams = {
    targets: '.test-box',
    translateX: 650,
    rotate: 360,
    rotateX: 360,
    rotateY: 45,
  };

  timeline.add(params);
});
</script>

<div>
  <div class="test-box"></div>

  <div class='controls'>
    <button on:click={play} class="play">Play</button>
    <button on:click={pause} class="pause">Pause</button>
  </div>
</div>

<style lang="scss">
  .test-box {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 0, 0, 1.0);
  }

  .controls {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    button {
      margin: 3px;
      padding: 3px;
      color: var(--overcast-soft);
      background: rgba(var(--sunset-green), 0.25);
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>

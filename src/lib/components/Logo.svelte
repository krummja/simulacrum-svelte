<script lang="ts">
import anime from "animejs";
import { onMount } from "svelte";

const width = 260 * 3;
const height = 143 * 2;

let container: HTMLElement;
let topl: SVGPathElement;

type Timeline = {
  timeline: anime.AnimeTimelineInstance | null
}

// store our timeline in a state object
const state: Timeline = {
  timeline: null,
};

onMount(() => {
  container.style.width = `${width}`;
  container.style.height = `${height}`;

  const timeline = anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    direction: 'alternate',
    loop: true,
    autoplay: true,
  });

  state.timeline = timeline;
  const offset = 750;

  timeline.add({
    targets: '.logo .logomark .topl',
    translateY: [
      { value: [-200, height / 2], delay: 200, },
    ],
    translateX: [
      { value: [-100, (width / 2) - topl.getBoundingClientRect().width - 10], delay: 400, },
    ],
    opacity: [0.2, 1.0],
  });

  console.log(topl.clientWidth);
});
</script>

<div bind:this={container}>
  <div class="logo">
    <svg
      width="{width}"
      height="{height}"
      id="center"
      class="logomark"
    >
      <path stroke="red" d="M {width/2},0 v {height}" />
      <path stroke="red" d="M 0,{height/2} h {width}" />

      <path bind:this={topl} class="topl" fill="white" d="M 125,0 5,70 65,105 125,70 Z"/>
      <!-- <path class="topr" fill="white" d="M 135,0 135,70 195,105 255,70 Z" />
      <path class="botl" fill="white" d="M 0,80 0,143 54,111.5 Z" />
      <path class="cent" fill="white" d="M 130,80 76,111.5 130,143 184,111.5 Z" />
      <path class="botr" fill="white" d="M 260,80 206,111.5 260,143 Z" /> -->
    </svg>

  </div>
</div>

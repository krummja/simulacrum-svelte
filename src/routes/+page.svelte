<script lang="ts">
  import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
  import { theme } from "$lib/store/store";
  import { get } from "svelte/store";
  import { fly, fade } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import { onMount, afterUpdate } from "svelte";

  let mounted: boolean = false;
  let duration: number = 500;
  let offset: number = 150;

  // let prefersDark: boolean;

  // $: {
  //   if (mounted) {
  //     prefersDark = (
  //       window.matchMedia &&
  //       window.matchMedia('(prefers-color-scheme: dark').matches
  //     );

  //     theme.set(prefersDark);
  //     document.documentElement.classList.toggle("dark", prefersDark);
  //   }
  // }

  onMount(() => {
    mounted = true;
  })
</script>

<div class="intro">

  {#if mounted}
  <div class="bio">
    <!-- <h1>Jonathan's space for essays, notes, and digital knickknacks.</h1> -->
    <div in:fade="{{duration: duration, easing: sineInOut, delay: -100}}">
      <h1 in:fly="{{duration: duration, easing: sineInOut, x: -200}}">
        Hi, I'm Jonathan!
      </h1>
    </div>

    <div in:fade="{{duration: duration, easing: sineInOut, delay: offset - 100}}">
      <p in:fly="{{duration: duration, easing: sineInOut, x: -200, delay: offset}}">
        This is my space for writing, accumulating notes, and collecting digital knickknacks. Content is often in varying degrees of drafting or disarray. I try not to stress too much about the overall presentation of content; after all, sometimes the best you can do is a crude representation of whatever's currently got your attention.
      </p>
    </div>
  </div>
  {/if}

  <!-- <div class="bio">
    <h1>Hi, I'm Jonathan!</h1>

    <p>
      If you're on this page, welcome to my personal web space. It's currently under significant reconstruction. Previously, this site was built using the Vue frontend framework; I recently decided to give Svelte a try, and I liked it so much I decided to rebuild my site using SvelteKit.
    </p>

    <p>
      I've recently gotten my <a href="/garden">digital garden</a> into a presentable state, and I'm looking forward to getting more content written in that area of the site. Most of the articles there are in varying states of drafting at the moment, indicated by their "cultivation" status and kanji symbol:
    </p>

    <ul class="cultivation">
      <li>木 | "Planting" for early drafts or single ideas.</li>
      <li>林 | "Cultivating" for rough drafts.</li>
      <li>森 | "Flourishing" for polished articles.</li>
    </ul>
  </div>
  <div class="portrait">
    <img alt="portrait of me" src={portrait} />
  </div> -->
</div>

<style lang="scss">
  .intro {
    display: flex;
    flex-direction: column;
  }

  // .bio {
  //   max-width: 70%;
  //   flex-basis: 1;
  // }

  // .portrait {
  //   width: 30%;
  //   flex-basis: 1;
  // }

  // .cultivation {
  //   list-style: none;
  // }
</style>

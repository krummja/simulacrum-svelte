<script lang="ts">
  import portrait from "$lib/assets/it_me.png";
</script>

<div class="intro">
  <div class="bio">
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
  </div>
</div>

<style lang="scss">
  .intro {
    display: flex;
    flex-direction: row;
  }

  .bio {
    max-width: 70%;
    flex-basis: 1;
  }

  .portrait {
    width: 30%;
    flex-basis: 1;
  }

  .cultivation {
    list-style: none;
  }
</style>

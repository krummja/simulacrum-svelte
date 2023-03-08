<script lang="ts">
  import { fade, blur } from "svelte/transition";

  $: modalHidden = true;

  const onClick = () => {
    modalHidden = !modalHidden;
  };
</script>

<div class="wrapper">
  <div class="controls">
    <button on:click={onClick}>Open dialog</button>

    {#if !modalHidden}
    <div transition:blur="{{amount: 10, duration: 200}}" on:keydown on:click={onClick} class="overlay">
      <div transition:fade="{{duration: 100}}" class="modal-1">
        Click anywhere to close.
      </div>
    </div>
    {/if}
  </div>

  <p>This paragraph has a z-index, but should appear behind the dialog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lorem scelerisque, blandit libero vitae, dapibus nisl. Sed turpis diam, placerat a feugiat sed, maximus at velit. Ut sit amet semper sapien. Donec vitae leo ex. Duis eget quam sed metus tempor lobortis eget feugiat elit. Cras varius, arcu ac commodo tincidunt, lectus dui convallis nunc, quis maximus nisl erat ac mi. Phasellus et velit diam.</p>
</div>

<style lang="scss">
  button {
    --link: var(--blossom-darker);
    text-decoration: none;
    border-bottom: 3px solid var(--link);
    box-shadow: inset 0 -4 0 var(--link);
    color: inherit;

    transition: background 0.1s cubic-bezier(.33, .66, .66, 1);

    &:hover {
      background: var(--link);
    }
  }

  .overlay {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
  }

  .modal-1 {
    height: 100px;
    width: auto;
    margin: 8px 32px;
    padding: 16px;
    z-index: 3;
    background-color: var(--deepnight-normal);
    box-shadow: 4px 4px 2px 1px var(--deepnight-darker);
  }
</style>

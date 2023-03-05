<script lang="ts">
  import { math } from "mathlifier";
  export let render: () => string;

  const mathString = math(render());
</script>

<div>
  {mathString}
</div>

<script lang="ts">
    import { onMount } from "svelte";

    import * as d3 from "d3";

    let mounted: boolean = false;
    let context: HTMLElement;

    type OperatorSelection = d3.Selection<HTMLElement, any, HTMLElement, any>;

    interface Anchor {
        tag: string;
        label: string;
    }

    function extractAnchor(text: string): Anchor {
        let anchorText = text.slice(3);

        let anchor: Anchor = {
            tag: anchorText.slice(0, anchorText.indexOf("]") + 1),
            label: anchorText.slice(
                anchorText.indexOf("]") + 2,
                anchorText.indexOf(";"),
            ),
        };

        console.log(anchor);

        return anchor;
    }

    onMount(() => {
        mounted = true;

        if (mounted) {
            const selection: OperatorSelection = d3.selectAll(".token.comment");

            for (const elem of selection) {
                const anchor = extractAnchor(elem.innerText);
            }
        }
    });
</script>

<div bind:this={context} class="code-context">
    <slot />
</div>

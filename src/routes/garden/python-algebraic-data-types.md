---
title: Algebraic Data Types in Python
date: "09/16/2022"
stage: 0
tags:
  - python
  - haxe
  - adts
---

<script lang="ts">
  import EmphasisBox from '$lib/components/EmphasisBox.svelte';
  import ProgressBlock from '$lib/components/ProgressBlock.svelte';
  import StickyNav from '$lib/components/StickyNav.svelte';
  import { page } from '$app/stores';
</script>

<StickyNav page={$page}>

TOC

</StickyNav>

About a year ago, I got really into a niche programming language called [Haxe](https://www.haxe.org). I'll say outright, Haxe *rules*. It has a ton of really nice features that make it a lovely language to make stuff in. One of those features that I constantly wish was available in other languages is an implementation of [Algebraic Data Types (ADTs)](https://en.wikipedia.org/wiki/Algebraic_data_type).

ADTs are essentially **composite types**, and they are a nifty feature stemming from functional programming. Put very simply, they are types can represent *other types of things*, where the actual type is a matter of resolution of production rules or conditions. In Haxe, this was implemented in terms of enumerations.

```haxe
enum Color {
  Red;
  Green;
  Blue;
  Rgb(r: Int, g: Int, b: Int);
}
```

<!-- This reads as specifying that the type `Color` can represent -->

<ProgressBlock />

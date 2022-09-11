---
title: Another Test Page
date: "2022-09-10"
---

<script>
  import Counter from '$lib/components/Counter.svelte';
</script>

This is another test page, just to have another one on the blog listing.

It turns out it's stupid easy to drop entire components directly in Markdown-based blog posts! Check it:

<Counter />

How frickin' cool is that?!

On this page, I import the component as follows:

```js
<script>
  import Counter from '$lib/components/Counter.svelte';
</script>
```

Then on the page, I just put the component in as normal:

```js
<Counter />
```

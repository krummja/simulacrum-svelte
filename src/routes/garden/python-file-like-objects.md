---
title: Python File-Like Objects
date: "9/15/2022"
stage: 0
tags:
  - python
  - explorations
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

In my neverending quest for fully-specified, beautiful type annotations for Python, one domain that has constantly given me headaches is HTTP. On the face of it, it should be fairly simple, especially with the use of handy libraries like `requests`. However, once you get just beneath the surface of what appear to be placid waters, you find a frothing undercurrent.

I've been doing a bit of research into how HTTP requests are handled by the `requests` package in order to better understand what types are acceptable as the body of an HTTP request. Again, on the face of it, this seems straightforward---if it's HTTP, it better be serializable. But what exactly does that *mean* in Pythonic terms?

To start, let's consider how the `requests` [API Reference](https://requests.readthedocs.io/en/latest/api/) describes the `data` parameter for a `GET` request:

- **data** – (optional) Dictionary, list of tuples, bytes, or file-like object to send in the body of the **Request**.

If, like me, you read along that docstring nodding wisely only to triple take when your eyes cross over "file-like object", then you might find the remainder of this article interesting. However, if you are a master Pythonista and you already know inside and out both what a FLO is and how to handle typing one, then I bid you adieu (you scummy bastard *shakes fist in jealousy*).


## File-Like Objects

Okay, hyperbole aside, the term **file-like object** is standard parlance in Python. It can be found in Python's official [glossary](https://docs.python.org/3/glossary.html#term-file-object) defined as:


<EmphasisBox title="File-Like Object">

  An object exposing a file-oriented API (with methods such as `read()` or `write()`) to an underlying resource [...] File objects are also called *file-like objects* or *streams*.

  There are actually three categories of file objects: raw binary files, buffered binary files and text files. Their interfaces are defined in the `io` module. The canonical way to create a file object is by using the `open()` function.

</EmphasisBox>

Down the rabbit hole we go!

<ProgressBlock />

### The `io` module

As described in the glossary snippet, we really have three subtypes of FLO to understand.

#### Text I/O

#### Buffered (aka Binary) I/O

#### Raw (aka Unbuffered) I/O

## Typing FLOs

With all of the above, the solution to how we should type file-like objects is actually very straightforward. The `typing` package provides a base `IO` which can be made generic using `IO[AnyStr]`, as well as the aliases `TextIO` and `BinaryIO` for `IO[str]` and `IO[bytes]`, respectively. These all represent valid types of I/O streams that can be returned by the standard `open()` function.

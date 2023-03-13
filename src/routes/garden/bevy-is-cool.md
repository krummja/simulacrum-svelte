---
title: Bevy is really fuckin' cool
date: "02/16/2023"
stage: 0
tags:
  - rust
  - gamedev
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


```rust
#[derive(Debug, Copy, Clone)]
struct TestMesh {
    size: f32,
    num_vertices: f32,
}

impl From<TestMesh> for Mesh {
    fn from(test_mesh: TestMesh) -> Self {
        let mut mesh = Mesh::new(PrimitiveTopology::TriangleList);

        mesh.insert_attribute(
            Mesh::ATTRIBUTE_POSITION,
            vec![
                [1.0, 0.0, 0.0],
                [0.0, 1.0, 0.0],
                [1.0, 1.0, 0.0],
            ],
        );

        mesh.set_indices(Some(Indices::U32(vec![0, 2, 1])));
        mesh
    }
}
```

<ProgressBlock />

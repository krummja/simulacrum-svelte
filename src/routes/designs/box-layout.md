---
title: Box Layout
---

<div class="test">
  <div class="padding-box"></div>
</div>

<style>
  .test {
    width: 100%;
    height: 200px;
    border: 2px dashed var(--sunset-orange);

    padding: 1rem;
  }

  .test .padding-box {
    width: 100%;
    height: 100%;
    border: 2px dashed var(--sunset-red);
  }
</style>

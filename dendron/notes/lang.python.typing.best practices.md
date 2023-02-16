---
id: frrqu9f4nn8r0z9jlao9qfe
title: Best Practices
desc: ''
updated: 1668436037351
created: 1666836906716
---

## Guidelines

1. Parameters are variable declarations; type them as such.
2. Function return types annotate any variable being returned.

```py
# BAD:
def some_func(x: int) -> int:
    val: int = x + 1
    return val

# GOOD:
def some_func(x: int) -> int:
    return x + 1
```

## Don't Over-Annotate

```py
class Foo:

    def __init__(self: Type[Foo], x: int, y: int) -> None:
        self.x: int = x
        self.y: int = y
        self.val = x_val + y_val
```

The above is simply too verbose. The `self` parameter doesn't need to be annotated, and neither do variables that bind parameters with their types already declared. We can write the above much more simply:

```py
class Foo:

    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y
        self.val = x_val + y_val
```

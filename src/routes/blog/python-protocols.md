---
title: Python Protocols
date: "09/16/2022"
---

```python
from __future__ import annotation
from typing import (
  AbstractSet, 
  Protocol,
  Tuple,
  TypeVar,
)
from typing import runtime_checkable


KT = TypeVar("KT")
KT_co = TypeVar("KT_co", covariant=True)
VT = TypeVar("VT")
VT_co = TypeVar("VT_co", covariant=True)
```

```python
@runtime_checkable
class SupportsItems(Protocol[KT_co, VT_co]):

    def items(self) -> AbstractSet[Tuple[KT_co, VT_co]]: 
      ...
```

And that's it! A properly configured Python environment can now give you meaningful warnings pertaining to classes that implement this protocol.

```python
class ItemSupporter:

    def __init__(self) -> None:
        self._collection = {
            ('a', 0),
            ('b', 1),
            ('c', 2),
        }

    def items(self) -> set[tuple[str, int]]:
        return self._collection
```

Notice that we aren't inheriting from a superclass at all here. All we've done is defined a private collection set that consists of `str, int` tuples and provided an implementation for the `items()` method. We've explicitly annotated the return type of this method as `Set[Tuple[str, int]]`, structurally a subtype of the return type defined for our protocol's method. And now, some real magic happens:

```python
item_supporter: SupportsItems = ItemSupporter()
# No IDE issue with typing this

items = item_supporter.items()         
# {('a', 0), ('b', 1), ('c', 2)}

print(isinstance(foo, SupportsItems))  
# True
```

To verify that this is working as expected, try Changing `ItemSupporter.items()` to some other method name, e.g. `members()`, or the signature of `ItemSupporter.items()` to `list[tuple[str, int]]`.

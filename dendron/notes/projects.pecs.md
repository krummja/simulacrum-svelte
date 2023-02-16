---
id: bdx0zwac4ej49v1jx5lctl6
title: PECS
desc: ''
updated: 1669875014736
created: 1667362841627
---

**Entity-Component-System** (ECS) is an approach to software design that emphasizes radical code reusability by separating data from behavior. ECS has a few defining characteristics:

1. Entities - unique identifiers
2. Components - plain datatypes without behavior
3. Systems - functions matched with entities that have a certain set of components

Entities can contain zero or more components, and entities can change their composition dynamically.

```py
from abc import ABC, abstractmethod


class Component(ABC):

    @classmethod
    def __subclasshook__(cls, other: object) -> 
```


```py
class ComponentRegistry:

    def __init__(self) -> None:
        self.cbit = 0
        self.map = {}

    def add(self, key: str, value: Type[Component]) -> None:
        self.cbit += 1
        self.map[key] = value
```

We can now define components as straightforward dataclasses and register them with our `ComponentRegistry` class.

```py
@dataclass
class Position:
    x: int
    y: int


registry = ComponentRegistry()
registry.add('position', Position)
```



| A | B | C | D | E |
|---|---|---|---|---|
| 0 | 1 | 0 | 1 | 1 |



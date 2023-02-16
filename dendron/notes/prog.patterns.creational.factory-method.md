---
id: ha3ythgpcz7os4i7gcob9d6
title: Factory Method
desc: ''
updated: 1668464037117
created: 1666099957634
---

Delegate a specialized function/method to create instances.

### Diagram

```mermaid
%%{
    init: {
        'themeVariables': {
            'fontFamily': 'Fira Code Light',
            'fontSize': '8pt'
        }
    }
}%%
classDiagram

    class Creator {
        ...
        +someOperation()
        +createProduct() Product
    }

    class ConcreteCreator {
        ...
        +createProduct() Product
    }

    class Product {
        <<interface>>
        +doStuff()
    }

    class ConcreteProduct {
        +doStuff()
    }

    Creator <|-- ConcreteCreator : Inheritance
    Product <|.. ConcreteProduct : Implementation
    Creator ..> Product : Dependency
```


### Code Example

```python
from __future__ import annotations
from abc import ABC, abstractmethod


class Product(ABC):

    @abstractmethod
    def operation(self) -> str:
        pass


class Creator(ABC):

    @abstractmethod
    def factory_method(self) -> Product:
        pass

    def some_operation(self) -> str:
        product = self.factory_method()
        result = f"Creator: working with {product.operation()}."
        return result


class ConcreteProduct(Product):

    def operation(self) -> str:
        return "Result of ConcreteProduct."


class ConcreteCreator(Creator):

    def factory_method(self) -> Product:
        return ConcreteProduct()
```


```mermaid
%%{
    init: {
        'themeVariables': { 
            'fontFamily': 'Fira Code Light',
            'fontSize': '8pt'
        }
    }
}%%
classDiagram

    class ConcreteCreator {
        +factory_method() Product
    }

    class Creator {
        <<ABC>>
        +factory_method()* Product
        +some_operation() str
    }

    class Product {
        <<ABC>>
        +operation()* str
    }

    class ConcreteProduct {
        +operation() str
    }

    Creator <|-- ConcreteCreator : Inheritance
    Product <|.. ConcreteProduct : Implementation
    Creator ..> Product : Dependency
```

---
id: cee8lua709aw22j9769jvps
title: Nonlocal
desc: ''
updated: 1665894314403
created: 1665894274517
---

```python
def f():
    some_var = 10
    def g():
        nonlocal some_var += 10
        return some_var
    return g()

f()
```

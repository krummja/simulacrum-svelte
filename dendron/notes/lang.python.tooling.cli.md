---
id: x4zy1f8itogrhbaun0bk2zy
title: CLI
desc: ''
updated: 1666273216648
created: 1666273204583
---

## Making CLIs for Python Applications

```
CoolProject/
│   .env
│   .gitignore
│   pyproject.toml
│   README.md
│
└── cool_project
    │   __init__.py
    │   __main__.py
```


## Groups and Context Passing

### Basic Group

```python
import click


@click.group()
def cli() -> None:
    pass

@cli.command()
def start() -> None:
    click.echo('CLI command `start` was invoked.')
```

### Context-Nested Group

```python
from beartype.typing import TYPE_CHECKING
if TYPE_CHECKING:
    from click import Context

import click


@click.group()
def cli(ctx: Context) -> None:
    pass


@cli.command()  # NOTE `cli.command` not `click.command`!
@click.pass_context
def start(ctx: Context) -> None:
    click.echo('Command `start` was invoked.')


if __name__ == '__main__':
    cli(obj={})  # take careful note of this keyword argument!

```

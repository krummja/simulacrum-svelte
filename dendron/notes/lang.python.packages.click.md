---
id: m2064qm3oc5zkred6i83cdm
title: Click
desc: ''
updated: 1667312778496
created: 1667312778496
---

## Minimal Example

```py
import click

@click.command('--opt', '-o', is_flag=True, default=False, help="Test command.")
def main(command) -> None:
    print(command)


if __name__ == '__main__':

```

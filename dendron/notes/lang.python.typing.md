---
id: 661xeyj7qpdt08ttctyt4b7
title: Typing
desc: ''
updated: 1666834259756
created: 1666834259756
---

Python is a **strongly**, **dynamically** typed programming language.

In a **strongly typed** language, variables have definite types, and these types matter for operations performed on those variables.

In a **dynamically typed** language, the types themselves are determined at runtime. That is, variables *have a type*, but that type is *unknown until the program is run*.

```py
def add_one(x):
    return x + 1
```

We know that the variable `x` will be an instance of the `int` class at runtime because that class is what makes sense in the context of being the left-hand operand to the addition operator, and where the right-hand operand is a literal `int`. That is, we (and the interpreter) can infer from the context that whatever `x` is, it must be something that implements the `__add__` method. The closest builtin type that would satisfy this environment is `int`.

```py
two = add_one(1)  # <- evaluates to 2 -- woo!
```

Note that this typing is entirely inferential. The actual type of `x` could be anything, and we're letting the interpreter decide what makes sense at runtime. The variable must have a type, but the context matters for figuring out what the best type is to satisfy the implied contract that context requires.

Since [PEP 484](https://peps.python.org/pep-0484/), Python has had the option of including type annotations. As opposed to statically typed languages like Java or C#, these types are not enforced by a compiler. They are, in effect, ignored at runtime. 

Why use them, then? Well, as famously opined by Martin Fowler, "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." This to say, explicit type annotations have two main benefits. First, they make the program easier to parse and easier to follow. The signature of a function or method is immediately obvious. Second, types can be used as an advanced code linter. There are third-party static type checkers like [mypy](http://mypy-lang.org/) that be used to enforce types. Moreover, a properly configured IDE can make use of types to provide feedback to the programmer (in the form of error squiggles) as well as documentation popups.

If we rewrote our function from before to be type annotated, it would look as follows:

```py
def add_one(x: int) -> int:
    return x + 1
```

From this, we can tell that the function takes in something of type `int` and returns something of type `int`. The signature of this function is `(int) -> int`, a fact we can glean without caring one iota about the implementational details of the function.

---
id: wiftnco5m1a84nbjqgnt5tx
title: Markdown
desc: ''
updated: 1665974561653
created: 1665974543394
---

## Does Not Match

```
\b\w+[^s]\b
```

- `\b` assert position at a word boundary
- `\w` matches any word character
  - `+` matches the previous token 1 to unlimited times
- `[^s]` matches a single character not present in the list
  - `s` matches a single character in the list `s`
- `\b` assert position at a word boundary

## Negative Lookbehind

```
\b\w+(?<!s)\b
```

- `\b` assert position at a word boundary
- `\w` matches any word character
  - `+` matches the previous token 1 to unlimited times
- `(?<!s)` **negative lookbehind**: assert that the regex does not match
  - `s` matches the character `s` literally
- `\b` assert position at a word boundary

---
id: z874af716bmcuybh1tze6ds
title: Sparse Checkout
desc: ''
updated: 1666024455016
created: 1666024346554
---

If you need to clone a repository but you want to ignore some subset of the contents of that repository, you can do a sparse commit with the following workflow:

- Create the repo and add the remote

```
$ mkdir <repo> && cd <repo>
$ git init
$ git remote add -f <name> <url>
```

- Enable sparse-checkout

```
$ git config core.sparsecheckout true
```

- Configure sparse checkout

```
$ echo some/dir/ >> .git/info/sparse-checkout
$ echo another/sub/tree >> .git/info/sparse-checkout
```

Finally, checkout from the remote

```
$ git pull <remote> <branch>
```

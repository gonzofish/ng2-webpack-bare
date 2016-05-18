#Bare-Bones Angular 2 & Webpack Configuration

## What is This?

I needed a bare-bones version of Angular 2 & Webpack to use so I could create new projects.
So I made this. And, if you're reading this, you can use it too.

# Scaffolding

This repo also has a scaffolding component to it. It uses my super-light scaffolding library,
called [Balsa](https://github.com/gonzofish/balsa) to ask you questions & generate files. Balsa
has zero dependencies and only uses Node.js built-in functions.

There a few commands, available via `npm run`, that you can use:

- `initial`: creates a new `README.md`, alters `package.json` to reflect your project's name
and repo URL, then runs `git init`.
- `new`: creates a new Angular 2 part. This will ask you `Scaffold what`, to which there are two
ways of answering `{type}` or `{type} {name}` (as of 2016-05-18 only `component` is valid
for `{type}`).
    - Just `{type}` will ask you to name the part you are creating.
    - `{type} {name}` will create that part with the provided name.
- `new:component`: it's the same as running `new` and answering `component`.


## To-Dos

While the base idea requires no more work, I'd like to make it easier on me to create new
components, services, etc. This will entail scripts to:

1. ~~[Generate a new README file & package.json](https://github.com/gonzofish/ng2-webpack-bare/issues/1)~~
2. [Scaffold a new component with unit test](https://github.com/gonzofish/ng2-webpack-bare/issues/2)
3. Scaffold a new service with unit test
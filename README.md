#Bare-Bones Angular 2 & Webpack Configuration

## What is This?

I needed a bare-bones version of Angular 2 & Webpack to use so I could create new projects.

So I made this. And, if you're reading this, you can use it too.

Oh, and it comes with some light scaffolding capabilities.

## How Do I Use It?

It's pretty darn simple:

1. Clone this repository (I would fire up a console/terminal and run `git clone https://github.com/gonzofish/ng2-webpack-bare`)
    1. Run `git clone https://github.com/gonzofish/ng2-webpack-bare my-new-app` to clone it to a directory named `my-new-app`
    instead of `ng2-webpack-bare`.
2. Change into the directory from the previous step.
3. Run `npm i` (an alias for `npm install`)...this could take a while, sorry.

You're pretty much ready to go! Check out the next section to see how to easily make the cloned repository your own.

## Scaffolding

This repo also has a scaffolding component to it. It uses my super-light scaffolding library,
called [Balsa](https://github.com/gonzofish/balsa) to ask you questions & generate files. Balsa
has zero dependencies and only uses Node.js built-in functions. I also built a setup to use Balsa
specific for Angular 2 & Webpack, creatively named
[ng2-webpack-balsa](https://github.com/gonzofish/ng2-webpack-balsa).

Please see the [ng2-webpack-balsa](https://github.com/gonzofish/ng2-webpack-balsa) repository for a list of available
commands. All comands are available by using `npm run balsa `.


## NPM Scripts

Besides the scaffolding I created some NPM scripts you can use, too (via `npm run`):

- `build`: creates the distribution bundle
- `link`: checks code for errors
- `start`: runs the Webpack dev server
- `test`: runs unit tests
- `test:headless`: runs unit tests ONLY in PhantomJS


## To-Dos

While the base idea requires no more work, I'd like to make it easier on me to create new
components, services, etc. This will entail scripts to:

1. ~~[Generate a new README file & package.json](https://github.com/gonzofish/ng2-webpack-bare/issues/1)~~
2. [Scaffold a new component with unit test](https://github.com/gonzofish/ng2-webpack-bare/issues/2)
3. Scaffold a new service with unit test
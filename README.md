#Bare-Bones Angular 2 & Webpack Configuration

## What is This?

I needed a bare-bones version of Angular 2 & Webpack to use so I could create new projects.

So I made this. And, if you're reading this, you can use it too.

Oh, and it comes with some light scaffolding capabilities.

## Requirements

As of now, you'll need [Node 5.0+](https://nodejs.org/en/download/releases/) & NPM to get this all working. But let me suggest
[nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) to manage multiple versions of Node & NPM.

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

- `balsa`: run Balsa scaffolding
- `build`: creates the distribution bundle
- `link`: checks code for errors
- `start`: runs the Webpack dev server
- `test`: runs unit tests
- `test:headless`: runs unit tests ONLY in PhantomJS
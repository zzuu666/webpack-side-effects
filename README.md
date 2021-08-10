# Webpack side effects example
This repo is an example about use rehype-highlight with webpack.

## Quick Start
```bash
yarn

yarn webpack
```

and then open `dist/index.html` look at browser's console, is an error about `js` is not registered

## Why

`sideEffects` filed in `lowlight/package.json` is `false`, so webpack will tree shake `common.js`, so those register events will not execute.

I try to remove `sideEffects` filed, and rebuild `yarn webpack`, then it works.

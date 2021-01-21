# Frontend example using Stencil

## Running this project

Using the command line, from root folder of the project (contains the package.json file):

1. `npm install`
2. `npm run start`
3. Point your browser to `http://localhost:3333`!

Run tests with `npm run test`.

Create a new component using `npm run generate`.


## Technologies at play

### End result
* Plain old HTML: elements the browser understands.
* Plain old CSS: styling elements in the browser.
* JavaScript (compiled for browser compatibility).
* Web Components: standards that allow us to create custom elements with associated style+behavior.

### During development
* Node: JavaScript runtime
* NPM: Node package manger (handle dependencies + running package scripts)
* [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html): Superset of JavaScript, with... types.
* [Stencil](https://stenciljs.com): complier to write web components with nice features such as
  - TypeScript
  - [JSX](https://reactjs.org/docs/introducing-jsx.html) (syntax to include HTML-like expressions within JavaScript/TypeScript)
* SASS: adds extra features on top of CSS.
* Jest: testing framework

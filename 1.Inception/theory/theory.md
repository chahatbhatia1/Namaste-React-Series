## Namaste React Series by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is `Emmet`?
A: `Emmet` is a free add-on for your text editor. It allows you to type `shortcuts` that are then expanded into full pieces of code. By using `Emmet`, developers type less, they save both on keystrokes and time. Also relying on Emmet's auto completion means fewer typos and missing tags, leading to more robust and valid files.


## Q: Difference between a `Library` and `Framework`?
A: A `library` is a collection of packages and functions in form of APIs that perform specific operations and the developer writing the code is in charge of the application flow. Our code controls when and where to call the `library`. It can work even in the smallest portion of our code.

A `framework` consists of ready to use tools, standards, templates & policies for faster application development. The `framework` controls the calling of libraries for our code. 


## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
We can start using `React` and `ReactDOM` in our project using `CDN`.

## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI library`. 


## Q: What is `crossorigin` in script tag?
A: The `crossorigin` attribute on a `script` tag specifies that `CORS` is supported when loading an external script file from a third party server or domain.
`CORS` stands for Cross Origin Resource Sharing.

### _Syntax_
```sh
<script crossorigin="anonymous | use-credentials" src="some-script.js" />
```

## Q: What is difference between `React` and `ReactDOM`?
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the Browser DOM and render the HTML`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `react-dom/client` package contains `ReactDOM.createRoot()` which generates a root object having a `render()` method to render the content on the screen, and in react-dom/server we have server-side rendering support APIs.


## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` version is an uncompressed version for development whereas `Production` one is a minified version for production. 
The `development` version includes extra warnings about common mistakes, whereas the `production` version includes extra performance optimizations and strips all error messages.

## Q: What is `async and defer`?
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the HTML, and `executed as soon` as it is available (blocks HTML DOM construction during execution phase). Should not be used in cases when multiple scripts depend on each other for their proper execution. Example, using `React` and `ReactDOM` in another script which are coming up from `CDN`. User `defer` in that case. Order of execution is not fixed. 
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the HTML, and `executed after the page` has finished parsing the HTML (when browser finished DOM construction) but before `DOMContentLoaded` event. The `defer` attribute tells the browser to continue parsing the HTML until it finishes and then execute the scripts in the end. Should be used when multiple scripts depend on each other for their proper execution. Example, using one script's API's into another script. Scripts executes in the order in which they appear in the document. 
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

## Q: Difference b/w `DOMContentLoaded` and `load` event?
A: 
**DOMContentLoaded :**
- __Triggering Time__: The `DOMContentLoaded` event is fired by the browser when the entire HTML document has been fully parsed and the DOM tree has been constructed. This means that the event is triggered once the HTML structure is ready, __even before external resources like images and stylesheets finish loading.__

- __Use Case__: This event is commonly used to execute JavaScript code that needs access to and manipulation of the DOM. Since it triggers once the HTML is ready, it's faster than the load event, making it suitable for interactive and dynamic components of the page.

**Load Event :**
- __Triggering Time__: The `load` event is fired by the browser __when the entire page and all its associated resources (including images, stylesheets, scripts, etc.) have finished loading.__ It's a broader event that signals the completion of the entire page loading process.

- __Use Case__: The load event is often used to execute JavaScript code that depends on all resources being available, like images that need to be displayed or scripts that interact with those resources. It's appropriate for tasks that require the entire page to be loaded.


## Q: What is `createRoot`?
A: `createRoot` lets you create a root to display React components inside a browser DOM node. After you’ve created a root, you need to call `root.render` to display a React component inside of it. `createRoot` returns an object with two methods: `render` and `unmount`.

Call `root.render` to display a piece of `JSX` (“React node”) into the React root’s `browser DOM node.` 
### _Syntax_
```sh
root.render(<App />);
```

To remove the React tree from the DOM node and clean up all the resources used by it, call `root.unmount`. This is mostly useful if your React components are inside an app written in a different framework.
### _Syntax_
```sh
root.unmount();
```

Both returns `undefined`.

## Q: What is `createElement`?
A: `createElement` lets you create a React element. It serves as an alternative to writing `JSX`.

### _Syntax_
```sh
const element = createElement(type, props, ...children)
```

### _Syntax_
```sh
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );
}
```
When you use JSX, you must start a tag with a capital letter to render your own custom component. In other words, `<Something />` is equivalent to `createElement(Something)`, but `<something />` (lowercase) is equivalent to `createElement('something')` (note it’s a string, so it will be treated as a built-in HTML tag).

You should only pass children as multiple arguments to `createElement` if they are all statically known, like `createElement('h1', {}, child1, child2, child3)`. If your children are dynamic, pass the entire array as the third argument: `createElement('ul', {}, listItems)`. This ensures that React will warn you about missing keys for any dynamic lists. For static lists this is not necessary because they never reorder.

`props` can be `null` it will be treated same as empty object.
## Namaste React Series by Akshay Saini
# _Chapter 02 - Igniting the app

## Q: What is `NPM`?
A: NPM is a package manager for the JavaScript programming language maintained by NPM, Inc. NPM is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called NPM, and an online database of public and paid-for private packages, called the NPM registry.

## Q: What is `package.json` file?
A:Every npm package and Node.js project has a package.json file with metadata for a project. The file resides in the root directory of every Node.js package and appears after running the npm init command.
The package.json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies. The file provides the npm package manager with various information to help identify the project and handle dependencies.


## Q: Difference between a `Dependencies` and `devDependencies`?
A: The dependencies property is an essential field in a package.json file. The section maps production-level dependent packages and their versions used in the project.
The devDependencies property defines the package dependencies necessary for the development process. The development dependencies help other developers copy the build steps.

For example, if a package.json file contains a development script that uses the nodemon tool for monitoring, add the devDependencies field and provide the compatible version

Use devDependencies to list unnecessary packages for production but aid in creating a development environment that is true to the original setup.


## Q: What is `NPX`? 
A: NPX stands for `Node Package eXecute`. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM.


## Q: What is `package-lock.json`?
A: package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

This file is intended to be committed into source repositories, and serves various purposes:

1. Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.

2. Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.

3. Facilitate greater visibility of tree changes through readable source control diffs.

4. Optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.


## Q: Why should `package-lock.json` not be modified?
A: It is a auto generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. Deleting or modifying this file will lead to inconsistencies in dependency versions among teammates, prod-dev environments or continuous integrations. 


## Q: What are `node_modules` and `transitive dependencies`?
A: `node_modules` folder is like a cache for the external modules that your project depends upon. When you `npm install` them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when you import them (without a specific path). The node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in the project folders). This should not be commited to `Github` as it is quite large and can be recreated.

`transitive dependency` is a dependency that is not directly used in the project, but brought in by other third-party components.


## Q: Browser `Scripts` VS `modules`?
A: `Module` is an isolated code performing a specific functionality. Usually, but not necessarily, the code is contained in a single file or grouped together in a directory. It needs to be imported for use. For example, the below can be called `add` module:

### _Syntax_
```js
//add.js

const add = (a, b) => return a + b;

export add
```

Browser scripts are simple. They load, they run and they are global. Their implementation can be used in any other script without any kind of import. For example, the React cdn scripts loads and executes automatically.


## Q: What is `Parcel/Webpack` and its purpose?
A: Parcel is a bundler which does a lot of powerful things to make our app scalable and performant with very minimal configuration. It bundles our code, optimizies the images, minifies the code, cache the builds for faster development, provide beautiful error messages along with their possible fixes. Parcel optimizes your whole app for production automatically. This includes tree-shaking and minifying your JavaScript, CSS, and HTML, resizing and optimizing images, content hashing, automatic code splitting, and much more.



## Q: What is `.parcel-cache`?
A: Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly `invalidates the cache` when something changes. For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.

By default, the cache is stored in the `.parcel-cache` folder inside your project. You should add this folder to your `.gitignore` (or equivalent) so that it is not committed in your repo. You can also override the location of the cache using the `--cache-dir` CLI option.



## Q: Top 5 Superpowers of `Parcel`?
A:  
1. `Code Splitting`:
    
Parcel supports zero configuration code splitting out of the box. This allows you to split your application code into separate bundles which can be loaded on demand, resulting in smaller initial bundle sizes and faster load times.
Code splitting is controlled by use of the dynamic `import()` syntax, which works like the normal `import` statement, but returns a `Promise`. This means that the module can be loaded asynchronously. 

**Using dynamic imports**

The following example shows how you might use dynamic imports to load a sub-page of your application on demand.

### _Syntax_  
```js
    //pages/index.js:
    import("./pages/about").then(function (page) {
      // Render page
      page.render();
    });

    //pages/about.js:
    export function render() {
      // Render the page
    }
```

Since the dynamic import() returns a Promise, we can use `async/await` also.

2. `Tree Shaking`:

Process of removing unused code from the JavaScript bundles. It is extremely important to keep the production build as light as possible so that it will be downloaded, processed and executed faster. ES6 Modules with its static imports really helped in identifying the unsused code in the application and remove it.

3. `Hot Module Replacement`

By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code. HMR works by replacing the code for a module, and then re-evaluating it and along with all of its parents.

4. `Content Hashing`:

Parcel automatically includes content hashes in the names of all output files, which enables `long-term browser caching`. Whenever the contents of a bundle changes, the hash included in the filename will be updated, triggering invalidation of CDN and browser caches.

5. `Differential Bundling`:

Differential bundling is the idea of shipping multiple versions of your code for different targets, and allowing the browser to choose the most optimal one to download. 

Differential bundling using the module/nomodule pattern is now completely automated in Parcel 2. Just use a `<script type="module">` tag in your HTML file, pointing to your source code, and Parcel will automatically generate a nomodule version as well if needed.

### _Syntax_  
```js
<script type="module" src="app.js"></script>
```

becomes:

### _Syntax_  
```js
<script type="module" src="app.c9a6fe.js"></script>
<script nomodule src="app.f7d631.js"></script>
```

This happens automatically based on your browser targets, as declared in the "browserslist" key in your package.json file. If some of your targets don't support ES modules natively, a nomodule version will be compiled automatically.


## Q: What is `browserslist`?
A: Shared browser compatibility config for popular JavaScript tools like Autoprefixer, Babel, ESLint, PostCSS, and Webpack.
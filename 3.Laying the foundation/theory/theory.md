## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX is just a JavaScript Syntax Extension.
JSX allows us to write HTML like syntax in JavaScript. 
JSX makes developer life easier by internally creating the HTML like syntax to core React elements.
It improves readability and code is less verbose.

### Example 1 With JSX:
```js
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```js
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write HTML inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

- It prevents `cross-site scripting` attacks as it sanitizes the code before executing it in curly braces:

👉 __Automatic Escaping__: With JSX, any value you insert using curly braces `{}` gets automatically escaped before rendering. This means that characters like `<`, `>`, and `&` are treated as plain text, preventing them from being interpreted as HTML or script code.
👉 __Avoiding Raw HTML Strings__: While JSX encourages component-based UI rendering, it also discourages the direct use of raw HTML strings within components. This mitigates the inadvertent introduction of unsafe content.
👉 __Context Escaping__: React's property and context systems ensure that any content passed to components is properly escaped before rendering. This safeguards even user-generated content passed down the component tree.

### Example
```js
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed any valid javascript expression or a variable inside it. It will give a warning - `Functions can't be used as React Childs`

- `<TitleComponent/>` : This value represents a React Component that is basically returning some JSX. In simple terms `TitleComponent` a function/class based component that is returning a JSX.

- `<TitleComponent></TitleComponent>` :  This is used to embed some children elements inside it. This can be used in `Component Composition`.

### Example
```jsx
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```


## Q: `{Component() Vs <Component />}` in React Functional Components
A: `Component()` behaves just like in normal function call as it returns the content of the function directly. It is faster but should not be used because when used with `hooks`, it can produce an Error and the lifecycle methods and state will not be associated with the component.

On the other hand, the recommended way to use a functional components as calling it as components, i.e. `<Component />` because internally this will get converted to the `React.createElement` call and ultimately produces a valid `React Element` with all the hooks intact.
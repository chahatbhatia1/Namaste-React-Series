## Namaste React Course by Akshay Saini
# Chapter 07 - Finding the Path


## Q: What are various ways to `add images` into our App? Explain with `code examples`.
A: 
- Using the `full URL of the image` for the web (CDN) or any public images.
```jsx
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

- `Drag your image into your project` and `import it` into the desired component
```jsx
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

- The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders. 
```jsx
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```


## Q: What would happen if we do `console.log(useState())`?
A: If you call console.log(useState()) in a React component, you will not get the expected result. 

The `useState` hook returns an array with two elements:
1. The current state value.
2. The function to update the state.

So, if you call `useState()`, you're essentially logging the result of calling the useState hook without providing an initial value. This means that both the current state value and the state updater function will be `undefined`.


## Q: How will `useEffect` behave if we `don't add` a `dependency array`?
A: Syntax of `useEffect` is:
```
useEffect(() => {}, []);
```
Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```
Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```
Case 3 :  When the `dependency array contains a condition`,  the callback function will be executed  `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```


## Q: What is `SPA`?
A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.


## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?
A: 
- __Client-Side Routing__:
In client-side routing, navigation and rendering of different views or pages within a web application are handled by JavaScript running in the browser. When a user clicks on a link or enters a URL, the browser doesn't make a new request to the server. Instead, JavaScript intercepts the request, updates the URL in the browser's address bar, and dynamically updates the content on the page based on the URL. Common libraries for client-side routing include React Router (for React apps) and Vue Router (for Vue.js apps).

- __Server-Side Routing__:
In server-side routing, navigation and rendering of different views or pages are handled by the server. When a user clicks on a link or enters a URL, the browser sends a request to the server, which processes the request and sends back the appropriate HTML page. The entire page is reloaded with new content. This is the traditional way of handling navigation on the web. Server-side routing is common in traditional multi-page applications (MPAs) and frameworks like PHP and Ruby on Rails.
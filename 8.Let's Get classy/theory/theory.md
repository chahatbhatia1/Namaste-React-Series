## Namaste React Course by Akshay Saini
# Chapter 07 - Finding the Path

## Q.How do you create `Nested Routes` react-router-dom configuration?
A. For creating the nested routes using `createBrowserRouter` we can create array of nested objects containing the path, element etc. in the parent's children props.

```jsx
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```


## Q.Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
A. `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the __application URL__. Other than that, it is functionally the same as `createBrowserRouter`. 

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like **Storybook**, but can also be used for running React Router in any non-browser environment.


## Q.What is the `order of life cycle methods` in `Class Based Components`?
A. Following is the order of lifecycle methods calls in `Class Based Components`:
1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## Q.Why do we use `componentDidMount`?
A. The `componentDidMount()` method executes in the __commit phase__ of the component lifecycle after the initial render. We generally use this method to write side-effects like __make API calls__, creating __event listeners__ or subscribing to some __dataSource__ etc. This method only runs once.


## Q.Why do we use `componentWillUnmount`? Show with `example`.
A. `componentWillUnmount()` is useful for the cleanup of the resources used by component in the __unmount phase__ when we switch routes from one page to another or the component gets unmounted on the same page due to some user interaction or conditional render. 
It is useful to improve performance of our application as it clears any kind of timers, intervals or other resources used by the component from the memory.

Ex. removing the event listeners on leaving the page, unsubscribing from the dataSource or clearing the interval.


## Q.(Research) Why do we use `super(props)` in `constructor`?
A. `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between __super()__ and __super(props)__ is that __this.props__ is `undefined` in child's constructor in case of super() but __this.props__ contains the passed props if `super(props)` is used.


## Q.(Research) Why can't we have the `callback function` of `useEffect` async?
A. `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `Promise` and the promise will affect the clean-up function from being called.


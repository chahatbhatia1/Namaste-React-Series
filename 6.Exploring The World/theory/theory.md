## Namaste React Course by Akshay Saini
# Chapter 06 - Exploring the world

## Q: What is `Microservice`?
A: A microservice is a software architecture where an application is built as a collection of small, independent services. Each service focuses on a specific task or function. Key features include:

+ __Decomposition__: Breaking down complex apps into manageable services.
+ __Independence__: Services can be developed, deployed, and scaled separately.
+ __Loose Coupling__: Services communicate through APIs, evolving independently.
+ __Autonomy__: Different teams can work on services without a central structure.
+ __Scalability__: Services can scale individually based on demand.
+ __Resilience__: Failures in one service don't affect the entire app.
+ __Technology Diversity__: Services can use different tech stacks.
+ __Isolation__: Services can be secured and isolated.

Microservices align with modern development practices but come with challenges like managing distributed systems and communication overhead.


## Q: What is `Monolith architecture`?
A: Monolithic architecture is a traditional software design approach where an entire application is built as a single, tightly integrated unit. In a monolith, all components, functions, and features of an application are combined into a single codebase and deployed as a single executable or artifact.

While monoliths offer simplified development and deployment processes, they can also present challenges as the application evolves. Updates or changes to one part of the application can have unintended consequences on other parts, necessitating thorough testing and potentially making the system fragile. Additionally, scalability can be problematic, as the entire application needs to be scaled even if only specific features require additional resources.

## Q: hat is the difference between `Monolith` and `Microservice`?
A: 
### Monolith Architecture:

+ __Single Unit__: Entire application is built as a single, integrated unit.
+ __Tight Integration__: All components, functions, and features are tightly interconnected within one codebase.
+ __Simplicity__: Development and deployment processes are generally simpler.
+ __Scalability Challenge__: Scaling can be challenging as the entire application needs to be scaled even if only certain features require it.
+ __Maintenance Impact__: Changes to one part can impact other parts, necessitating comprehensive testing.
+ __Technology Consistency__: Consistent technology stack is often used throughout the application.

### Microservices Architecture:

+ __Decentralized Services__: Application is broken down into smaller, independent services.
+ __Loose Coupling__: Services communicate through APIs and operate independently.
+ __Complexity__: Development and deployment processes can be more complex due to the distributed nature.
+ __Scalability Efficiency__: Individual services can be scaled independently based on demand.
+ __Maintenance Ease__: Changes to one service have a limited impact on others, aiding agility.
+ __Technology Diversity__: Different services can use different technology stacks as needed.


## Q: Why do we need a `useEffect Hook`?
A: The useEffect hook in React is used to manage side effects in functional components. Side effects are operations that are not directly related to rendering UI, such as data fetching, subscriptions, or interacting with the browser's APIs. Here's why the useEffect hook is important:

+ __Lifecycle Management__: In class components, lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount were used to manage side effects. The useEffect hook combines these methods into a single cohesive solution for managing side effects in functional components.

+ __Avoiding Memory Leaks__: The useEffect hook provides a way to clean up side effects when a component is unmounted. This helps prevent memory leaks and ensures that resources are properly released when they are no longer needed.

+ __Data Fetching__: With the useEffect hook, you can initiate data fetching operations when the component renders or when certain dependencies change. This simplifies asynchronous operations and helps keep the component's state in sync with external data.

+ __Subscriptions__: If your component needs to subscribe to external data sources, such as WebSocket connections, the useEffect hook is essential for setting up and tearing down these subscriptions.

+ __Avoiding Infinite Loops__: The dependency array in the useEffect hook helps prevent unnecessary re-renders and potential infinite loops. By specifying the dependencies correctly, you can control when the effect is executed.

## Q: What is `Optional Chaining`?
A: Optional chaining is a JavaScript language feature introduced in ECMAScript 2020 (ES11) that provides a more concise and safe way to access nested properties or methods of an object without the risk of encountering "cannot read property of undefined" errors.

Consider a scenario where you have an object with nested properties, and you want to access a deeply nested property without knowing whether the intermediate properties exist. Instead of manually checking each property's existence, you can use optional chaining to handle this gracefully.


## Q: What is `Shimmer UI`?
A: A Shimmer UI, also known simply as "shimmer," is a design pattern used to indicate that content is loading or being fetched asynchronously in a user interface. It's a subtle animation that gives users a visual cue that something is happening behind the scenes, even before the actual content is displayed. Shimmer UI is often seen in applications that involve data loading, such as social media feeds, lists, or any situation where data retrieval might take a moment.

The shimmer effect typically consists of a low-intensity animated gradient that moves across a UI component, creating a "shimmering" or "glowing" appearance. This gives users a sense of movement and activity, which can be more engaging than just displaying a loading spinner.


## Q: What is the difference between `JS expression` and `JS statement`?
A: An expression in JavaScript is a piece of code that produces a value. It can be a combination of variables, operators, literals, and function calls that results in a single value. Expressions can be used in various contexts, such as assignments, function arguments, or within other expressions.

Examples: 
```js
5 + 3           // Evaluates to 8
myVariable      // Evaluates to the value stored in myVariable
3 * (2 + 4)     // Evaluates to 18
Math.random()   // Evaluates to a random number between 0 and 1
```

JavaScript Statement:
A statement in JavaScript is a line of code that performs an action. Statements are used to control the flow of the program, define behavior, and execute operations. Unlike expressions, statements do not produce a value as a result.

Examples of statements:
```js
if (condition) {
  // Code block executed if condition is true
}

for (let i = 0; i < 10; i++) {
  // Code block executed in a loop
}

function myFunction() {
  // Code block defining a function
}

let x = 5;   // Assignment statement
```


## What is `Conditional Rendering`? explain with a code example.
A: Conditional rendering in React refers to the practice of displaying different UI elements or components based on certain conditions. It allows you to control what gets displayed in the user interface based on the state of your application or other factors.

Here's an example of conditional rendering in React:
```jsx
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default App;
```

## What is `CORS`?
A. CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers that controls how web pages from one origin (domain) can request and interact with resources from another origin. CORS helps prevent potential security vulnerabilities that could arise from unauthorized cross-origin requests.


## Q: What is `async` and `await`?
A. In JavaScript, async and await are keywords used to work with asynchronous operations, such as making network requests or performing time-consuming tasks, in a more synchronous-like and readable manner. They are part of the ES2017 (ES8) specification and are commonly used to handle promises.

- `async` Function:
The `async` keyword is used before a function declaration or expression to indicate that the function will always return a promise. Inside an async function, you can use the `await` keyword to pause the execution of the function until the promise is resolved.

- `await` Expression:
The `await` keyword is used inside an async function to pause the execution of the function until the promise is resolved or rejected. It "waits" for the promise to settle and then returns the result or throws an error if the promise is rejected.

```js
async function getUserInfo(userId) {
  try {
    const userResponse = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await userResponse.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}
```


## What is the use of `const userData = await userResponse.json();`?
A: `userResponse` is the variable that holds the response object returned after making a network request. It contains information about the response, including its status, headers, and the data that was received. 

`const userData = await userResponse.json();` is used to asynchronously read and parse the JSON data from the response body, making it accessible as a JavaScript object in the variable `userData`. This enables you to work with the actual data obtained from the server in a structured manner within your code.
---
marp: true
theme: default
paginate: true
---

<style scoped>
@media screen {
  /* Hide not current fragments */
  [data-marpit-fragment]:not([data-marpit-fragment]:current) {
    display: none;
  }
}
</style>

<!-- class: invert -->

# State and data Management in React, Next and Prisma

_Working with and caching data in your Next application_

---

<!-- class: lead -->

## Overview

- Data management options & comparison
- Frontend state management
  - Tanstack Query
  - Redux
- Prisma
  - Schema & Migrations
  - ORM and Typing
  - Footnote:
    - Serverless infrastructure for backend and database layers

---

## `useState()`

`useState` is a React hook that allows us to maintain state in a react component across multiple render cycles. This is the simplest way to maintain state in a React application.

```jsx
import React, { useState } from 'react';

const Counter () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px' }}>+</button>
      <button onClick={decrement} style={{ margin: '5px' }}>-</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
};

export default Counter;
```

---

## `useState()` for shared state

We know that we can manage state within a single component using `useState()` but _how can we handle sharing this state between multiple components?_

<div data-marpit-fragment>

We can handle state management where state and/or actions are accessible by multiple components by simply moving the state and actions to a shared parent component and passing the data and event handlers as props to the children.

</div>

---

## `useState()` for shared state example

Here we see an example component where two components (`<Display />` and `<Incrementer />`) both have access to state or the state mutator in a single shared parent component `<App />`.

```tsx
const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shared State Example</h1>
      {/* Child that displays the count */}
      <Display count={count} />
      {/* Child that increments the count */}
      <Incrementer onIncrement={increment} />
    </div>
  );
};
```

---

## `useState()` going deeper with props

First, run and take a look at the code here `demos\react_state_props`

Start with the `demos\react_state_props\src\Counter.tsx` component and trace (in code) the hierarchy of components and how data and mutation functions flow through the code.

If you have not already, install [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools). Inspect the components and their state in React Developer Tools.

Although this example is contrived, this is a pattern that is seen when state need to be shared by many components.

Do we see any problems with this pattern?

---

## Prop drilling

![bg contain right:40%](./assets/prop_drilling.png)

Passing data to child components makes it clear and explicit how data is moving through our application but can cause issues if we are needing to pass data down too deeply or through too many components that don't directly need access to the data. Passing data deeply down to child components is known as _prop drilling_ and generally should be avoided.

---

## Context

To avoid prop drilling, react provides the the `createContext()` hook to provide state via context to child components without needing to explicitly pass the data via props.

Once a context is created and a provider for that context is used, as a component in a parent component, all children can read from that shared context state.

**Read: [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)**

---

## Context Auth Example

A common use case for context usage is auth. It is often the case in React apps require auth that multiple components at various locations in the component hierarchy all need access to auth state (whether or not the use is logged int, user data, etc.).

Take a look at, run and inspect the auth example using React Dev Tools in chrome: `demos\context_auth_example`.

Start with the root component: `demos\context_auth_example\src\App.tsx`. Note the use of the provider.

Look at the context component: `demos\context_auth_example\src\AuthContext.tsx`

Look at the child components of `App.tsx` and see how they are using the auth context.

---

## Context Limitations

Context allows us to share state between any component inside our application.

Do we see any risks with using context? Do we see any limits we should place on our use of context?

<div data-marpit-fragment>

Context is essentially a (potentially) global data store. All the reasons we know to not use or overuse global data apply here. It can lead to spaghetti code where side effects and mutations can come from anywhere in our application. It can make it difficult to understand, maintain and debug our code.

Context is generally limited to items like authentication, theming and settings where it is best to have a single source of truth and a centralized way of access some data.

For more specific types of data (i.e. a specific product detail, article content), it is better to use an alternative means of state management.

</div>

---

---

## Data management options & comparison

- App vs Server state
- App State options
  - useState
- global shared state
  - difficult managing and coordinating data and access
- unnecessary server requests
- prop drilling
- declarative programming, reactive (what are we reacting to)
- context

---

## Sequence

- useState
  - useReducer to better organize more complex state changes [](https://codesandbox.io/p/sandbox/2hdrjm?file=%2Fsrc%2FApp.js%3A8%2C5-8%2C17)
- sharing state (via props)
- managing state (state in common parent)
- prop drilling
- context
  - passing data deeply: [](http://react.dev/learn/managing-state#passing-data-deeply-with-context)
    - give a better auth example
  - more detailed example: https://react.dev/learn/passing-data-deeply-with-context
- server state
- Tanstack query
- ***

## References

- https://react.dev/learn/managing-state

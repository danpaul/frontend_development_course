---
marp: true
theme: default
---

<!-- class: invert -->

# React Essentials

---

<!-- class: lead -->

## What is react?

---

## History

---

## Why use react

---

##

React use cases

- Web FE only?
- Backend
- Mobile desktop

---

<!-- class: invert -->

## JSX (JavaScript XML)

---

<!-- class: lead -->

## JSX

JSX is a syntax extension for JavaScript that looks like HTML but compiles down to JavaScript.

It’s used with React to describe the UI in a more readable and declarative way.

---

## Why use JSX

- Easier to visualize UI compared to React.createElement().
- Makes component code more intuitive and closer to HTML, which web developers already know.

---

## JSX Syntax

JSX looks like HTML but compiles to JS.

Example JSX:

```jsx
const element = <h1>Hello, world!</h1>;
```

Compiles to:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

---

## JSX Embedding expression

---

## JSX as an expression

JSX can be stored in variables, passed to functions, passed to other components and returned from functions.

---

## Looping in JSX

---

## JSX Rules

- There must be only one parent element
- For classes, use `className` instead of `class`
- self closing tags are required

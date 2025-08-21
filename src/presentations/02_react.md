---
marp: true
theme: default
---

<!-- class: invert -->

# React Essentials

_A modern JavaScript library for building user interfaces_

---

<!-- class: lead -->

<!-- ![bg right:40% ](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHd5YXFnbml6MjU0NWl0Y3l2bngyNXE1YXN5emQ5cGt2bmo3OHAwZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduQAsYcJKQH2XsI/giphy.webp) -->

## Welcome to React!

### What you'll learn today:

- **React Fundamentals** - Core concepts and architecture
- **JSX** - Writing React elements
- **Components** - Building reusable UI pieces
  - **Props & State** - Data flow in React
  - **Hooks** - Modern React patterns
  - **Event Handling** - User interactions

---

## 🎯 **Learning Objectives**

By the end of this session, you will be able to:

- Understand React's component-based architecture
- Write JSX to describe UI elements
- Create reusable React components
- Manage component state and props
- Use React hooks for modern development
- Handle user events and form interactions

---

<style scoped>
  section {
    font-size: 24px;
  }
</style>

![bg right:50% ](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmgyMDQ3cGVia2l0aDl5aXQwNXd0cmtrYjJvam1xcHhnbnk4am5rdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0Vv0Ne2CnOClIExIuL/giphy.webp)

## Why React?

### 🚀 **Industry Standard**

- **Most popular** frontend framework
- **High demand** in job market
- **Large ecosystem** of libraries and tools
- **Strong community** support

### 🎯 **Developer Friendliness**

- **Declarative** programming model
- **Component-based** architecture
- **Excellent documentation**
- **Rich learning resources**
- **Cross Platform and cross device**

---

## Getting Started

```bash
# Create a new React project
npx create-react-app my-app
cd my-app
npm install
npm start
```

---

<!-- class: invert -->

## React Essentials

---

<!-- class: lead -->

## What is React?

React is a **declarative, efficient, and flexible** JavaScript library for building user interfaces.

### Core Concepts:

- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient rendering through a lightweight representation of the actual DOM
- **Declarative**: Describe what you want, React handles the DOM updates
- **Learn Once, Write Anywhere**: Use React for web, mobile, and desktop

---

## React Architecture

<div style="display: flex; justify-content: space-between; align-items: center; height: 400px;">
  <div style="flex: 1; text-align: center;">
    <h3>Traditional DOM</h3>
    <div style="border: 2px solid #ccc; padding: 20px; margin: 10px; border-radius: 8px;">
      <p>Direct DOM manipulation</p>
      <p>Slow updates</p>
      <p>Complex state management</p>
    </div>
  </div>
  <div style="flex: 1; text-align: center;">
    <h3>React Virtual DOM</h3>
    <div style="border: 2px solid #4CAF50; padding: 20px; margin: 10px; border-radius: 8px; background-color: #f0f8f0;">
      <p>Virtual DOM diffing</p>
      <p>Efficient updates</p>
      <p>Component state</p>
    </div>
  </div>
</div>

---

## History

### React's Evolution

| Year     | Milestone           | Key Features                     |
| -------- | ------------------- | -------------------------------- |
| **2011** | Created at Facebook | Internal use for Facebook Ads    |
| **2013** | Open-sourced        | Released to public               |
| **2015** | React Native        | Mobile development               |
| **2016** | React Fiber         | New reconciliation algorithm     |
| **2018** | React Hooks         | Functional components with state |
| **2020** | React 18            | Concurrent features, Suspense    |

### Key Contributors:

- **Jordan Walke** - Original creator
- **Facebook/Meta** - Primary maintainer
- **Open Source Community** - Ecosystem growth

---

## Why Use React?

### 🚀 **Performance**

- Virtual DOM for efficient updates
- Optimized rendering algorithms
- Minimal DOM manipulation

### 🧩 **Component Reusability**

- Build once, use everywhere
- Composable architecture
- Easy to maintain and test

### 🌐 **Ecosystem**

- Massive community support
- Rich library ecosystem
- Excellent developer tools

### 📱 **Cross-Platform**

- Web applications
- Mobile apps (React Native)
- Desktop apps (Electron)

---

## React vs Other Frameworks

| Feature            | React        | Vue          | Angular |
| ------------------ | ------------ | ------------ | ------- |
| **Learning Curve** | Moderate     | Easy         | Steep   |
| **Performance**    | Excellent    | Good         | Good    |
| **Ecosystem**      | Massive      | Growing      | Large   |
| **Mobile**         | React Native | NativeScript | Ionic   |
| **Backing**        | Meta         | Community    | Google  |

### React Advantages:

- **Flexibility**: Minimal opinions, maximum freedom
- **Community**: Largest JavaScript ecosystem
- **Jobs**: High demand in job market
- **Future-proof**: Continuous innovation

---

## React Use Cases

### 🌐 **Web Applications**

- **Single Page Applications (SPAs)**
- **Progressive Web Apps (PWAs)**
- **E-commerce platforms**
- **Social media applications**

### 📱 **Mobile Applications**

- **React Native** for iOS and Android
- **Cross-platform development**
- **Native performance**

### 🖥️ **Desktop Applications**

- **Electron** with React
- **Cross-platform desktop apps**
- **Native-like experience**

### 🎯 **Specialized Use Cases**

- **Static sites** (Next.js, Gatsby)
- **Backend services** (Next.js API routes)
- **Real-time applications**
- **Data visualization dashboards**

---

## Popular React Applications

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
    <h4>Social Media</h4>
    <ul>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>Twitter (X)</li>
      <li>LinkedIn</li>
    </ul>
  </div>
  <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
    <h4>Entertainment</h4>
    <ul>
      <li>Netflix</li>
      <li>Discord</li>
      <li>Twitch</li>
      <li>Spotify</li>
    </ul>
  </div>
  <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
    <h4>E-commerce</h4>
    <ul>
      <li>Shopify</li>
      <li>Airbnb</li>
      <li>Uber</li>
      <li>Amazon</li>
    </ul>
  </div>
  <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
    <h4>Productivity</h4>
    <ul>
      <li>Notion</li>
      <li>Figma</li>
      <li>Slack</li>
      <li>Trello</li>
    </ul>
  </div>
</div>

---

## React Development Tools

### 🛠️ **Essential Tools**

- **Create React App** - Quick project setup
- **React Developer Tools** - Browser extension
- **ESLint** - Code quality
- **Prettier** - Code formatting

### 📦 **Build Tools**

- **Webpack** - Module bundling
- **Vite** - Fast development server
- **Babel** - JavaScript transpilation
- **TypeScript** - Type safety

### 🧪 **Testing**

- **Jest** - Unit testing
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing

---

## Simple React Example

<div id="simple-react-demo"></div>

<script type="text/babel">
  const { useState } = React;

  function SimpleCounter() {
    const [count, setCount] = useState(0);

    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        border: '2px solid #4CAF50', 
        borderRadius: '8px',
        backgroundColor: '#f0f8f0'
      }}>
        <h3>Simple React Component</h3>
        <p>Count: <strong>{count}</strong></p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('simple-react-demo')).render(<SimpleCounter />);
</script>

<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

---

## Component Architecture

<div style="display: flex; justify-content: space-between; align-items: center; height: 400px;">
  <div style="flex: 1; text-align: center;">
    <h3>Component Tree</h3>
    <div style="font-family: monospace; text-align: left; margin: 20px;">
      <div style="color: #2196F3;">App</div>
      <div style="margin-left: 20px; color: #4CAF50;">├── Header</div>
      <div style="margin-left: 20px; color: #4CAF50;">├── Sidebar</div>
      <div style="margin-left: 20px; color: #4CAF50;">└── Main</div>
      <div style="margin-left: 40px; color: #FF9800;">    ├── Card</div>
      <div style="margin-left: 40px; color: #FF9800;">    ├── Card</div>
      <div style="margin-left: 40px; color: #FF9800;">    └── Card</div>
    </div>
  </div>
  <div style="flex: 1; text-align: center;">
    <h3>Data Flow</h3>
    <div style="font-family: monospace; text-align: left; margin: 20px;">
      <div>Parent → Props → Child</div>
      <div>Child → Events → Parent</div>
      <div style="margin-top: 20px;">
        <div>State Management:</div>
        <div>• useState (local)</div>
        <div>• useContext (shared)</div>
        <div>• Redux (global)</div>
      </div>
    </div>
  </div>
</div>

---

## React Learning Path

### 📚 **Beginner Level**

1. **JSX Syntax** - Writing React elements
2. **Components** - Building reusable UI pieces
3. **Props** - Passing data between components
4. **State** - Managing component data
5. **Event Handling** - User interactions

### 🚀 **Intermediate Level**

1. **Hooks** - useState, useEffect, useContext
2. **Conditional Rendering** - Dynamic UI
3. **Lists & Keys** - Rendering collections
4. **Forms** - Controlled components
5. **Lifecycle** - Component phases

### 🎯 **Advanced Level**

1. **Performance** - Optimization techniques
2. **Testing** - Unit and integration tests
3. **State Management** - Redux, Zustand
4. **Routing** - React Router
5. **Server Integration** - APIs, SSR

---

<!-- class: invert -->

## JSX (JavaScript XML)

---

<!-- class: lead -->

## JSX

JSX is a syntax extension for JavaScript that looks like HTML but compiles down to JavaScript.

It's used with React to describe the UI in a more readable and declarative way.

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

## JSX Embedding Expressions

You can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.

```jsx
const name = "John Doe";
const element = <h1>Hello, {name}!</h1>;

// You can also use expressions
const user = { firstName: "John", lastName: "Doe" };
const greeting = (
  <h1>
    Hello, {user.firstName} {user.lastName}!
  </h1>
);

// Function calls work too
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const formattedGreeting = <h1>Hello, {formatName(user)}!</h1>;
```

---

## JSX as an expression

JSX can be stored in variables, passed to functions, passed to other components and returned from functions.

```jsx
// Store in variables
const element = <h1>Hello, world!</h1>;

// Use in conditionals
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// Use in loops
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
```

---

## Conditional Rendering in JSX

JSX supports conditional rendering using JavaScript expressions.

```jsx
// Using ternary operator
function Greeting({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}</div>
  );
}

// Using logical AND operator
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

---

## Looping in JSX

You can render lists of elements using JavaScript's `map()` function.

```jsx
// Basic list rendering
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));

// In a component
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ))}
    </ul>
  );
}

// With filtering
function TodoList({ todos }) {
  return (
    <ul>
      {todos
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
  );
}
```

---

## Event Handling in JSX

JSX uses camelCase for event names and passes functions as event handlers.

```jsx
// Basic event handling
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

// With parameters
function Button({ id, text }) {
  function handleClick(id) {
    console.log(`Button ${id} clicked`);
  }

  return <button onClick={() => handleClick(id)}>{text}</button>;
}

// Form handling
function NameForm() {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted: " + value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## JSX Rules

- **Single Parent Element**: JSX must have exactly one parent element
- **Use `className` instead of `class`**: HTML attributes use camelCase
- **Self-closing tags are required**: `<input />` not `<input>`
- **Use `htmlFor` instead of `for`**: For label elements
- **Use `onClick` instead of `onclick`**: Event handlers use camelCase

```jsx
// ❌ Wrong - multiple parent elements
function WrongComponent() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Correct - single parent element
function CorrectComponent() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Better - using React Fragment
function BetterComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}
```

---

## JSX vs HTML Differences

| HTML                      | JSX                      |
| ------------------------- | ------------------------ |
| `class="container"`       | `className="container"`  |
| `<input>`                 | `<input />`              |
| `for="name"`              | `htmlFor="name"`         |
| `onclick="handleClick()"` | `onClick={handleClick}`  |
| `style="color: red"`      | `style={{color: 'red'}}` |

```jsx
// HTML style
<div class="container" onclick="handleClick()">
  <label for="name">Name:</label>
  <input type="text" id="name">
</div>

// JSX style
<div className="container" onClick={handleClick}>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" />
</div>
```

---

## Interactive JSX Demo

<div id="jsx-demo"></div>

<script type="text/babel">
  const { useState } = React;

  function JSXDemo() {
    const [name, setName] = useState("World");
    const [items, setItems] = useState(['React', 'JSX', 'Components']);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
      if (newItem.trim()) {
        setItems([...items, newItem]);
        setNewItem('');
      }
    };

    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Interactive JSX Example</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name-input">Your name: </label>
          <input
            id="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
          <p>Hello, <strong>{name}</strong>!</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <h4>Dynamic List:</h4>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <div>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item"
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <button onClick={addItem}>Add Item</button>
          </div>
        </div>

        <div>
          <h4>Conditional Rendering:</h4>
          {items.length > 3 ? (
            <p style={{ color: 'green' }}>You have many items!</p>
          ) : (
            <p style={{ color: 'orange' }}>Add more items!</p>
          )}
        </div>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('jsx-demo')).render(<JSXDemo />);
</script>

<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

---

## JSX Best Practices

### ✅ Do's

- **Use meaningful component names** (PascalCase)
- **Always include keys** when rendering lists
- **Use fragments** to avoid unnecessary wrapper divs
- **Extract complex logic** into separate functions
- **Use proper event handling** (prevent default, stop propagation)

### ❌ Don'ts

- **Don't use array index as key** (unless list is static)
- **Don't put too much logic in JSX**
- **Don't forget to handle loading/error states**
- **Don't use inline styles for complex styling**

```jsx
// ✅ Good
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// ❌ Bad
function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## Common JSX Patterns

### 1. Conditional Rendering

```jsx
{
  isLoading ? <Spinner /> : <Content />;
}
```

### 2. List Rendering

```jsx
{
  items.map((item) => <Item key={item.id} {...item} />);
}
```

### 3. Fragment Usage

```jsx
<>
  <Header />
  <Main />
  <Footer />
</>
```

### 4. Spread Operator

```jsx
const buttonProps = { type: "submit", disabled: false };
<button {...buttonProps}>Submit</button>;
```

### 5. Children Prop

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

---

## JSX Performance Tips

- **Use React.memo()** for expensive components
- **Avoid creating objects/functions in render**
- **Use useCallback for event handlers**
- **Use useMemo for expensive calculations**

```jsx
// ✅ Good - memoized component
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});

// ✅ Good - memoized callback
function Parent() {
  const handleClick = useCallback(() => {
    // handle click
  }, []);

  return <Child onClick={handleClick} />;
}
```

---

## Next Steps

- **Components**: Building reusable UI pieces
- **Props**: Passing data between components
- **State**: Managing component data
- **Hooks**: Using React's built-in hooks
- **Event Handling**: Responding to user interactions

---

<!-- class: invert -->

## Questions & Practice

Try building a simple component using JSX!

```jsx
function TodoItem({ todo, onToggle }) {
  return (
    <div
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
    </div>
  );
}
```

---

<!-- class: invert -->

## React Components

---

<!-- class: lead -->

## Components

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

---

## What are Components?

Components are **functions or classes** that return JSX. They can be:

- **Reusable** - Use the same component multiple times
- **Composable** - Combine components to build complex UIs
- **Isolated** - Each component manages its own logic and styling

```jsx
// Function Component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow Function Component
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

---

## Component Styles

### 1. Inline Styles

```jsx
function StyledComponent() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        fontSize: "18px",
      }}
    >
      Styled with inline styles
    </div>
  );
}
```

### 2. CSS Classes

```jsx
// Component
function StyledComponent() {
  return (
    <div className="card">
      <h2 className="card-title">Card Title</h2>
      <p className="card-content">Card content here</p>
    </div>
  );
}

// CSS
.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 3. CSS Modules

```jsx
// Component.module.css
.container {
  background: linear-gradient(45deg, #667eea, #764ba2);
  padding: 20px;
  border-radius: 10px;
}

// Component
import styles from './Component.module.css';

function StyledComponent() {
  return (
    <div className={styles.container}>
      Styled with CSS Modules
    </div>
  );
}
```

---

## Props (Properties)

Props are how components receive data from their parent components.

### Basic Props

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Greeting name="John" />
<Greeting name="Jane" />
```

### Destructuring Props

```jsx
function Greeting({ name, age, city }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Using the component
<Greeting name="John" age={25} city="New York" />;
```

### Default Props

```jsx
function Button({ text, color = "blue", size = "medium" }) {
  return (
    <button style={{ backgroundColor: color, fontSize: size }}>
      {text}
    </button>
  );
}

// Using with defaults
<Button text="Click me" />
<Button text="Submit" color="green" size="large" />
```

---

## Props Example

<div id="props-demo"></div>

<script type="text/babel">
  const { useState } = React;

  function UserCard({ name, email, role, avatar }) {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        maxWidth: '300px',
        backgroundColor: '#f9f9f9'
      }}>
        <img 
          src={avatar} 
          alt={name}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            marginBottom: '10px'
          }}
        />
        <h3>{name}</h3>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    );
  }

  function PropsDemo() {
    const [users] = useState([
      {
        name: "John Doe",
        email: "john@example.com",
        role: "Developer",
        avatar: "https://via.placeholder.com/60/4CAF50/FFFFFF?text=JD"
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Designer",
        avatar: "https://via.placeholder.com/60/2196F3/FFFFFF?text=JS"
      }
    ]);

    return (
      <div>
        <h3>Props Demo - User Cards</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              role={user.role}
              avatar={user.avatar}
            />
          ))}
        </div>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('props-demo')).render(<PropsDemo />);
</script>

---

## State

State allows components to manage their own data that can change over time.

### useState Hook

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

### Object State

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const updateUser = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  return (
    <form>
      <input
        value={user.name}
        onChange={(e) => updateUser("name", e.target.value)}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={(e) => updateUser("email", e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => updateUser("age", parseInt(e.target.value))}
        placeholder="Age"
      />
    </form>
  );
}
```

---

## State Example

<div id="state-demo"></div>

<script type="text/babel">
  const { useState } = React;

  function TodoList() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a project', completed: false },
      { id: 3, text: 'Deploy to production', completed: false }
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
      if (newTodo.trim()) {
        setTodos(prevTodos => [
          ...prevTodos,
          { id: Date.now(), text: newTodo, completed: false }
        ]);
        setNewTodo('');
      }
    };

    const toggleTodo = (id) => {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>Todo List with State</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: todo.completed ? '#e8f5e8' : '#f5f5f5',
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('state-demo')).render(<TodoList />);
</script>

---

## Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

### useState Hook

```jsx
import { useState } from "react";

function Example() {
  // Declare a state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### useEffect Hook

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs after component mounts
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
```

---

## More Hooks

### useContext Hook

```jsx
import { createContext, useContext, useState } from "react";

// Create a context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}
```

### useRef Hook

```jsx
import { useRef, useEffect } from "react";

function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </>
  );
}
```

---

## Hooks Example

<div id="hooks-demo"></div>

<script type="text/babel">
  const { useState, useEffect, useRef } = React;

  function HooksDemo() {
    const [count, setCount] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const inputRef = useRef(null);

    // useEffect for window resize
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      
      // Cleanup function
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // useEffect for document title
    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Hooks Demo</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <p>Window width: {windowWidth}px</p>
          <p>Try resizing your browser window!</p>
        </div>

        <div>
          <input
            ref={inputRef}
            placeholder="Click button to focus me"
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button onClick={focusInput}>Focus Input</button>
        </div>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('hooks-demo')).render(<HooksDemo />);
</script>

---

## Event Handling

React events are named using camelCase and pass functions as event handlers.

### Basic Event Handling

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Event with Parameters

```jsx
function Button({ id, text }) {
  const handleClick = (id, event) => {
    console.log(`Button ${id} clicked`);
    console.log("Event:", event);
  };

  return <button onClick={(e) => handleClick(id, e)}>{text}</button>;
}
```

### Form Handling

```jsx
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Event Handling Example

<div id="events-demo"></div>

<script type="text/babel">
  const { useState } = React;

  function EventsDemo() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [keyPressed, setKeyPressed] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleKeyPress = (e) => {
      setKeyPressed(e.key);
    };

    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Form submitted: ${JSON.stringify(formData)}`);
    };

    return (
      <div 
        onMouseMove={handleMouseMove}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        style={{ 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          minHeight: '300px'
        }}
      >
        <h3>Event Handling Demo</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <h4>Mouse Position:</h4>
          <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
          <p>Move your mouse over this area!</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <h4>Key Press:</h4>
          <p>Last key pressed: <strong>{keyPressed || 'None'}</strong></p>
          <p>Click here and press any key!</p>
        </div>

        <div>
          <h4>Form Handling:</h4>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Name"
                style={{ marginRight: '10px', padding: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
                style={{ marginRight: '10px', padding: '5px' }}
              />
            </div>
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('events-demo')).render(<EventsDemo />);
</script>

---

## Component Best Practices

### ✅ Do's

- **Use descriptive component names** (PascalCase)
- **Keep components small and focused**
- **Extract reusable logic into custom hooks**
- **Use proper prop validation**
- **Handle loading and error states**

### ❌ Don'ts

- **Don't create components that are too large**
- **Don't put business logic in components**
- **Don't forget to clean up effects**
- **Don't mutate state directly**

```jsx
// ✅ Good - Small, focused component
function UserAvatar({ user, size = "medium" }) {
  return (
    <img
      src={user.avatar}
      alt={user.name}
      className={`avatar avatar--${size}`}
    />
  );
}

// ❌ Bad - Component doing too much
function UserProfile({ user }) {
  // Too much logic and rendering in one component
  return <div>{/* 100+ lines of JSX */}</div>;
}
```

---

## Component Composition

### Children Prop

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// Usage
<Card title="User Profile">
  <p>This content goes inside the card</p>
  <button>Action</button>
</Card>;
```

### Render Props

```jsx
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// Usage
<DataFetcher url="/api/users">
  {({ data, loading }) =>
    loading ? <div>Loading...</div> : <UserList users={data} />
  }
</DataFetcher>;
```

---

## Next Steps

- **Advanced Hooks**: useMemo, useCallback, useReducer
- **Context API**: Global state management
- **Performance**: React.memo, optimization techniques
- **Testing**: Unit and integration testing
- **Routing**: React Router for navigation

---

<!-- class: invert -->

## Practice Exercise

Build a simple component that combines all concepts:

```jsx
function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

---

<!-- class: invert -->

## Summary

### 🎯 **What We've Covered**

#### **React Fundamentals**
- ✅ Component-based architecture
- ✅ Virtual DOM and performance
- ✅ Declarative programming model
- ✅ Cross-platform development

#### **JSX & Components**
- ✅ JSX syntax and expressions
- ✅ Component creation and composition
- ✅ Props and state management
- ✅ Event handling patterns

#### **Modern React Patterns**
- ✅ Functional components with hooks
- ✅ useState and useEffect
- ✅ Component styling approaches
- ✅ Best practices and optimization

---

## Key Takeaways

### 🧩 **Component-Based Architecture**
- **Reusable** components for maintainable code
- **Composable** design for complex UIs
- **Isolated** state and logic management

### 🎨 **JSX Benefits**
- **Declarative** UI description
- **JavaScript power** in markup
- **Component composition** made easy

### ⚡ **Modern React**
- **Hooks** for functional components
- **Performance** optimization techniques
- **Developer experience** improvements

---

## Next Steps

### 📚 **Continue Learning**
- **Advanced Hooks** - useMemo, useCallback, useReducer
- **Context API** - Global state management
- **React Router** - Navigation and routing
- **Testing** - Unit and integration tests
- **Performance** - Optimization techniques

### 🛠️ **Practice Projects**
- **Todo App** - State management practice
- **Weather App** - API integration
- **E-commerce Site** - Complex component structure
- **Social Media Clone** - Full-stack application

### 🌐 **Resources**
- **Official Docs** - react.dev
- **Community** - React Discord, Reddit
- **Courses** - Udemy, Pluralsight, Frontend Masters
- **Practice** - CodeSandbox, CodePen, GitHub

---

## Q&A Session

### 🤔 **Common Questions**
- How does React compare to Vue/Angular?
- When should I use class vs functional components?
- What's the best way to manage global state?
- How do I optimize React performance?

### 💡 **Tips for Success**
- **Start small** - Build simple components first
- **Practice regularly** - Code daily if possible
- **Read the docs** - React documentation is excellent
- **Join communities** - Learn from others
- **Build projects** - Apply what you learn

---

![bg](https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NXk0azVlc3M1ZjA1NWZlOG5rZGtnODc2bGVicGRwMHFud3Vrd3VleiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/4ZZB0ARXQC1t6/giphy.webp)

---

<!-- class: lead -->

## Thank You!

### 🎉 **Congratulations!**
You've completed the React Essentials course!

### 📞 **Stay Connected**
- **Slack/Discord** - Join our community
- **GitHub** - Share your projects
- **LinkedIn** - Connect professionally
- **Portfolio** - Showcase your work

### 🚀 **Keep Building**
Remember: The best way to learn React is to build with React!

**Happy coding!** 🎯
```

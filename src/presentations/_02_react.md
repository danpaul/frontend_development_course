---
marp: true
theme: default
paginate: true
---

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

---

# My Counter in Markdown

<div id="counter-root"></div>

<script type="text/babel">
  const { useState } = React;

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('counter-root')).render(<Counter />);
</script>

<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

---

# My Counter in Markdown 2

<div id="counter-root-2"></div>

<script type="text/babel">
  const { useState } = React;

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('counter-root-2')).render(<Counter />);
</script>

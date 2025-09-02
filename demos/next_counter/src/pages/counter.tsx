import { useState } from "react";

export default function Home({ initialCount }: { initialCount: number }) {
  // This state will be hydrated on the client
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// SSR: fetch initial count
export async function getServerSideProps() {
  return {
    props: {
      initialCount: 10, // server-rendered initial value
    },
  };
}

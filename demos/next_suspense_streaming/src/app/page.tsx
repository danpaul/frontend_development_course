import { Suspense } from "react";

async function Delayed({ wait }: { wait: number }) {
  await new Promise((resolve) => setTimeout(resolve, wait));
  return <div>ready after {wait}ms</div>;
}

export default function Page() {
  return (
    <main>
      <h1>Streaming with Suspense</h1>
      <p>Fallbacks paint first. Each Server Component streams in when its delay finishes.</p>

      <Suspense fallback={<div>waiting 100....</div>}>
        <Delayed wait={100} />
      </Suspense>
      <Suspense fallback={<div>waiting 200....</div>}>
        <Delayed wait={200} />
      </Suspense>
      <Suspense fallback={<div>waiting 300....</div>}>
        <Delayed wait={300} />
      </Suspense>
      <Suspense fallback={<div>waiting 400....</div>}>
        <Delayed wait={400} />
      </Suspense>
      <Suspense fallback={<div>waiting 500....</div>}>
        <Delayed wait={500} />
      </Suspense>
      <Suspense fallback={<div>waiting 600....</div>}>
        <Delayed wait={600} />
      </Suspense>
      <Suspense fallback={<div>waiting 700....</div>}>
        <Delayed wait={700} />
      </Suspense>

      <fieldset>
        <legend>
          combined <code>Suspense</code> container
        </legend>
        <Suspense
          fallback={
            <>
              <div>waiting 800....</div>
              <div>waiting 900....</div>
              <div>waiting 1000....</div>
            </>
          }
        >
          <Delayed wait={800} />
          <Delayed wait={900} />
          <Delayed wait={1000} />
        </Suspense>
      </fieldset>
    </main>
  );
}

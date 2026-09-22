---
marp: true
theme: default
paginate: true
---

<style>
@media screen {
  [data-marpit-fragment]:not([data-marpit-fragment]:current) {
    display: none;
  }
}
</style>

<!-- class: invert -->

# State and Data Management

_Where does this data live, and who owns the cache?_

---

<!-- class: lead -->

## Learning objectives

By the end of this session, you will be able to:

- Decide **where a piece of state belongs** (component, URL, context, server, client cache, client store)
- **Lift state** or use **context** on purpose — and say when each is the wrong tool
- Write a typed **`useQuery` / `useMutation`** with a **stable query key**
- Explain when **TanStack Query** is useful in Next.js, and when a **Server Component** is enough

---

<style scoped>
  section {
    font-size: 20px;
  }
  table {
    font-size: 18px;
  }
  th, td {
    padding: 0.3em 0.55em;
  }
</style>

## Where does the data live?

| Kind of data | Lives in | Tool |
| --- | --- | --- |
| Modal open, form draft, hover | Component | `useState` |
| Auth, theme, locale | App-wide client | Context |
| Wizard / multi-step client flow | Structured client | `useReducer` + context |
| Current page, filters, selected tab | URL | `searchParams`, route params |
| Posts, products, the logged-in user | Server | Server Component `fetch` / Prisma |
| Same server data, but the **client** must refetch, poll, or share a cache | Client cache of server data | TanStack Query |
| Editor, game, offline world | Client store | Zustand / Redux Toolkit — sketch |

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## Client state vs server state

**Client state** is UI the browser owns. Close the tab and it is gone, unless you persist it on purpose.

**Server state** lives on a machine you do not control. The client can hold a **copy**. That copy can be briefly wrong.

---

## URL is state

After last week, you already store state in the address bar.

- `/posts/42` — which resource
- `?sort=price&inStock=1` — filters
- `?tab=reviews` — which panel is open

Prefer URL state for GET related views which may contain filtering and sorting

We can handle these pages as normal server rendered pages and allow Next manage state around navigation.

No need to maintain a separate client state management system in these cases.

The makes pages and views bookmarkable and easliy sharable. This is better for UX and SEO.

---

<!-- class: invert -->

## Lifting state

---

<!-- class: lead -->

## You already know `useState`

Week 2: a component keeps data across renders with `useState`. Setters schedule a re-render.

The new question: **who else needs this value?**

If two siblings need it, the state does not live in either of them. It lives in the **nearest parent that is a parent of both**, and you pass the value and the setter (or a handler) down as props.

That is **lifting state**. Data down, events up — same rule as week 2, one level higher.

---

<style scoped>
  section {
    font-size: 18px;
  }
  .columns {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 1.25rem;
    align-items: center;
  }
  pre {
    font-size: 14px;
    margin: 0.35em 0 0.6em;
  }
  .browser {
    border: 1px solid #c5cad3;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    color: #1c1c1c;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
    pointer-events: none;
  }
  .browser-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #e6e8ee;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .dot.r { background: #ff5f57; }
  .dot.y { background: #febc2e; }
  .dot.g { background: #28c840; }
  .url {
    flex: 1;
    margin-left: 6px;
    background: #fff;
    border-radius: 999px;
    padding: 3px 12px;
    font-size: 13px;
    color: #555;
  }
  .browser-body {
    padding: 14px 16px 16px;
    background: #f4f6f8;
  }
  .owner {
    margin: 0 0 12px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #1d4e89;
    background: #e7f0fa;
    border-radius: 6px;
    padding: 6px 10px;
  }
  .siblings {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .panel {
    background: #fff;
    border: 1px solid #d5d9e0;
    border-radius: 8px;
    padding: 12px 10px 10px;
    text-align: center;
  }
  .panel p {
    margin: 0;
  }
  .label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #666;
  }
  .count {
    font-size: 42px;
    line-height: 1.15;
    font-weight: 700;
  }
  .btn {
    display: inline-block;
    margin-top: 10px;
    background: #1d4e89;
    color: #fff;
    border-radius: 6px;
    padding: 8px 18px;
    font-size: 18px;
    font-weight: 700;
  }
  .hint {
    margin-top: 10px !important;
    font-size: 13px;
    color: #666;
  }
</style>

## Lifted state

<div class="columns">
<div>

```tsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <Incrementer onIncrement={() => setCount((c) => c + 1)} />
    </>
  );
}
```

`Display` does not own the number. `Incrementer` does not own the number. `App` does.

</div>
<div>

<div class="browser">
  <div class="browser-bar">
    <span class="dot r"></span>
    <span class="dot y"></span>
    <span class="dot g"></span>
    <span class="url">localhost:3000</span>
  </div>
  <div class="browser-body">
    <p class="owner">App owns count = 3</p>
    <div class="siblings">
      <div class="panel">
        <p class="label">Display</p>
        <p class="count">3</p>
        <p class="hint">reads count</p>
      </div>
      <div class="panel">
        <p class="label">Incrementer</p>
        <p class="btn">+ 1</p>
        <p class="hint">sends onIncrement</p>
      </div>
    </div>
  </div>
</div>

</div>
</div>

---

<style scoped>
  img {
    display: block;
    max-width: calc(100% - 32px);
    margin: 8px auto 0;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
  }
</style>

## Deep lifted state

![prop drilling](assets/prop_drilling_02.png)

---

<style scoped>
  section {
    font-size: 24px;
  }
  pre {
    font-size: 18px;
  }
</style>

## Prop drilling

Passing props is **explicit**. That is a feature: you can see the data move.

It becomes a problem when values travel through **components that do not use them**.

```
App (user, cart)
  └── Layout          ← unused; forwards both
        └── Header          ← wants user
        └── Page            ← unused; forwards cart
              └── Gallery
                    └── AddToCart  ← wants cart
```

A product page has this shape: header badge, gallery, add-to-cart, related items. The tree is not a counter. **Prop drilling** is that forwarding.

---

<!-- class: invert -->

## Context

---

<!-- class: lead -->

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## Skip the plumbing

React **context** lets a parent provide a value to any descendant without threading props through the middle.

Three pieces — only one of them is a hook:

1. **`createContext()`** — a function that creates the channel
2. **`<SomeContext.Provider value={...}>`** — the component that publishes
3. **`useContext(SomeContext)`** — the hook that reads

`createContext` is **not** a hook. Hooks are the `use*` functions.

**Read later:** [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

---

<style scoped>
  section {
    font-size: 20px;
  }
  pre {
    font-size: 15px;
  }
</style>

## A `useAuth` hook

```tsx
import { createContext, useContext, useState, type ReactNode } from "react";

const AuthContext = createContext<Auth | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
```

That `throw` is the custom-hook pattern from week 2: fail loudly when the tree is wrong.

---

<style scoped>
  section {
    font-size: 20px;
  }
  pre {
    font-size: 15px;
  }
</style>

## Using `useAuth`

Wrap the tree once. Descendants read and update auth without receiving it as a prop.

```tsx
function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

function Header() {
  const { user, setUser } = useAuth();

  if (!user) {
    return <button onClick={() => setUser({ name: "Ada" })}>Log in</button>;
  }

  return <button onClick={() => setUser(null)}>Log out {user.name}</button>;
}
```

`Layout` in between can stay empty of auth props. `Header` is the consumer.

---

<!-- class: invert -->

# Demo: auth context

`demos/context_auth_example`

---

<!-- class: lead -->

## What to look at

```bash
cd demos/context_auth_example
npm install
npm start
```

- `src/App.tsx` — the **provider** wraps the tree
- `src/AuthContext.tsx` — `createContext`, provider, `useAuth`
- `src/Status.tsx` and `src/AuthButtons.tsx` — consumers; **no auth props**

In React DevTools, find the provider and the consumers. Login is **client** state. A real app would hydrate it from a cookie or session — the server is still the source of truth.

<!--
This demo's login() only flips a boolean. Good for the tree; not a security model.
Value object is recreated every render — mention if someone asks about memo / split providers.
-->

---

## Context has limits

Context is a **shared store** for the subtree. All the reasons not to dump everything into globals apply.

What should **not** go in context?

- The current article, product, or query result — that is **server data**, or props for one page
- High-frequency values (mouse position, keystrokes) — every consumer **re-renders** when the value changes
- Anything only two nearby components need — **lift state** instead

Context is a good fit for **auth, theme, locale, and settings**: one source of truth, needed in many distant places.

<!--
If they put "current post" in context, every page fights over the same slot and cache invalidation becomes guesswork. Next slides sketch reducer + context, then we switch to server data.
-->

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## Reducer + context

For a **wizard or multi-step form**, `useState` turns into a pile of setters. Pair **`useReducer`** with context: the reducer owns the transitions (`next`, `back`, `setEmail`); context delivers `state` and `dispatch` without drilling.

**Read later:** [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 14px;
  }
</style>

## The wizard reducer

One function owns every transition. `step` and `email` change only here.

```tsx
type State = { step: number; email: string };
type Action =
  | { type: "next" }
  | { type: "back" }
  | { type: "setEmail"; email: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "next":
      return { ...state, step: state.step + 1 };
    case "back":
      return { ...state, step: Math.max(0, state.step - 1) };
    case "setEmail":
      return { ...state, email: action.email };
  }
}
```

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 14px;
  }
</style>

## `WizardProvider` and `useWizard`

`useReducer` lives in the provider. Context publishes `{ state, dispatch }` instead of `{ user, setUser }`. `useWizard` is `useContext`, then the same throw if the component sits outside the provider.

```tsx
import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";

type Wizard = {
  state: State;
  dispatch: Dispatch<Action>;
};

const WizardContext = createContext<Wizard | null>(null);

function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { step: 0, email: "" });
  return (
    <WizardContext.Provider value={{ state, dispatch }}>
      {children}
    </WizardContext.Provider>
  );
}

function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used inside WizardProvider");
  return ctx;
}
```

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 15px;
  }
</style>

## A step reads the wizard

Wrap the tree once. A step calls `useWizard`. It never receives `state` or `dispatch` as props.

```tsx
function App() {
  return (
    <WizardProvider>
      <EmailStep />
    </WizardProvider>
  );
}

function EmailStep() {
  const { state, dispatch } = useWizard();
  return (
    <>
      <input
        value={state.email}
        onChange={(e) => dispatch({ type: "setEmail", email: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "back" })}>Back</button>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
    </>
  );
}
```

<!--
Initial state is { step: 0, email: "" }, passed to useReducer in WizardProvider. This is a sketch, not a demo.
-->

---

<!-- class: invert -->

## Server data in this stack

---

<!-- class: lead -->

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## Default: the server already fetches

Last week: in the App Router, a page is a **Server Component** unless you opt out. It can `await fetch` or Prisma **during render**. Next 15 `fetch` is uncached until you opt in.

Prisma (week 1 tooling) is how **this course’s app** talks to the database. That is server data access. It is not a client cache.

If the HTML can include the data, **start there**. You do not need TanStack Query to show a list of posts on first paint.

```tsx
export default async function PostsPage() {
  const posts = await prisma.post.findMany();
  return <PostList posts={posts} />;
}
```

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## When the client must own a cache

Server Components do not help when:

- A **client island** must refetch after a click, poll, or pagination
- **Several client components** need the same remote data without extra props
- You are on **React Native** — there is no Server Component

Then you want a **client cache of server state**: load once, share the result, refetch when it might be stale, update after a mutation.

Putting that cache in Redux works. It is also a lot of ceremony for “GET /posts, remember the JSON.”

---

<!-- class: invert -->

## TanStack Query

---

<!-- class: lead -->

<style scoped>
  section {
    font-size: 24px;
  }
</style>

## Cache invalidation is the job

_There are only two hard things in Computer Science: cache invalidation and naming things._ — Phil Karlton

TanStack Query (formerly React Query) is a client cache for **server** state: fetch, share, refetch from cache, mutate, invalidate.

It is **not** a replacement for Server Components. It is the tool for the cases on the previous slide.

Co-locate the query in the component that needs the data. The library owns the cache.

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## What people try instead

How have you loaded server data into a client UI?

**`fetch` in `useEffect`.** No cache. Remounts refetch. Two components mean two requests. You write pending / error / success by hand.

**A global store** (Pinia in Vue, Redux in React). The data is remote, but you treat it like client state: extra indirection, easy to go stale, poor co-location.

TanStack Query keeps the query next to the UI and treats **freshness** as a first-class problem.

---

## Three pieces

To use it productively you need:

1. A **`QueryClientProvider`** at the root (setup, once)
2. **`useQuery`** — read / cache
3. **`useMutation`** + **`invalidateQueries`** — write, then drop stale reads

Query functions are plain **async functions that throw** on failure. Same shape as last week’s `fetch`.

---

<style scoped>
  section {
    font-size: 20px;
  }
  pre {
    font-size: 16px;
  }
</style>

## Provider

`QueryClient` is the cache. The provider makes it available to hooks. In Next, this file is a **client** component so the provider can use context.

```tsx
"use client";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

Wrap the app in `layout.tsx`. Do not create the client at module scope in Next — SSR would share it across requests. Look at `demos/next_tanstack_query/app/providers.tsx` for the safe version: one client in the browser, a new one per server request.

---

<style scoped>
  section {
    font-size: 20px;
  }
  pre {
    font-size: 16px;
  }
</style>

## Query functions throw

```ts
type Todo = { id: number; title: string; completed: boolean };

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("/api/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  return res.json();
}
```

No `try/catch` in the component. If it throws, `useQuery` surfaces `isError` and `error`.

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 15px;
  }
</style>

## `useQuery`

```tsx
function Todos() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) return <p>Loading…</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

As the query moves pending → success / error, those fields update and the component re-renders. **`isPending`**, not `isLoading` — TanStack Query v5.

After the `isError` check, TypeScript knows `data` is defined. No `data!`.

---

## Query keys identify the cache slot

`queryKey` is always an **array**. It is the cache address.

```ts
useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
useQuery({ queryKey: ["todos", id], queryFn: () => fetchTodo(id) });
```

Convention we will stick to:

- Collection: `["todos"]`
- One item: `["todos", id]` — **same prefix**, extra segment

Keys must be **stable and descriptive**. Prefer arrays over concatenated strings (`"todo" + id`).

**Read later:** [Query Keys](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys)

---

<style scoped>
  section {
    font-size: 22px;
  }
  pre {
    font-size: 18px;
  }
</style>

## Invalidation follows the key

```ts
// This one item
queryClient.invalidateQueries({ queryKey: ["todos", todoId] });

// Every query whose key *starts with* ["todos"] — list and items
queryClient.invalidateQueries({ queryKey: ["todos"] });
```

That prefix rule is why `["todos"]` / `["todos", id]` matters. If the list were `["todos"]` and the item were `["todo", id]`, invalidating the list would **miss** the item.

<!--
This is the exam trap. Drill it. Same as REST: /todos vs /todos/:id, not /todo/:id for members of /todos.
-->

---

<style scoped>
  section {
    font-size: 20px;
  }
  pre {
    font-size: 15px;
  }
</style>

## Mutations invalidate

`mutationFn` is the same idea: a plain async function that throws.

```tsx
const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});

<button
  onClick={() => mutation.mutate({ title: "Do laundry" })}
  disabled={mutation.isPending}
>
  {mutation.isPending ? "Adding…" : "Add todo"}
</button>
```

You do not `setTodos` from the response. You **mark the cache stale**. Query refetches; the list matches the server.

That is cache invalidation in four lines.

<!--
Optimistic updates are the extra-credit version: update the cache before the response, roll back on error. Point at docs if someone asks. Skip useInfiniteQuery unless a project needs it.
-->

---

## Optional: prefetch on the server

If you **already** chose TanStack Query **and** you want the first HTML to include that cache, prefetch in a Server Component and **dehydrate** the client.

- **Prefetch** — run the query on the server so the result exists before the browser hydrates
- **Dehydrate / hydrate** — serialize that cache into the HTML, then reattach it on the client

This is **not** the default Next data path. Server Component `fetch` still wins when the page can just render the data. Use this when client components will keep calling `useQuery` after paint.

**Read later:** [Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr)

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 14px;
  }
</style>

## Prefetch + `HydrationBoundary`

```tsx
// app/page.tsx — Server Component
export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
```

`Posts` is a client component that calls `useQuery({ queryKey: ["posts"], ... })`. The cache is already warm: no loading flash, no extra waterfall for that query.

`QueryClientProvider` stays in a `"use client"` provider. Keep the query client **out of** Server Components except for this prefetch.

---

<!-- class: invert -->

# Demo: prefetch in Next

`demos/next_tanstack_query`

---


<!-- class: lead -->

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## What to look at

```bash
cd demos/next_tanstack_query
npm install
npm run dev
```

- `app/providers.tsx` — provider (client)
- `app/page.tsx` — Server Component **prefetches** `["posts"]`
- `app/posts.tsx` — client `useQuery` with the **same key**
- `app/posts/[id]/page.tsx` — same pattern for `["posts", id]`

Read the comments. View source on `/` — the post titles should already be in the HTML.

The query functions **throw** on failure. Keys are arrays with a shared prefix.

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## When not to use TanStack Query

In **this** Next app, skip it when:

- A Server Component can `await` Prisma / `fetch` and pass props into a client island
- A **Server Action** can handle the form (week 3)
- The data is local UI state

Use it when:

- The client must refetch, poll, paginate, or share a remote cache
- You want mutation → invalidate → UI matches the server
- You are on **React Native** next week

<!--
Infinite queries / optimistic updates: docs, not this hour.
-->

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## A dedicated client store

Most apps in this course never need one.

If a lot of state is **client-only** and **not** a cache of the server — a design tool, a game, a big offline editor — you want a store.

- **Zustand** feels close to **Pinia**: import a store, call it in components
- **Redux Toolkit** is what you will see in large existing codebases

Zustand stays a name. The next slides are a Redux Toolkit sketch so a job ad makes sense. You will not be examined on either. Theme and auth still belong in **context**, not a store, unless the app is already store-shaped.

<!--
Week 1 intro used to promise Redux. Sketch only — not examined. Zustand is named, not shown.
-->

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 14px;
  }
</style>

## Redux Toolkit is one store

Same idea as `useReducer`: state changes only in a reducer. The store lives **outside** React. A **slice** is one piece of that store — its state, and the reducers that change only that piece. `createSlice` names the piece (`counter`) and writes the actions with the reducer. The assignment looks like a mutation; Immer returns the next state.

```tsx
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

`createSlice` and `configureStore` come from `@reduxjs/toolkit`.

---

<style scoped>
  section {
    font-size: 18px;
  }
  pre {
    font-size: 14px;
  }
</style>

## A component reads the store

`Provider` is the context. `useSelector` reads a slice. `useDispatch` sends an action. Nothing in between receives the counter as a prop.

```tsx
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const value = useSelector(
    (s: { counter: { value: number } }) => s.counter.value,
  );
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(counterSlice.actions.increment())}>
      {value}
    </button>
  );
}
```

`Provider`, `useSelector`, and `useDispatch` come from `react-redux`.

<!--
Sketch, not a demo. RootState is usually ReturnType<typeof store.getState>. Immer is why increment can assign state.value. Ask if they see the parallel to WizardProvider.
Read later: https://redux-toolkit.js.org/tutorials/quick-start
-->

---

<!-- class: invert -->

## Next week and this week’s demo

---

<style scoped>
  section {
    font-size: 24px;
  }
</style>

## React Native: the client owns the session

On the phone there is **no** Server Component. There is a JS bundle and HTTP.

The decision table shrinks:

- UI → `useState` / context
- Server data → **TanStack Query** (or equivalent)
- Big client-only world → a store

This lecture is setup for that, not a detour.

---

<style scoped>
  section {
    font-size: 24px;
  }
</style>

## Hackathon audit (30 seconds)

Before you demo, pick **three** pieces of state in your project.

For each one: which **row of the table** is it?

If you fetched a list in `useEffect` into `useState`, that is the pattern Query (or a Server Component) is meant to replace. You do not have to rewrite it today. You should be able to **say** what you would change.

---

<style scoped>
  section {
    font-size: 20px;
  }
  table {
    font-size: 18px;
  }
  th, td {
    padding: 0.3em 0.55em;
  }
</style>

## The table again

| Kind of data | Tool |
| --- | --- |
| Local UI | `useState` / props |
| Auth, theme, settings | Context |
| Multi-step client flow | `useReducer` + context |
| Shareable UI (page, filters) | URL |
| Server data, first paint in Next | Server Component + Prisma / `fetch` |
| Server data the client must cache | TanStack Query |
| Large client-only domain | Zustand / Redux Toolkit (sketch) |

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## Check your understanding

1. A product page has a **like** button. What is server state? What is UI state?
2. After `POST /todos`, why **invalidate** `["todos"]` instead of `setTodos` from the response?
3. Why is **context** the wrong place for “the current article”?

<!--
1. Whether this user liked it, and the like count, are server. The optimistic bounce / spinner is UI. The product itself is server data — fetch it in a Server Component; the button is a client island.
2. The cache (and any other component using ["todos"]) must match the server. Invalidation refetches; splicing the array yourself drifts the moment another client or another query exists.
3. Articles are per-route server data. Context makes a global slot every page fights over, and you lose the query-key / cache story. Pass props or useQuery(["posts", id]).
-->

---

<style scoped>
  section {
    font-size: 22px;
  }
</style>

## Reading

Do these after class, not instead of the demos. Same list: `/homework/week_04.md`.

- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Query Keys](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys)
- [Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
- [Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr) (optional; prefetch demo)

---

## Summary

- Ask **where the data lives** before you pick a library
- Lift state until drilling hurts; then **context** for auth/theme, not for page data
- In Next, **Server Components fetch first**; TanStack Query is a **client cache** of server state
- Query keys are arrays; **invalidate the prefix** after mutations
- Next week on native, that client cache becomes the default

### Questions

- Which row of the table is least clear?
- Anything in your hackathon you now want to recategorize?

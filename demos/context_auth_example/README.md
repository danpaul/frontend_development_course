# Auth context demo

Login state is provided at the root. Distant children read it with `useAuth` — no auth props.

Used in the week 4 state-management lecture. Client-only (`npm start`). Login only flips a boolean; it is not a security model.

## What to look at

1. `src/App.tsx` — `<AuthProvider>` wraps the tree
2. `src/AuthContext.tsx` — `createContext`, provider, `useAuth` (throws outside the provider)
3. `src/Status.tsx` / `src/AuthButtons.tsx` — consumers; they do not take auth props

In React DevTools, find the provider and the consumers.

## Run

```bash
npm install
npm start
```

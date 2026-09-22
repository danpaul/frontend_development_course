# Prop drilling demo

A counter whose state lives in `Counter` and is passed through two components that do not use it.

Used in the week 4 state-management lecture. Client-only (`npm start`).

## What to look at

1. `src/Counter.tsx` — `useState` lives here
2. `src/Middle.tsx` / `src/SecondMiddle.tsx` — plumbing; they only forward props
3. `src/CounterDisplay.tsx` — the leaf that reads `count` and calls the handlers

In React DevTools, inspect each component. Who has **state**? Who only has **props**?

## Run

```bash
npm install
npm start
```

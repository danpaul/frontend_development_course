# TanStack Query + App Router demo

A Server Component **prefetches** posts, dehydrates the cache, and a client component reads the **same query key** with `useQuery`.

Used in the week 4 state-management lecture.

## What to look at

1. `app/providers.tsx` — `QueryClientProvider` (`"use client"`)
2. `app/page.tsx` — Server Component prefetches `["posts"]`
3. `app/posts.tsx` — client `useQuery` with that key (cache is already warm)
4. `app/posts/[id]/page.tsx` + `post.tsx` — same pattern for `["posts", id]`
5. `queries/posts.tsx` — query keys as arrays; `fetch` functions **throw** on failure

View page source on `/`. The post titles should already be in the HTML.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---
marp: true
theme: default
paginate: true
---

<!-- class: invert -->

# Introduction to Next.js

_A modern JavaScript library for building fullstack React applications_

---

<!-- class: lead -->

## Next.js

- Next.js is a _fullstack_ React framework for building React applications.
- Next.js allows you to work within a single React codebase across the front and back end of your application.
- Next.js can be rendered fully on the server, statically built, rendered fully on the client or (more typically) hybrid rendered on both the front and back end.
- Why it’s popular: performance, SEO (avoid SPA pitfalls), developer experience (single React application, blurs the distinction between FE/BE code).

---

## Key Features

- **File-based routing** (pages directory, app directory in Next.js 13+).
- **Pre-rendering** (SSG – Static Site Generation, SSR – Server-Side Rendering).
- **API Routes** (creating backend endpoints inside Next.js).
- **Image Optimization** (`next/image`).
- **Built-in CSS & styling support** (CSS modules, Tailwind, styled-jsx, etc.).
- **Middleware** (running code before requests are processed).
- **App Router & React Server Components** (from Next.js 13+).

---

<!-- class: invert -->

# Rendering in Next.js

---

<!-- class: lead -->

## Next.js Rendering Strategies

Unlike traditional React applications which rely on frontend only rendering, Next.js supports a variety rendering strategies.

- **CSR (Client-Side Rendering)** – standard React behavior (single page application, SPA).
- **SSR (Server-Side Rendering)** – `getServerSideProps`.
- **SSG (Static Site Generation)** – `getStaticProps` + `getStaticPaths`.
- **ISR (Incremental Static Regeneration)** - statical generate site but conditional regenerate based on condition (like cache expiration)
- **PPR (Partial Prerendering)** – render on the server what is static, render on the client what is dynamic

---

## Benefits of hybrid rendering

- **SEO** - Traditional client side rendering can result in worse SEO for a variety of reasons including:
  - Slow to first paint (when browser loads actual pixels to the canvas) - typically SPAs must make additional network requests before painting the canvas
  - Head elements are often not rendered properly in SPAs, which makes indexing metadata more difficulty
  - Client side routing can result in poorly indexed site pages
- Quicker page load - when static content is rendered on the server, it can be cached and pushed to edge servers for quick page loads.
- Hybrid rendering allows the static parts of the site to be rendered and cached on the server while the dynamic, app portions of the site can still use React on the client side and allow dynamic interactivity.

---

<!-- class: invert -->

# Routing in Next.js

---

<!-- class: lead -->

## 4. Routing System

- **Pages Router** (traditional): `pages/index.js`, dynamic routes `[id].js`.
- **App Router** (new): `app/` directory, nested layouts, server components, loading states.
- API differences between `pages/` and `app/`.

---

## 5. Data Fetching

- **Older methods:** `getStaticProps`, `getServerSideProps`, `getStaticPaths`.
- **New App Router methods:** `fetch()` in Server Components, `generateStaticParams`.
- **Client vs. Server data fetching tradeoffs**.

---

## 6. Styling in Next.js

- CSS Modules.
- Sass/SCSS support.
- Styled-jsx.
- Tailwind CSS integration.

---

## 7. API Routes

- Creating backend endpoints inside `pages/api/` or `app/api/`.
- Example: building a contact form, handling authentication, etc.

---

## 8. Deployment & Hosting

- Deploying on **Vercel** (official host).
- Other hosting options (Netlify, AWS, custom servers).
- Edge functions & middleware.

---

## 9. Performance & Optimization

- Code splitting & automatic bundling.
- Optimized images (`next/image`).
- Optimized fonts (`next/font`).
- Caching strategies.

---

## Getting started

---

## 10. Advanced Topics (if time permits)

- Middleware use cases (auth, redirects, logging).
- Internationalization (i18n).
- Environment variables.
- API integrations & serverless functions.
- Edge Runtime.

---

### 💡 Tips for an Engaging Lecture

- Show a **demo project** (like a blog or e-commerce store).
- Compare **Next.js vs. plain React**.
- Walk through **creating a new app with `npx create-next-app@latest`**.
- Highlight **real-world use cases** (e.g., why Netflix, TikTok, and others use it).

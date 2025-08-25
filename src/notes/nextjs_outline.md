- pages routing
- rendering
  - traditional
    - getStaticProps
    - getServerProps
- app router
  - layouts (nested)
  - props (params)

---

## 1. Introduction to Next.js

- What Next.js is: a React framework for production-ready apps.
- Why it’s popular: performance, SEO, developer experience.
- Core philosophy: **“Hybrid rendering, zero-config, full-stack React.”**

---

## 2. Key Features

- **File-based routing** (pages directory, app directory in Next.js 13+).
- **Pre-rendering** (SSG – Static Site Generation, SSR – Server-Side Rendering).
- **API Routes** (creating backend endpoints inside Next.js).
- **Image Optimization** (`next/image`).
- **Built-in CSS & styling support** (CSS modules, Tailwind, styled-jsx, etc.).
- **Middleware** (running code before requests are processed).
- **App Router & React Server Components** (from Next.js 13+).

---

## 3. Rendering Strategies

- **CSR (Client-Side Rendering)** – standard React behavior.
- **SSR (Server-Side Rendering)** – `getServerSideProps`.
- **SSG (Static Site Generation)** – `getStaticProps` + `getStaticPaths`.
- **ISR (Incremental Static Regeneration)** – updating static pages without full rebuild.
- When to use each strategy (performance vs. dynamic needs).

---

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

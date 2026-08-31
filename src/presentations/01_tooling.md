---
marp: true
theme: default
paginate: true
---

<!-- only include once in document -->
<style scoped>
@media screen {
  /* Hide not current fragments */
  [data-marpit-fragment]:not([data-marpit-fragment]:current) {
    display: none;
  }
}
</style>

<!-- class: invert -->

## Tooling and stack

---

<!-- class: lead -->

## Tooling

<style scoped>
  section {
    font-size: 20px;
  }
</style>

![bg contain right:35%](./assets/useless_hammer.jpg)

[VS Code](https://code.visualstudio.com/)

An AI Coding tool. Cursor/Copilot/Claude, etc.

_During the first portion of class we will be focused on processes around AI engineering, not specific tools._

I will be using [Cursor](https://cursor.com/).

VS Code Extensions (also work in Cursor)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional, for presentations)

[Node/NPM](https://nodejs.org/en/download)

[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

---

## Activity: tooling and repo setup - 10 minutes

- If you have not done so already, clone the course materials and course code repos:
  - Course material: [https://github.com/danpaul/frontend_development_course](https://github.com/danpaul/frontend_development_course)
  - Course code: [https://github.com/danpaul/frontend_development_course_code](https://github.com/danpaul/frontend_development_course_code)
- Install the tools from the previous slide
- In the root of the course code repo, run:
  - `npm i` / `npm install`
  - `npm run dev`
- You should see a todo app at [http://localhost:3000/](http://localhost:3000/)
- Read the code repo README and start exploring the codebase.

---

## The Stack

- [React 19](https://react.dev/)
- [Nextjs](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Storybook](https://storybook.js.org/)
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
- [Tailwind](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)

---

## React 19

<style scoped>
  section {
    font-size: 24px;
  }
</style>

![bg contain right:50%](https://react.dev/images/og-home.png)

- A JavaScript library for building user interfaces from **reusable components**
- You describe _what_ the UI should look like; React keeps the DOM in sync when data changes
- React 19 improves server components, forms (Actions), and async rendering
- The foundation of everything we build in this course — we go deep later

[react.dev](https://react.dev/)

---

## Next.js

<style scoped>
  section {
    font-size: 24px;
  }
</style>

![bg contain right:50%](https://h8dxkfmaphn8o0p3.public.blob.vercel-storage.com/nextjs/twitter-card.png)

- A **React framework** for production web applications
- File-based routing, server-side rendering, and API routes out of the box
- Full-stack in one repo: UI, backend logic, and deployment-friendly builds
- Our course codebase runs on Next.js — you already saw it at `localhost:3000`

[nextjs.org](https://nextjs.org/)

---

## Prisma

<style scoped>
  section {
    font-size: 26px;
  }
</style>

![bg contain right:50%](https://upload.wikimedia.org/wikipedia/commons/6/63/Dispersion_prism.jpg?utm_source=nl.wikipedia.org&utm_campaign=index&utm_content=original)

- A **type-safe ORM** for Node.js and TypeScript
- Define your database schema in code; Prisma generates migrations and a typed client
- Query the database without hand-writing SQL — autocomplete catches mistakes early
- Used when our projects need persistent data (users, todos, etc.)

[prisma.io](https://www.prisma.io/)

---

<style scoped>
  section {
    font-size: 26px;
  }
</style>

## Storybook

![bg contain right:50%](https://storybook.js.org/opengraph-image.jpg)

- A tool for developing UI components **in isolation**, outside the main app
- Preview states, edge cases, and variants without navigating full pages
- Living documentation for your component library — designers and devs share one source of truth
- Pairs naturally with Atomic Design (build atoms and molecules here first)

[storybook.js.org](https://storybook.js.org/)

---

<style scoped>
  section {
    font-size: 26px;
  }
</style>

## Atomic Design

![bg contain right:50%](https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png)

- A methodology (Brad Frost) for organizing UI into a **clear hierarchy**
- **Atoms** → **Molecules** → **Organisms** → **Templates** → **Pages**
- Encourages small, reusable pieces that compose into larger layouts
- A mental model for structuring components — not a library, but how we _think_ about UI

[atomicdesign.bradfrost.com](https://atomicdesign.bradfrost.com/chapter-2/)

---

## Tailwind CSS

<style scoped>
  section {
    font-size: 24px;
  }
</style>

![bg contain right:50%](https://tailwindcss.com/opengraph-image.jpg?opengraph-image.0jwfhnd690..4.jpg)

- A **utility-first** CSS framework — style with composable class names in your markup
- Design tokens (spacing, colors, typography) stay consistent across the project
- Responsive and state variants (`md:`, `hover:`) without switching files
- Works alongside component libraries; the Tailwind IntelliSense extension helps in VS Code

[tailwindcss.com](https://tailwindcss.com/)

---

<style scoped>
  section {
    font-size: 26px;
  }
</style>

## Vite

![bg contain right:50%](https://vite.dev/og-image.jpg)

- A fast **build tool and dev server** for modern frontend projects
- Near-instant startup and hot module replacement while you code
- Bundles and optimizes for production; powers Vitest under the hood
- Next.js has its own toolchain, but Vite is the standard for standalone React/Vue apps

[vite.dev](https://vite.dev/)

---

<style scoped>
  section {
    font-size: 26px;
  }
</style>

## Vitest

![bg contain right:50%](https://vitest.dev/og.jpg)

- A **unit and integration testing** framework built on Vite
- Jest-compatible API — familiar if you have seen `describe` / `it` / `expect` before
- Fast feedback loop: test components, hooks, and utility functions in isolation
- Runs in CI to catch regressions before they reach production

[vitest.dev](https://vitest.dev/)

---

## Playwright

![bg contain right:35%](https://playwright.dev/img/playwright-logo.svg)

- **End-to-end browser testing** — automates real user flows in Chrome, Firefox, and Safari
- Click, type, navigate, and assert what users actually see on screen
- Catches integration bugs that unit tests miss (routing, auth, full page flows)
- Complements Vitest: unit tests for logic, Playwright for the whole experience

[playwright.dev](https://playwright.dev/)

---

<!-- class: lead -->

## Summary & Questions

<style scoped>
  section {
    font-size: 22px;
  }
</style>

![bg contain right:55%](./assets/beavis_hacking.webp)

- **Tooling**: VS Code/Cursor, extensions, Node/npm
- **Setup**: clone repos, `npm install`, `npm run dev`
- **Stack**: React, Next.js, Prisma, Storybook, Atomic Design, Tailwind, Vite, Vitest, Playwright

### Questions?

---

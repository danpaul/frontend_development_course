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

# Frontend Development - Course Overview

## Instructor: Dan Breczinski

---

<!-- class: lead -->

## Today's class

![bg contain right:50%](./assets/baldi.gif)

- Class overview
- Tooling
- AI Workflow (spec driven development)
- JS Fundamentals

---

## Class Structure / Assessments

- Weeks 1 - 4, React/TS
  - Final _written exam_ covering theoretical topics.
  - Theory topics will come from at home reading assignments and in-class reading assignments.
  - 50% of grade
- Weeks 5 - 7 React Native
  - Final React Native _project_.
  - 50% of grade
- To pass the course, both assessments must receive a minimum passing grade of 55.

---

## Class Materials

The material for this portion of the course is contained in two repos. One is for learning materials and includes all presentations (including this one). The other contains example code which we will look at together and use for various exercises in class.

Course material:

[https://github.com/danpaul/frontend_development_course](https://github.com/danpaul/frontend_development_course)

Course code:

- Clone it: [https://github.com/danpaul/frontend_development_course_code](https://github.com/danpaul/frontend_development_course_code)

_Clone both of these. Read the README files._

---

## Main Topics Covered

![bg contain right:50%](./assets/jabbascript.webp)

- Frontend development using React, TypeScript, React Native
- Technologies used
  - JS/TS
  - React
  - Next.js
  - State management (TanStack Query, Redux)
  - Tailwind
  - Lots of other, minor related frameworks and tooling

---

## Class format

- At home:
  - Complete assigned reading (~3 hours)
  - Work on your hackathon project (~3 hours)
- In class:
  - Lectures, discussions, activities

---

## Hackathon

![bg contain right:50%](./assets/console_cowboys.webp)

Can _you_ jam with the console cowboys in cyberspace?

- Goals
  - Find a small project that motivates you
  - Practice the theory topics we are covering in class
  - Prepare for implementation portion of course
  - GitHub portfolio, resume material
  - Cash prizes, fame, etc.

---

## Hackathon details

- Use the Stack we are using for this class
- You may work in small groups (2-3 people) or individually
- Hackathon presentation (week 4):
  - ~5-10 minutes
  - Demo your product
  - Describe an interesting learning and show a relevant code snippet

---

## Hackathon Speed Dating Activity

1. Take a few minutes to brainstorm ideas for the Hackathon
2. 3 x 5 minute speed dating rounds to briefly discuss your idea. _Try to meet with someone you haven't met yet._

---

## On your marks, get set...

![bg right:40%](./assets/run.webp)

You have the tools you need. You know the stack we're using. You know how to read docs. You have everything you need. Now go build!

You don't need to wait until we officially cover something in class to start using it. It's a good idea to start reading and working through the documentation as you start building your project before we get to it.

---

## Activity: Get Started

<style scoped>
  section {
    font-size: 24px;
  }
</style>

Create a Next App!

[https://nextjs.org/docs/app/getting-started/installation](https://nextjs.org/docs/app/getting-started/installation)

Install a current version Node and npx (if not already installed)

run `npx create-next-app@latest my-hackathon-app`

Use these options:

![](./assets/next_defaults.png)

Look at the `package.json`

Explore the project files.

Run `npm run dev`

---
marp: true
theme: default
paginate: true
---

<style>
@media screen {
  [data-bespoke-marp-fragment="inactive"] {
    display: none;
  }
}
</style>

## Before

Click next to reach the fragment slide.

---

## SPA downsides

<style scoped>
  section {
    font-size: 26px;
  }
</style>

What problems do you see?

* **Performance**
  - **Bundle size** — a landing page still downloads the whole app
  - **Time to first paint** — JS download, boot, then a second request for data
* **SEO / accessibility** — crawlers and some tools see an empty shell until JS runs
* **Developer experience** — frontend and API live in different codebases and mental models

---

## After

If fragments work, you arrive here only after revealing all three.

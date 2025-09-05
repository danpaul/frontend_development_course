## About

MARP presentation source materials for the Front End Development course.

## Usage

Add presentations in `/presentations` prefixed by a two digit week.

Any file name starting with an underscore will not be built.

Run `npm run build` to build (`npm i` first if packages are not yet installed).

## Suggested Tools

VSCode with the MARP and Mermaid extensions.

## MARP cheatsheet

### Title slides

```markdown
---
<!-- class: inverted -->
## Title Slide
---

<!-- class: lead -->

##Normal Slide
```

### Transitions within slides

### Slide with content hidden on load (transitions)

```markdown
---
marp: true
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

## Some question?

<div data-marpit-fragment>

### Answer one

</div>

<div data-marpit-fragment>

### Answer two

</div>

<div data-marpit-fragment>

### Answer three

</div>
```

## Resizing text for an individual slide

```markdown
<style scoped>
  section {
    font-size: 24px;
  }
</style>
```

## Sized, positioned and contained background image

```markdown
![bg contain right:40%](https://i.imgflip.com/a4ebef.jpg)
```

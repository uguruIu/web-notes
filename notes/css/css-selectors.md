# CSS Selectors

Difficulty: ⭐⭐☆☆☆

Category: Fundamentals

Prerequisites: CSS Syntax

---

## Overview

CSS selectors are used to target HTML elements and apply styles.

Selectors allow you to style one element, multiple elements, or specific elements based on their attributes, state, or relationship with other elements.

---

## Preview

```text
HTML

<h1>Main Title</h1>

<p class="text">Paragraph</p>

<button id="btn">Click</button>


CSS

h1           → Element Selector

.text        → Class Selector

#btn         → ID Selector
```

---

## Types of Selectors

### Universal Selector

```css
* {
    margin: 0;
    padding: 0;
}
```

Selects every element.

---

### Element Selector

```css
p {
    color: gray;
}
```

Selects all `<p>` elements.

---

### Class Selector

```css
.card {
    border-radius: 10px;
}
```

Selects every element with the specified class.

---

### ID Selector

```css
#header {
    background: black;
}
```

Selects the element with the specified ID.

---

### Group Selector

```css
h1,
h2,
h3 {
    font-family: Arial;
}
```

Applies the same styles to multiple selectors.

---

## Combinators

### Descendant Selector

```css
div p {
    color: red;
}
```

Selects all `<p>` elements inside a `<div>`.

---

### Child Selector

```css
div > p {
    color: blue;
}
```

Selects only direct children.

---

### Adjacent Sibling Selector

```css
h1 + p {
    color: green;
}
```

Selects the first sibling immediately after the element.

---

### General Sibling Selector

```css
h1 ~ p {
    color: orange;
}
```

Selects all following sibling elements.

---

## Attribute Selectors

```css
input[type="text"]
```

```css
a[target]
```

```css
[class*="card"]
```

```css
[class^="btn"]
```

```css
[class$="primary"]
```

```css
[class~="active"]
```

```css
[class|="en"]
```

Attribute selectors target elements based on their attributes.

---

## Pseudo Classes

```css
a:hover
```

```css
a:visited
```

```css
a:active
```

```css
input:focus
```

```css
li:first-child
```

Pseudo classes select elements based on their current state.

---

## Pseudo Elements

```css
p::first-letter
```

```css
p::first-line
```

```css
::before
```

```css
::after
```

Pseudo elements style a specific part of an element.

---

## Visual Diagram

```text
Selector

│

├── Universal

├── Element

├── Class

├── ID

├── Group

├── Attribute

├── Pseudo Class

└── Pseudo Element
```

---

## Best Practices

- Prefer classes over IDs for styling.
- Keep selectors simple.
- Avoid unnecessary nesting.
- Use semantic class names.
- Don't create overly specific selectors.

---

## Notes

> 💡 IDs should generally be unique within a page.

> 💡 Classes are reusable.

> 💡 Attribute selectors are powerful but should be used thoughtfully for readability.

---

## Related Topics

- Cascade & Specificity
- Box Model
- Flexbox

---

## References

- MDN CSS Selectors
- W3C Selectors Specification
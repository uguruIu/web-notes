# CSS Syntax

Difficulty: ⭐☆☆☆☆

Category: Fundamentals

Prerequisites: HTML Basics

---

## Overview

CSS syntax defines how style rules are written.

A CSS rule consists of a selector and one or more declarations.

---

## Preview

```text
Selector
   │
   ▼

h1 {

    color: steelblue;

    font-size: 32px;

}

└──────────────┘
  Declaration Block

color        → Property

steelblue    → Value
```

---

## Basic Syntax

```css
selector {

    property: value;

}
```

Every declaration consists of:

- Property
- Value

Each declaration ends with a semicolon (`;`).

---

## Example

### HTML

```html
<h1>Hello CSS</h1>
```

### CSS

```css
h1 {

    color: steelblue;

    font-size: 32px;

}
```

---

## Result

```text
Hello CSS
```

Displayed in steel blue with a font size of 32px.

---

## Visual Diagram

```text
h1 {

    color: steelblue;

    │         │

 Property   Value

}
```

---

## Rules

✔ Use curly braces `{ }`

✔ Separate property and value with `:`

✔ End declarations with `;`

✔ One declaration per line is recommended.

---

## Best Practices

- Use proper indentation.
- Keep related properties together.
- Always include semicolons.
- Write readable CSS.

---

## Notes

> 💡 Whitespace does not affect CSS behavior, but consistent formatting improves readability.

Example:

```css
h1{
color:red
}
```

is valid, but

```css
h1 {
    color: red;
}
```

is much easier to read.

---

## Related Topics

- How to Add CSS
- Selectors
- Cascade
- Box Model

---

## References

- MDN CSS Documentation
- W3C CSS Specification

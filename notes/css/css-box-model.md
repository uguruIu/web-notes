# CSS Box Model

Difficulty: ⭐⭐☆☆☆

Category: Fundamentals

Prerequisites: CSS Syntax, Colors & Units

---

## Quick Facts

Purpose         : Understand how every HTML element is rendered.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐☆☆☆

---

## Overview

Every HTML element is represented as a rectangular box.

The CSS Box Model describes how the browser calculates an element's size and spacing using content, padding, border, and margin.

Understanding the Box Model is essential for creating predictable layouts.

---

## Preview

```text
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  | +-----------+ |  |  |
|  |  | | Content   | |  |  |
|  |  | +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

---

## What is the Box Model?

Every element consists of four layers:

- Content
- Padding
- Border
- Margin

The browser calculates the final size of an element using these layers.

---

## Content

The content area contains the actual text, image, or other HTML elements.

```css
width: 300px;
height: 150px;
```

---

## Padding

Padding creates space between the content and the border.

```css
padding: 20px;
```

Example:

```text
Border

┌────────────────────┐
│    Padding         │
│  ┌──────────────┐  │
│  │   Content    │  │
│  └──────────────┘  │
└────────────────────┘
```

---

## Border

The border surrounds the padding and content.

```css
border: 2px solid black;
```

Example:

```text
┌────────────────────┐
│                    │
│      Content       │
│                    │
└────────────────────┘
```

---

## Margin

Margin creates space outside the border.

```css
margin: 30px;
```

Example:

```text
Margin

□□□□□□□□□□□□□□

┌───────────────┐
│   Element     │
└───────────────┘

□□□□□□□□□□□□□□
```

---

## Width & Height

The width and height properties define the size of the content area.

```css
width: 300px;

height: 200px;
```

---

## Box Sizing

### content-box (default)

```css
box-sizing: content-box;
```

Padding and border increase the final size.

---

### border-box

```css
box-sizing: border-box;
```

Padding and border are included inside the specified width and height.

Recommended for most projects.

---

## Box Shadow

```css
box-shadow: 0 8px 20px rgba(0,0,0,.2);
```

Syntax

```css
box-shadow:
horizontal
vertical
blur
spread
color;
```

Example

```text
┌───────────────┐
│     Card      │░░░░
└───────────────┘░░░░
 ░░░░░░░░░░░░░░░░░░░░
```

---

## Example

### HTML

```html
<div class="card">
    Box Model
</div>
```

### CSS

```css
.card {

    width: 300px;

    padding: 20px;

    border: 2px solid steelblue;

    margin: 40px;

    box-sizing: border-box;

    box-shadow: 0 5px 15px rgba(0,0,0,.2);

}
```

---

## Result

```text
40px Margin

┌───────────────────────────────┐
│ Border                        │
│  ┌─────────────────────────┐  │
│  │ Padding                 │  │
│  │  Box Model              │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

---

## Visual Diagram

```text
Final Element Size

Margin
    ↓
+---------------------------+
| Border                    |
|  +---------------------+  |
|  | Padding             |  |
|  |  +---------------+  |  |
|  |  |   Content     |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

---

## When to Use

| Property | Common Usage |
|----------|--------------|
| width | Set element width |
| height | Set element height |
| padding | Space inside the element |
| border | Add outlines |
| margin | Space between elements |
| border-box | Recommended for layouts |
| box-shadow | Cards, buttons, modals |

---

## Common Mistakes

❌ Confusing padding with margin.

❌ Forgetting that `content-box` increases the final size.

❌ Mixing fixed widths with large padding.

❌ Using margins for internal spacing.

---

## Best Practices

- Use `box-sizing: border-box`.
- Use padding for internal spacing.
- Use margin for external spacing.
- Keep spacing consistent.
- Prefer reusable spacing values.

---

## Notes

> 💡 Every HTML element uses the Box Model.

> 💡 `margin` is transparent and does not inherit background colors.

> 💡 `padding` increases the clickable area of buttons and links.

---

## Summary

✔ Every element is a box.

✔ Content is surrounded by padding.

✔ Border surrounds the padding.

✔ Margin creates space between elements.

✔ `border-box` is recommended for modern layouts.

---

## Related Topics

- Display & Visibility
- Positioning
- Flexbox
- Grid

---

## References

- MDN Box Model
- MDN box-sizing
- W3C CSS Box Model Module
# CSS Colors & Units

Difficulty: ⭐⭐☆☆☆

Category: Fundamentals

Prerequisites: CSS Syntax

---

## Quick Facts

Purpose         : Define colors and measurement units

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐☆☆☆

---

## Overview

CSS provides different ways to define colors and measurements.

Colors control the appearance of elements, while units determine their size, spacing, and layout.

Choosing the correct unit is important for responsive and maintainable designs.

---

## Preview

```text
Color

Text
██████████

Units

16px
2rem
50%
100vw
```

---

## Colors

### Named Colors

```css
h1 {
    color: red;
}
```

---

### HEX Colors

```css
h1 {
    color: #3498db;
}
```

---

### RGB

```css
h1 {
    color: rgb(52, 152, 219);
}
```

---

### RGBA

```css
h1 {
    color: rgba(52, 152, 219, 0.5);
}
```

The last value controls transparency.

---

### Opacity

```css
.card {
    opacity: 0.5;
}
```

Opacity affects the entire element.

---

## CSS Units

### Pixels (px)

```css
font-size: 16px;
```

Fixed size.

---

### Percentage (%)

```css
width: 50%;
```

Relative to the parent element.

---

### em

```css
font-size: 2em;
```

Relative to the parent's font size.

---

### rem

```css
font-size: 2rem;
```

Relative to the root (`html`) font size.

Recommended for scalable typography.

---

### Viewport Width (vw)

```css
width: 50vw;
```

Relative to the browser width.

---

### Viewport Height (vh)

```css
height: 100vh;
```

Relative to the browser height.

---

## Common Properties

```css
color
background-color
opacity
width
height
font-size
padding
margin
```

---

## Example

### HTML

```html
<h1>Hello CSS</h1>

<div class="box"></div>
```

### CSS

```css
h1 {
    color: steelblue;
    font-size: 2rem;
}

.box {
    width: 50%;
    height: 150px;
    background: rgb(52, 152, 219);
}
```

---

## Result

```text
Hello CSS

████████████████████
████████████████████
████████████████████
```

A blue heading with a responsive box.

---

## Visual Diagram

```text
Absolute Units

px

Relative Units

%
em
rem
vw
vh
```

---

## Unit Comparison

| Unit | Relative | Common Usage |
|------|----------|--------------|
| px | ❌ | Borders, icons |
| % | ✅ | Widths |
| em | ✅ | Local scaling |
| rem | ✅ | Typography |
| vw | ✅ | Responsive width |
| vh | ✅ | Full screen layouts |

---

## Common Mistakes

❌ Using only `px` everywhere.

❌ Confusing `em` and `rem`.

❌ Using `opacity` when only the background should be transparent.

❌ Forgetting that `%` depends on the parent element.

---

## Best Practices

- Prefer `rem` for typography.
- Use `%`, `vw`, and `vh` for responsive layouts.
- Use `rgba()` when only transparency is needed.
- Keep color choices consistent.

---

## Notes

> 💡 `opacity` affects both the element and its children.

> 💡 `rgba()` changes only the color transparency.

---

## Summary

✔ CSS supports multiple color formats.

✔ Absolute units stay fixed.

✔ Relative units adapt to different screen sizes.

✔ `rem` is generally preferred for font sizes.

---

## Related Topics

- Box Model
- Typography
- Responsive Design

---

## References

- MDN CSS Colors
- MDN CSS Values & Units
- W3C CSS Color Module

## When to Use

| Use | Recommended Unit |
|------|------------------|
| Font Size | `rem` |
| Width | `%` or `vw` |
| Height | `vh` |
| Borders | `px` |
| Icons | `px` |
| Spacing (Padding / Margin) | `rem` |
| Full Screen Section | `100vh` |
| Responsive Layout | `%`, `vw`, `vh` |

### Color Formats

| Format | When to Use |
|--------|-------------|
| Named Colors | Simple examples and quick prototypes |
| HEX | General UI colors |
| RGB | When RGB values are required |
| RGBA | Colors with transparency |
| Opacity | Make the entire element transparent |
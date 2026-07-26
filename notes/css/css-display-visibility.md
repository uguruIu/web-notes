# CSS Display & Visibility

Difficulty: ⭐⭐☆☆☆

Category: Layout

Prerequisites: CSS Box Model

---

## Quick Facts

Purpose         : Control how elements are displayed.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐☆☆☆

---

## Overview

The `display` property defines how an HTML element behaves in the document layout.

Some elements start on a new line, while others stay on the same line. The `display` property allows you to change this behavior.

The `visibility` property controls whether an element is visible without removing it from the layout.

---

## Preview

```text
display: block

+----------------------+
|      Element         |
+----------------------+

+----------------------+
|      Element         |
+----------------------+


display: inline

Text Text Text Text


display: inline-block

+------+ +------+ +------+
| Box  | | Box  | | Box  |
+------+ +------+ +------+
```

---

## Display Values

### block

```css
display: block;
```

Characteristics:

- Starts on a new line.
- Takes the full available width by default.
- Width and height can be changed.

Common block elements:

```html
<div>
<p>
<h1>
<section>
```

---

### inline

```css
display: inline;
```

Characteristics:

- Does not start on a new line.
- Takes only the required width.
- Width and height have no effect.

Common inline elements:

```html
<span>
<a>
<strong>
<em>
```

---

### inline-block

```css
display: inline-block;
```

Characteristics:

- Stays on the same line.
- Width and height work.
- Useful for buttons, badges and navigation items.

---

### none

```css
display: none;
```

The element is completely removed from the document flow.

Example:

```text
Before

Box 1
Box 2
Box 3

After

Box 1
Box 3
```

---

## Visibility

### visible

```css
visibility: visible;
```

The element is visible.

---

### hidden

```css
visibility: hidden;
```

The element becomes invisible, but its space is still reserved.

Example:

```text
Before

Box 1
Box 2
Box 3

After

Box 1
(empty space)
Box 3
```

---

## display: none vs visibility: hidden

| Property | Keeps Layout Space | Visible |
|----------|--------------------|---------|
| display: none | ❌ No | ❌ No |
| visibility: hidden | ✅ Yes | ❌ No |

---

## Example

### HTML

```html
<div class="box">Box 1</div>

<div class="box hidden">Box 2</div>

<div class="box">Box 3</div>
```

### CSS

```css
.box {

    display: inline-block;

    width: 120px;

    padding: 20px;

    border: 1px solid steelblue;

}

.hidden {

    visibility: hidden;

}
```

---

## Result

```text
+------+     +------+
|Box 1 |     |Box 3 |
+------+     +------+

(Box 2 still occupies space.)
```

---

## Visual Diagram

```text
Display

│

├── block

├── inline

├── inline-block

└── none


Visibility

│

├── visible

└── hidden
```

---

## When to Use

| Property | Common Usage |
|----------|--------------|
| block | Sections, containers |
| inline | Text elements |
| inline-block | Buttons, badges, menus |
| none | Hide menus, modals, popups |
| visibility: hidden | Hide while preserving layout |

---

## Common Mistakes

❌ Expecting `width` and `height` to work on inline elements.

❌ Confusing `display: none` with `visibility: hidden`.

❌ Using `inline-block` when Flexbox is a better choice.

❌ Forgetting that hidden elements may still occupy layout space.

---

## Best Practices

- Use semantic HTML elements first.
- Prefer Flexbox or Grid for complex layouts.
- Use `display: none` when the element should be removed from the layout.
- Use `visibility: hidden` only when layout spacing should remain.

---

## Notes

> 💡 `display` changes how an element participates in the page layout.

> 💡 `display: none` removes the element from the rendering flow.

> 💡 `visibility: hidden` hides the element without removing its reserved space.

---

## Summary

✔ `block` starts on a new line.

✔ `inline` stays within the text flow.

✔ `inline-block` combines the advantages of both.

✔ `display: none` removes an element from the layout.

✔ `visibility: hidden` keeps the layout while hiding the element.

---

## Related Topics

- Positioning
- Flexbox
- Grid

---

## References

- MDN CSS display
- MDN CSS visibility
- W3C CSS Display Module
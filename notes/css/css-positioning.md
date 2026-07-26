# CSS Positioning

Difficulty: ⭐⭐⭐☆☆

Category: Layout

Prerequisites: Display & Visibility

---

## Quick Facts

Purpose         : Control the position of elements.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐⭐☆☆

---

## Overview

The `position` property determines how an element is positioned within the document.

Some positioning methods keep the normal document flow, while others remove the element from it.

Understanding positioning is essential for creating modern layouts such as navigation bars, floating buttons, tooltips, and overlays.

---

## Preview

```text
Position

│

├── static

├── relative

├── absolute

├── fixed

└── sticky
```

---

## Position Values

### static

```css
position: static;
```

- Default value.
- Elements remain in the normal document flow.
- `top`, `right`, `bottom`, and `left` have no effect.

---

### relative

```css
position: relative;

top: 20px;

left: 30px;
```

- Keeps its original space.
- Can be moved using offsets.
- Often used as the reference element for absolutely positioned children.

---

### absolute

```css
position: absolute;

top: 20px;

right: 20px;
```

- Removed from the normal document flow.
- Positioned relative to the nearest positioned ancestor.
- If no positioned ancestor exists, it is positioned relative to the page.

---

### fixed

```css
position: fixed;

bottom: 20px;

right: 20px;
```

- Removed from the normal document flow.
- Fixed relative to the browser viewport.
- Remains visible while scrolling.

Common examples:

- Back to Top button
- Floating action button
- Fixed navigation bar

---

### sticky

```css
position: sticky;

top: 0;
```

- Behaves like `relative` until the scroll reaches a specified position.
- Then behaves like `fixed`.
- Commonly used for sticky headers.

---

## Offset Properties

```css
top

right

bottom

left
```

These properties define how far an element moves from its reference point.

---

## Example

### HTML

```html
<div class="container">

    <div class="badge">
        New
    </div>

</div>
```

### CSS

```css
.container {

    position: relative;

}

.badge {

    position: absolute;

    top: 10px;

    right: 10px;

}
```

---

## Result

```text
+---------------------------+

                [New]

       Product Card

+---------------------------+
```

The badge is positioned in the top-right corner of the card.

---

## Visual Diagram

```text
static

□□□□□□□□□□□□

relative

□□□□■□□□□□

absolute

┌──────────────┐
│          ■   │
└──────────────┘

fixed

Browser

┌──────────────┐
│              │
│           ■  │
│              │
└──────────────┘

sticky

Scroll

↓

□□□□□□□□□□

↓

■■■■■■■■■■
(Header sticks)
```

---

## When to Use

| Property | Common Usage |
|----------|--------------|
| static | Default layout |
| relative | Small adjustments, parent reference |
| absolute | Badges, tooltips, overlays |
| fixed | Floating buttons, fixed navbar |
| sticky | Sticky headers, sticky sidebar |

---

## Common Mistakes

❌ Forgetting to add `position: relative` to the parent.

❌ Expecting `absolute` elements to reserve layout space.

❌ Using `fixed` when `sticky` is more appropriate.

❌ Assuming `top` and `left` work with `position: static`.

---

## Best Practices

- Use `relative` as the parent for absolutely positioned children.
- Keep absolute positioning for small UI elements.
- Use `sticky` for navigation when appropriate.
- Avoid building entire page layouts with `absolute`.

---

## Notes

> 💡 `absolute` searches for the nearest positioned ancestor.

> 💡 If no positioned ancestor exists, the browser uses the page as the reference.

> 💡 `sticky` requires a scrolling container and an offset value such as `top: 0`.

---

## Summary

✔ `static` is the default positioning mode.

✔ `relative` moves an element while preserving its layout space.

✔ `absolute` removes the element from the normal flow.

✔ `fixed` stays attached to the viewport.

✔ `sticky` combines the behavior of `relative` and `fixed`.

---

## Related Topics

- Display & Visibility
- Flexbox
- Grid
- Responsive Design

---

## References

- MDN CSS position
- W3C CSS Positioned Layout Module
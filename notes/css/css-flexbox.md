# CSS Flexbox

Difficulty: ⭐⭐⭐⭐☆

Category: Layout

Prerequisites: Display & Positioning

---

## Learning Path

```text
Display
   │
   ▼
display:flex
   │
   ▼
Main Axis / Cross Axis
   │
   ▼
Container Properties
   │
   ▼
Item Properties
   │
   ▼
Real Example
```

---

## Quick Facts

Purpose         : Create one-dimensional layouts.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐⭐⭐☆

---

## Overview

Flexbox (Flexible Box Layout) is a modern CSS layout system used to arrange, align, and distribute elements efficiently.

Unlike traditional layout techniques such as floats or inline-block, Flexbox provides a simple and flexible way to build responsive user interfaces.

Flexbox works in **one direction at a time** — either horizontally or vertically.

---

## Why Flexbox?

Before Flexbox, developers used techniques like floats, tables, and inline-block to build layouts.

These methods worked, but often required hacks and extra CSS.

Flexbox solved many of these problems by introducing a dedicated layout system.

---

## Before vs After

```text
Before Flexbox

Table Layout

↓

Float

↓

Inline-Block

↓

Many CSS Hacks

----------------------------

After Flexbox

display:flex;

↓

Easy Alignment

↓

Easy Spacing

↓

Responsive Layout
```

---

# Display Flex

```css
.container{

    display:flex;

}
```

`display:flex` turns an element into a **Flex Container**.

Its direct children automatically become **Flex Items**.

---

## Remember

```text
display:flex

↓

Container

↓

Items
```

Only direct children become flex items.

---

## Property Tree

```text
Flexbox

│

├── Container

│   ├── flex-direction

│   ├── flex-wrap

│   ├── justify-content

│   ├── align-items

│   ├── align-content

│   └── gap

│

└── Items

    ├── order

    ├── flex-grow

    ├── flex-shrink

    ├── flex-basis

    ├── flex

    └── align-self
```

---

# Main Axis & Cross Axis

Flexbox uses two axes.

## Default

```text
+-------------------------------------------+

■■   ■■   ■■

+-------------------------------------------+

Main Axis
────────────────────────────►

Cross Axis
▲
│
│
```

---

## Column Direction

```text
+----------------+

■■

■■

■■

+----------------+

Main Axis

▲

│

│

Cross Axis

────────────►
```

---

## Pro Tip

💡 `justify-content` always works on the **Main Axis**.

💡 `align-items` always works on the **Cross Axis**.

⚠️ If `flex-direction` changes, the axes also change.

---

# flex-direction

```css
flex-direction:row;
```

Possible values:

```css
row

row-reverse

column

column-reverse
```

---

## Comparison

```text
row

■■  ■■  ■■

------------------------

column

■■

■■

■■
```

---

# flex-wrap

```css
flex-wrap:wrap;
```

Values:

```css
nowrap

wrap

wrap-reverse
```

---

## Example

```text
nowrap

■■ ■■ ■■ ■■ ■■ ■■

--------------------------

wrap

■■ ■■ ■■

■■ ■■ ■■
```

---

# justify-content

Controls alignment on the **Main Axis**.

```css
justify-content:center;
```

---

## Values

```text
flex-start

■■ ■■ ■■

----------------------------

center

      ■■ ■■ ■■

----------------------------

flex-end

            ■■ ■■ ■■

----------------------------

space-between

■■        ■■        ■■

----------------------------

space-around

   ■■    ■■    ■■

----------------------------

space-evenly

    ■■   ■■   ■■
```

---

## When to Use

- Navbar
- Button Groups
- Hero Section
- Card Layout

---

## Common Mistake

```css
justify-content:center;
```

Nothing happens.

Why?

Because:

```css
display:flex;

justify-content:center;
```

---

# align-items

Controls alignment on the **Cross Axis**.

```css
align-items:center;
```

---

## Values

```text
flex-start

■■

■■

■■

----------------------------

center

      ■■

      ■■

      ■■

----------------------------

flex-end

            ■■

            ■■

            ■■

----------------------------

stretch

████████

████████

████████
```

---

# align-content

Used when:

- Multiple rows exist
- `flex-wrap:wrap` is enabled

Otherwise it has no visible effect.

---

# gap

```css
gap:20px;
```

Adds space between flex items.

Preferred over using margins in many layouts.

---

# order

```css
order:1;
```

Changes the visual order of items.

Default:

```css
order:0;
```

---

# flex-grow

```css
flex-grow:1;
```

Allows items to grow and fill available space.

```text
grow:1

■■■■

■■■■

■■■■

------------------------

grow:2

■■■■■■■■

■■■

■■■
```

---

# flex-shrink

```css
flex-shrink:1;
```

Allows items to shrink when space is limited.

---

# flex-basis

```css
flex-basis:250px;
```

Defines the initial size of a flex item.

---

# flex

Shorthand property.

```css
flex:1;
```

Equivalent to:

```css
flex-grow:1;

flex-shrink:1;

flex-basis:0;
```

---

# align-self

Overrides `align-items` for a single item.

```css
align-self:center;
```

Useful when one item should behave differently.

---

# Complete Example

## HTML

```html
<nav>

    <div class="logo">

        Logo

    </div>

    <ul>

        <li>Home</li>

        <li>About</li>

        <li>Contact</li>

    </ul>

</nav>
```

## CSS

```css
nav{

    display:flex;

    justify-content:space-between;

    align-items:center;

}
```

---

## Result

```text
Logo                    Home About Contact

──────────────────────────────────────────

justify-content:space-between

align-items:center
```

---

# Real World Examples

Flexbox is commonly used for:

- Navigation Bars
- Hero Sections
- Card Layouts
- Image Galleries
- Pricing Cards
- Dashboards
- Sidebars
- Footers

---

# Decision Tree

```text
Need Layout?

↓

One Direction?

↓

YES

↓

Use Flexbox

--------------------------

Need Rows + Columns?

↓

YES

↓

Use Grid
```

---

# Common Mistakes

❌ Forgetting `display:flex`.

❌ Confusing Main Axis with Cross Axis.

❌ Using `align-content` without wrapping.

❌ Using margins instead of `gap`.

❌ Forgetting that changing `flex-direction` changes the axes.

---

# Best Practices

- Use Flexbox for one-dimensional layouts.
- Prefer `gap` over margins.
- Keep containers simple.
- Use semantic HTML.
- Combine with media queries for responsive layouts.

---

# Cheat Sheet

```text
display:flex

↓

Container

├── direction

├── wrap

├── justify-content

├── align-items

├── align-content

└── gap

------------------------

Items

├── order

├── grow

├── shrink

├── basis

├── flex

└── align-self
```

---

# Summary

✔ Modern one-dimensional layout system.

✔ Easy alignment and spacing.

✔ Container properties control the layout.

✔ Item properties control individual elements.

✔ One of the most important CSS modules.

---

## Related Topics

- Display & Visibility
- Positioning
- CSS Grid
- Responsive Design

---

## References

- MDN Flexbox
- CSS Flexible Box Layout Module
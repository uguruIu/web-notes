# CSS Backgrounds

Difficulty: ⭐⭐☆☆☆

Category: Fundamentals

Prerequisites: Colors & Units

---

## Quick Facts

Purpose         : Style the background of elements.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐☆☆☆

---

## Overview

The `background` properties allow you to control an element's background color, image, size, position, repeat behavior, and more.

Well-designed backgrounds improve the appearance of a website without affecting its content.

---

## Preview

```text
+--------------------------------------+
|                                      |
|    🌄 Background Image               |
|                                      |
|        Welcome to My Website         |
|                                      |
+--------------------------------------+
```

---

## Background Color

```css
body {
    background-color: #f4f4f4;
}
```

Sets the background color of an element.

---

## Background Image

```css
.hero {
    background-image: url("hero.jpg");
}
```

Displays an image behind the content.

---

## Background Repeat

```css
background-repeat: repeat;
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
```

Controls whether the image repeats.

---

## Background Position

```css
background-position: center;
```

Other common values:

```css
top
bottom
left
right
center
```

You can also use coordinates:

```css
background-position: 20px 50px;
```

---

## Background Size

```css
background-size: cover;
```

```css
background-size: contain;
```

```css
background-size: 100% 100%;
```

Controls the size of the background image.

---

## Background Attachment

```css
background-attachment: scroll;
```

```css
background-attachment: fixed;
```

```css
background-attachment: local;
```

Determines how the background behaves while scrolling.

---

## Background Shorthand

Instead of writing multiple properties:

```css
background-color: black;
background-image: url(hero.jpg);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
```

Use:

```css
background: black url("hero.jpg") center / cover no-repeat;
```

---

## Gradients

### Linear Gradient

```css
background: linear-gradient(to right, steelblue, royalblue);
```

---

### Radial Gradient

```css
background: radial-gradient(circle, white, steelblue);
```

Gradients create smooth color transitions without using images.

---

## Background Opacity

Instead of:

```css
opacity: .5;
```

Prefer:

```css
background: rgba(0,0,0,.5);
```

This keeps child elements fully visible.

---

## Clip Path

```css
clip-path: circle(50%);
```

```css
clip-path: polygon(...);
```

Used to create custom element shapes.

---

## Common Properties

```css
background
background-color
background-image
background-repeat
background-position
background-size
background-attachment
clip-path
```

---

## Example

### HTML

```html
<section class="hero">

    <h1>Welcome</h1>

</section>
```

### CSS

```css
.hero {

    height: 100vh;

    background: url("hero.jpg") center / cover no-repeat;

    color: white;

}
```

---

## Result

```text
+------------------------------------+

        Welcome

        Full Screen Hero

+------------------------------------+
```

A full-screen hero section with a centered background image.

---

## Visual Diagram

```text
Background

│

├── Color

├── Image

├── Position

├── Size

├── Repeat

├── Attachment

└── Gradient
```

---

## When to Use

| Property | Common Usage |
|----------|--------------|
| background-color | Basic backgrounds |
| background-image | Hero sections |
| background-size: cover | Full-screen banners |
| background-position: center | Hero images |
| no-repeat | Single background image |
| fixed | Parallax-like effects |
| linear-gradient() | Modern UI backgrounds |
| clip-path | Creative section designs |

---

## Common Mistakes

❌ Forgetting `background-size: cover`.

❌ Using huge background images.

❌ Using `opacity` on the parent element.

❌ Poor text contrast over images.

❌ Repeating images accidentally.

---

## Best Practices

- Optimize image sizes.
- Prefer gradients when possible.
- Use `cover` for hero sections.
- Keep text readable.
- Compress large background images.

---

## Notes

> 💡 `cover` fills the container while preserving the image ratio.

> 💡 `contain` keeps the entire image visible but may leave empty space.

> 💡 `rgba()` is usually a better choice than `opacity` for transparent backgrounds.

---

## Summary

✔ Backgrounds can contain colors, images, and gradients.

✔ `cover` is commonly used for hero sections.

✔ Optimize images for better performance.

✔ Keep background designs simple and readable.

---

## Related Topics

- Colors & Units
- Positioning
- Responsive Design

---

## References

- MDN Backgrounds
- MDN CSS Images
- W3C Backgrounds & Borders Module
# CSS Typography

Difficulty: ⭐⭐☆☆☆

Category: Fundamentals

Prerequisites: Colors & Units

---

## Quick Facts

Purpose         : Control the appearance and readability of text.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐☆☆☆

---

## Overview

Typography is the art of styling text.

CSS provides many properties to control fonts, spacing, alignment, and readability.

Good typography improves both appearance and user experience.

---

## Preview

```text
Heading

Lorem ipsum dolor sit amet.

Font Family : Arial

Font Size   : 18px

Font Weight : Bold

Line Height : 1.6

Text Align  : Center
```

---

## Common Properties

### Font Family

```css
font-family: Arial, sans-serif;
```

Defines which font is used.

---

### Font Size

```css
font-size: 18px;
```

Controls the text size.

---

### Font Weight

```css
font-weight: bold;
```

or

```css
font-weight: 700;
```

Controls the thickness of text.

---

### Font Style

```css
font-style: italic;
```

Makes text italic.

---

### Text Align

```css
text-align: center;
```

Horizontal alignment.

---

### Text Transform

```css
text-transform: uppercase;
```

Options:

- uppercase
- lowercase
- capitalize

---

### Text Decoration

```css
text-decoration: underline;
```

Common values:

- underline
- none
- line-through

---

### Line Height

```css
line-height: 1.6;
```

Controls spacing between lines.

---

### Letter Spacing

```css
letter-spacing: 2px;
```

Controls space between letters.

---

### Word Spacing

```css
word-spacing: 8px;
```

Controls space between words.

---

## Google Fonts

Example

```html
<link
rel="preconnect"
href="https://fonts.googleapis.com">
```

```css
body {

    font-family: "Roboto", sans-serif;

}
```

Google Fonts provides hundreds of free web fonts.

---

## Font Awesome

Example

```html
<i class="fa-solid fa-house"></i>
```

Used for scalable vector icons.

---

## Example

### HTML

```html
<h1>Welcome</h1>

<p>Lorem ipsum dolor sit amet.</p>
```

### CSS

```css
h1 {

    font-family: Arial, sans-serif;

    font-size: 2rem;

    font-weight: bold;

}

p {

    line-height: 1.6;

    letter-spacing: .5px;

}
```

---

## Result

```text
WELCOME

Lorem ipsum dolor sit amet...
```

Readable typography with proper spacing.

---

## Visual Diagram

```text
Typography

│

├── Font Family

├── Font Size

├── Font Weight

├── Font Style

├── Text Align

├── Line Height

├── Letter Spacing

└── Word Spacing
```

---

## When to Use

| Property | Common Usage |
|----------|--------------|
| font-family | Set fonts |
| font-size | Control text size |
| font-weight | Emphasize text |
| line-height | Improve readability |
| letter-spacing | Logos, headings |
| word-spacing | Large paragraphs |
| text-align | Center or align content |

---

## Common Mistakes

❌ Using too many different fonts.

❌ Very small font sizes.

❌ Poor line-height.

❌ Using bold everywhere.

❌ Center-aligning long paragraphs.

---

## Best Practices

- Use one or two font families.
- Prefer `rem` for font sizes.
- Keep good contrast.
- Use consistent spacing.
- Prioritize readability.

---

## Notes

> 💡 Good typography is more about readability than decoration.

> 💡 Most websites use only one or two font families.

---

## Summary

✔ Typography controls text appearance.

✔ Readability is more important than style.

✔ Use consistent font sizes and spacing.

✔ Google Fonts makes custom fonts easy.

---

## Related Topics

- Colors & Units
- Backgrounds
- Responsive Design

---

## References

- MDN Typography
- Google Fonts
- Font Awesome Documentation
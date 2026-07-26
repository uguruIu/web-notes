# CSS Cascade & Specificity

Difficulty: ⭐⭐⭐☆☆

Category: Fundamentals

Prerequisites: CSS Syntax, Selectors

---

## Overview

When multiple CSS rules target the same element, the browser decides which rule to apply using the Cascade and Specificity rules.

Understanding these concepts helps you write predictable and maintainable CSS.

---

## Preview

```text
CSS Rule 1

p {
    color: blue;
}

CSS Rule 2

.text {
    color: red;
}

HTML

<p class="text">

Result

Red Text
```

The browser applies the rule with the higher priority.

---

## The Cascade

The cascade determines which CSS rule wins when multiple rules affect the same element.

The browser considers:

1. Origin of the styles
2. Specificity
3. Source order

Generally, if two selectors have the same specificity, the rule written last is applied.

---

## CSS Origins

CSS styles can come from different sources:

- Browser Styles (Default styles)
- User Styles
- Author Styles (Your CSS)

Normally, author styles override browser default styles.

---

## Browser Defaults

Every browser includes its own default stylesheet.

Example:

```html
<h1>Heading</h1>

<ul>

    <li>Item</li>

</ul>
```

Without CSS, browsers automatically apply default margins, font sizes and list styles.

---

## Specificity

Specificity is a scoring system used to determine which selector has higher priority.

General priority:

```text
Inline Style

↓

ID Selector

↓

Class / Attribute / Pseudo-class

↓

Element / Pseudo-element
```

---

## Specificity Examples

Element selector

```css
p {
    color: blue;
}
```

Class selector

```css
.text {
    color: red;
}
```

ID selector

```css
#content {
    color: green;
}
```

If all three target the same element, the ID selector wins.

---

## Source Order

If specificity is equal, the last rule wins.

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Result:

```text
Red
```

---

## Inheritance

Some CSS properties are inherited by child elements.

Example:

```css
body {
    color: gray;
}
```

All text inside the body inherits the gray color unless overridden.

Common inherited properties:

- color
- font-family
- font-size
- line-height

Properties like `margin`, `padding`, and `border` are **not** inherited.

---

## !important

```css
p {
    color: blue !important;
}
```

`!important` overrides normal CSS rules.

Use it only when absolutely necessary.

---

## Visual Diagram

```text
Lowest Priority

Element

↓

Class

↓

ID

↓

Inline Style

↓

!important

Highest Priority
```

---

## Best Practices

- Keep selectors simple.
- Avoid excessive specificity.
- Prefer classes over IDs.
- Don't rely on `!important`.
- Organize your CSS logically.

---

## Notes

> 💡 If two selectors have the same specificity, the rule written later wins.

> ⚠️ Overusing `!important` makes CSS difficult to maintain.

---

## Related Topics

- Selectors
- Box Model
- CSS Variables

---

## References

- MDN CSS Cascade
- MDN Specificity
- W3C CSS Cascade Specification

## Common Mistakes

❌ Using `!important` everywhere

❌ Styling everything with IDs

❌ Writing overly complex selectors

❌ Fighting the cascade instead of understanding it
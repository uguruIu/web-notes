# CSS Cheat Sheet

Difficulty: ⭐⭐☆☆☆

Category: Quick Reference

---

# CSS Structure

```css
selector{

    property:value;

}
```

Example:

```css
p{

    color:red;

}
```

---

# Adding CSS

## Inline

```html
<p style="color:red">
```

## Internal

```html
<style>

p{

color:red;

}

</style>
```

## External

```html
<link rel="stylesheet" href="style.css">
```

---

# Selectors

## Element

```css
p{

}
```

## Class

```css
.card{

}
```

## ID

```css
#header{

}
```

---

# Box Model

```text
+---------------------+

|       Margin        |

|  +---------------+  |

|  |    Border     |  |

|  | +-----------+ |  |

|  | | Padding   | |  |

|  | | Content   | |  |

|  | +-----------+ |  |

|  +---------------+  |

+---------------------+
```

---

# Box Sizing

Recommended:

```css
*{

box-sizing:border-box;

}
```

---

# Display

```css
block

inline

inline-block

none
```

---

# Position

```css
static

relative

absolute

fixed

sticky
```

---

# Colors

```css
color:red;

color:#ffffff;

color:rgb(255,0,0);

color:rgba(0,0,0,.5);
```

---

# Typography

```css
font-family

font-size

font-weight

line-height

letter-spacing
```

---

# Background

```css
background-color

background-image

background-position

background-size

background-repeat

background-attachment
```

---

# Pseudo Classes

```css
:hover

:active

:visited

:focus
```

---

# Pseudo Elements

```css
::before

::after

::first-letter

::first-line
```

---

# Flexbox

Use for:

```text
One dimensional layouts
```

Main properties:

```css
display:flex;

flex-direction;

justify-content;

align-items;

flex-wrap;

gap;
```

---

# Grid

Use for:

```text
Two dimensional layouts
```

Main properties:

```css
display:grid;

grid-template-columns;

grid-template-rows;

gap;

grid-area;
```

---

# Responsive Design

Core idea:

```text
Content

↓

Flexible Layout

↓

Media Queries

↓

Every Screen
```

---

# Media Query

```css
@media(max-width:768px){

}
```

---

# Relative Units

```text
px

%

em

rem

vw

vh
```

---

# Transform

```css
translate()

scale()

rotate()

skew()
```

---

# Transition

```css
transition:

property

duration

timing-function;
```

---

# Animation

```css
@keyframes name{

from{

}

to{

}

}
```

---

# CSS Variables

```css
:root{

--primary:red;

}
```

Use:

```css
color:var(--primary);
```

---

# SCSS

Main features:

```text
Variables

Nesting

Mixins

Extend

Compiler
```

---

# Best Practices

Remember:

```text
Good CSS

=

Readable

+

Reusable

+

Maintainable
```

---

# Golden Rules

```text
Use Flexbox

for alignment.


Use Grid

for structure.


Use Responsive Design

for adaptation.


Use Animation

with purpose.
```

---

# Final CSS Map

```text
CSS

│

├── Selectors

├── Box Model

├── Display

├── Position

├── Flexbox

├── Grid

├── Responsive Design

├── Animation

├── SCSS

└── Best Practices
```

---

# Summary

CSS is not only about colors and styles.

CSS controls:

- Layout
- Structure
- Responsiveness
- Interaction
- User Experience

Mastering CSS means understanding how elements behave.
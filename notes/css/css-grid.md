# CSS Grid

Difficulty: ⭐⭐⭐⭐☆

Category: Layout

Prerequisites: Display, Positioning, Flexbox

---

# Learning Path

```text
Display

        │
        ▼

Layout

        │
        ▼

Flexbox

        │
        ▼

Grid Container

        │
        ▼

Grid Items

        │
        ▼

Responsive Grid

        │
        ▼

Real World Layout
```

---

# Quick Facts

Purpose         : Build two-dimensional layouts.

Frequently Used : ⭐⭐⭐⭐⭐

Difficulty      : ⭐⭐⭐⭐☆

Layout Type     : Rows + Columns

---

# Overview

CSS Grid is a modern layout system designed for building **two-dimensional layouts**.

Unlike Flexbox, which works in one direction at a time, Grid controls both **rows** and **columns** simultaneously.

Grid is perfect for:

- Page Layouts
- Dashboards
- Galleries
- Admin Panels
- Responsive Websites

---

# Mental Model

Think of Grid as **graph paper**.

```text
□□□□□□□□□□□□□□□□□□□□

□□□□□□□□□□□□□□□□□□□□

□□□□□□□□□□□□□□□□□□□□

□□□□□□□□□□□□□□□□□□□□

You place elements

by rows

and columns.
```

Every element occupies one or more cells inside the grid.

---

# Why Grid?

Before CSS Grid, developers built page layouts using:

- Floats
- Tables
- Positioning
- Width Percentages
- Nested Flexbox Containers

Those techniques worked, but often required hacks and unnecessary complexity.

CSS Grid introduced a dedicated layout system specifically designed for page layouts.

---

# Before vs After

```text
Before

Tables

↓

Floats

↓

Positioning

↓

Nested Divs

↓

Complex CSS

-----------------------------------

After

display:grid;

↓

Rows

↓

Columns

↓

Clean Layout

↓

Responsive Design
```

---

# Flexbox vs Grid

```text
Flexbox

+----------------------------+

■■  ■■  ■■

+----------------------------+

One Direction

(Row OR Column)

----------------------------------------

Grid

+----------------------------+

■■  ■■  ■■

■■  ■■  ■■

+----------------------------+

Two Directions

(Rows AND Columns)
```

---

# When Should I Use Grid?

Use Grid when you need:

✅ Multiple rows

✅ Multiple columns

✅ Full page layouts

✅ Dashboards

✅ Image galleries

✅ Complex responsive layouts

---

# Property Tree

```text
CSS Grid

│

├── Container

│

│   ├── display:grid

│   ├── grid-template-columns

│   ├── grid-template-rows

│   ├── gap

│   ├── justify-content

│   ├── align-content

│   ├── justify-items

│   └── align-items

│

└── Items

    ├── grid-column

    ├── grid-row

    ├── grid-area

    ├── justify-self

    └── align-self
```

---

# display:grid

```css
.container{

    display:grid;

}
```

This turns an element into a **Grid Container**.

Its direct children automatically become **Grid Items**.

---

# Remember

```text
display:grid

        │

        ▼

Grid Container

        │

        ▼

Grid Items
```

Only direct children become grid items.

---

# Coordinate Memory

```text
grid-column

────────────►

Left → Right

(X Axis)

----------------------------------

grid-row

▲

│

│

Top → Bottom

(Y Axis)
```

> 💡 Think of a map.

```
X = Columns

Y = Rows
```

Remember this simple rule:

**Columns move horizontally.**

**Rows move vertically.**

---

# Grid Coordinate System

Imagine every grid has invisible numbered lines.

```text
                Columns

          1      2      3      4

          │      │      │      │

1     ┌──────┬──────┬──────┐

      │      │      │      │

2     ├──────┼──────┼──────┤

      │      │      │      │

3     ├──────┼──────┼──────┤

      │      │      │      │

4     └──────┴──────┴──────┘

                Rows
```

Grid items are placed **between these numbered lines**.

Not inside the numbers.

The numbers represent **grid lines**.

---

# grid-template-columns

Defines the number and size of columns.

```css
grid-template-columns:1fr 1fr 1fr;
```

Result

```text
+---------+---------+---------+

|         |         |         |

+---------+---------+---------+
```

Three equal-width columns.

---

## Different Sizes

```css
grid-template-columns:200px 1fr 2fr;
```

```text
+------+----------+----------------+

|200px |   1fr    |      2fr       |

+------+----------+----------------+
```

---

# grid-template-rows

Defines row sizes.

```css
grid-template-rows:100px 200px;
```

```text
+--------------------------+

|         100px            |

+--------------------------+

|         200px            |

+--------------------------+
```

---

# The fr Unit

The **fr** (fraction) unit distributes available space.

```css
grid-template-columns:

1fr 1fr 1fr;
```

```text
+---------+---------+---------+

|   1fr   |   1fr   |   1fr   |

+---------+---------+---------+
```

---

## Unequal Fractions

```css
grid-template-columns:

1fr 2fr 1fr;
```

```text
+-------+---------------+-------+

| 1fr   |      2fr      | 1fr   |

+-------+---------------+-------+
```

The middle column receives twice as much space.

---

# gap

Creates spacing between grid items.

```css
gap:20px;
```

```text
+------+      +------+

|      |      |      |

+------+      +------+

        gap
```

---

## Individual Gap Properties

```css
row-gap:20px;

column-gap:40px;
```

---

# Pro Tips

💡 Prefer **fr** over percentage widths when building layouts.

💡 Prefer **gap** instead of margins for spacing grid items.

💡 Grid controls the layout.

The items simply occupy the cells.

---

# Summary

✔ Grid creates two-dimensional layouts.

✔ Rows and columns work together.

✔ Grid items are placed using numbered grid lines.

✔ The **fr** unit distributes remaining space.

✔ **gap** creates spacing between items.

---

## Next Part

In Part 2 we will cover:

- grid-column
- grid-row
- grid-area
- justify-items
- align-items
- justify-content
- align-content
- auto-fill
- auto-fit
- Spanning
- Practical Examples


---

# grid-column

The `grid-column` property defines **where an item starts and ends horizontally**.

```css
.item{

    grid-column:2 / 4;

}
```

---

## Coordinate Visualization

```text
Column Lines

        1      2      3      4

        │      │      │      │

1   ┌──────┏━━━━━━━━━━━━━━┓
    │      ┃              ┃
2   ├──────┃━━━━━━━━━━━━━━┃
    │      ┃              ┃
3   ├──────┼──────────────┤
    │      │              │
4   └──────┴──────────────┘

grid-column: 2 / 4
```

The item starts at **line 2** and ends at **line 4**.

Remember:

The numbers represent **grid lines**, not cells.

---

## Span Example

```css
grid-column:1 / 3;
```

```text
+-------------------+---------+

|                   |         |

+-------------------+---------+
```

The item spans across **two columns**.

---

# grid-row

Defines where an item starts and ends vertically.

```css
.item{

    grid-row:1 / 3;

}
```

---

## Coordinate Visualization

```text
        1      2      3

1   ┏━━━━━━━━━━━━━━┓
    ┃              ┃
2   ┃              ┃
    ┣━━━━━━━━━━━━━━┫
3   │              │
    └──────────────┘

grid-row:1 / 3
```

The item spans two rows.

---

# Combining Rows & Columns

```css
.item{

    grid-column:2 / 4;

    grid-row:1 / 3;

}
```

```text
        1      2      3      4

1   ┌──────┏━━━━━━━━━━━━━━┓
    │      ┃██████████████┃
2   ├──────┃██████████████┃
    │      ┃██████████████┃
3   ├──────┼──────────────┤
    │      │              │
4   └──────┴──────────────┘
```

This is one of Grid's biggest advantages.

---

# grid-area

Instead of coordinates, Grid can use **named areas**.

---

## HTML

```html
<header></header>

<aside></aside>

<main></main>

<footer></footer>
```

---

## CSS

```css
.container{

display:grid;

grid-template-areas:

"header header"

"sidebar content"

"footer footer";

}
```

---

## Visualization

```text
+----------------------------------+

HEADER

+--------------+-------------------+

SIDEBAR        CONTENT

+--------------+-------------------+

FOOTER

+----------------------------------+
```

Named areas make layouts much easier to read.

---

# justify-items

Aligns items **inside their own cells horizontally**.

```css
justify-items:center;
```

---

## Visualization

```text
+-----------+

|     ■     |

+-----------+
```

---

# align-items

Aligns items **inside their own cells vertically**.

```css
align-items:center;
```

---

## Visualization

```text
+-----------+

|

|     ■

|

+-----------+
```

---

# justify-content

Aligns the **entire grid** horizontally.

```css
justify-content:center;
```

---

## Visualization

```text
Container

+------------------------------------------+

        +--------------+

        Grid

        +--------------+

+------------------------------------------+
```

---

# align-content

Aligns the **entire grid** vertically.

```css
align-content:center;
```

---

## Visualization

```text
Container

+--------------------------+

|

|

+----------+

|  Grid    |

+----------+

|

|

+--------------------------+
```

---

# Remember

```text
justify-items

↓

Individual Cells

----------------------------

justify-content

↓

Entire Grid
```

---

# auto-fill vs auto-fit

One of the most confusing Grid features.

---

## auto-fill

Keeps empty columns.

```css
repeat(auto-fill,minmax(200px,1fr))
```

```text
+----+----+----+----+

□    □    □

(empty column remains)
```

---

## auto-fit

Expands existing columns.

```css
repeat(auto-fit,minmax(200px,1fr))
```

```text
+-----------+-----------+-----------+

□           □           □
```

No empty columns remain.

---

# Memory Trick

```text
auto-fill

↓

Fill

↓

Keep Tracks

----------------------------

auto-fit

↓

Fit

↓

Stretch Items
```

---

# Practical Example

```css
.container{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(250px,1fr));

gap:20px;

}
```

Perfect for:

- Product Cards
- Blog Posts
- Photo Galleries
- Responsive Layouts

---

# Real World Examples

Grid is commonly used for:

✓ Admin Dashboards

✓ Landing Pages

✓ Blog Layouts

✓ News Websites

✓ Portfolio Sites

✓ Product Grids

✓ Analytics Panels

✓ Image Galleries

---

# Pro Tips

💡 Use `grid-area` for page layouts.

💡 Use `repeat()` to reduce repetitive code.

💡 Use `minmax()` with `auto-fit` for responsive grids.

💡 Combine Grid with Flexbox instead of replacing it.

---

## Next Part

In Part 3 we will cover:

- Real Dashboard
- Layout Decision Matrix
- Developer Mindset
- Grid + Flexbox Together
- Common Mistakes
- Best Practices
- Cheat Sheet
- Modern CSS Layout
- Summary

---

# Real World Dashboard

A typical dashboard layout combines **Grid** and **Flexbox**.

```text
+--------------------------------------------------------------+

                           WEBSITE

+--------------------------------------------------------------+

HEADER

+--------------------------------------------------------------+

+-----------+--------------------------------------------------+

SIDEBAR    |                     CONTENT                       |

|          | +-----------+-----------+-----------+            |

|          | |  Card 1   |  Card 2   |  Card 3   |            |

|          | +-----------+-----------+-----------+            |

|          | |  Card 4   |  Card 5   |  Card 6   |            |

|          | +-----------+-----------+-----------+            |

|          |                                                  |

+-----------+--------------------------------------------------+

FOOTER

+--------------------------------------------------------------+
```

---

## Which Layout System?

```text
Entire Page

↓

Grid

------------------------------

Navigation

↓

Flexbox

------------------------------

Card Grid

↓

Grid

------------------------------

Buttons

↓

Flexbox

------------------------------

Forms

↓

Flexbox
```

The page structure is built with **Grid**.

The content inside each section is usually arranged with **Flexbox**.

---

# Layout Decision Matrix

```text
Need to...

Center one element?

────────────► Flexbox

-----------------------------------

Build a Navbar?

────────────► Flexbox

-----------------------------------

Align Buttons?

────────────► Flexbox

-----------------------------------

Create a Gallery?

────────────► Grid

-----------------------------------

Create a Dashboard?

────────────► Grid

-----------------------------------

Build an Entire Website?

────────────► Grid + Flexbox
```

---

# Rule of Thumb

```text
Need a page?

↓

Grid

--------------------------------

Need to align content?

↓

Flexbox
```

When in doubt:

- Grid builds the structure.
- Flexbox arranges the content.

---

# Developer Mindset

Don't ask:

```text
Which one is better?
```

Ask:

```text
Which one fits this problem?
```

Good developers choose the right tool for the job.

Grid and Flexbox are teammates—not competitors.

---

# Flexbox + Grid Together

```text
                 WEBSITE

                      │

          ┌───────────┴───────────┐

                 CSS GRID

             (Page Structure)

                      │

 Header   Sidebar   Main   Footer

                      │

          ┌───────────┴───────────┐

              Inside Each Area

                      │

                 FLEXBOX

                      │

 Logo   Menu   Cards   Buttons

 Forms  Footer  Navigation
```

---

# Remember

```text
Grid

↓

2 Dimensions

(Row + Column)

--------------------------------

Flexbox

↓

1 Dimension

(Row OR Column)
```

---

# Common Mistakes

❌ Using Grid for everything.

❌ Forgetting that numbers represent **grid lines**, not cells.

❌ Confusing `justify-items` with `justify-content`.

❌ Using percentages when `fr` would be simpler.

❌ Forgetting `gap`.

❌ Choosing Grid when Flexbox is enough.

---

# Best Practices

- Use Grid for page layouts.
- Use Flexbox inside Grid areas.
- Prefer `fr` units over percentages.
- Use `repeat()` to simplify code.
- Use `minmax()` for responsive layouts.
- Use `gap` instead of margins whenever possible.
- Keep layouts simple and readable.

---

# Complete Workflow

```text
Need a Layout

        │
        ▼

One Direction?

        │
   Yes ─┴────► Flexbox

        │
        No
        ▼

Rows + Columns?

        │
   Yes ─┴────► Grid

        │
        ▼

Need Responsive Cards?

        │
        ▼

auto-fit + minmax()

        │
        ▼

Modern Responsive Layout
```

---

# Cheat Sheet

```text
GRID CONTAINER

display:grid

│

├── grid-template-columns

├── grid-template-rows

├── gap

├── justify-content

├── align-content

├── justify-items

└── align-items

-----------------------------------

GRID ITEMS

├── grid-column

├── grid-row

├── grid-area

├── justify-self

└── align-self
```

---

# Modern CSS Layout

```text
                    MODERN CSS LAYOUT

                           Website

                               │

               ┌───────────────┴───────────────┐

                         CSS GRID

                    (Page Structure)

                               │

      Header   Sidebar   Content   Footer

                               │

               ┌───────────────┴───────────────┐

                     Inside Every Section

                               │

                          FLEXBOX

                               │

      Logo   Menu   Cards   Buttons   Forms   Footer

                               │

                 Beautiful Responsive Interface
```

---

# Key Takeaways

✔ Grid is designed for two-dimensional layouts.

✔ Flexbox is designed for one-dimensional layouts.

✔ Grid and Flexbox complement each other.

✔ Most modern websites use both together.

✔ Learn when to use each tool instead of choosing one over the other.

---

# Related Topics

- Flexbox
- Responsive Design
- Media Queries
- CSS Variables
- Position
- Display

---

# References

- MDN Web Docs — CSS Grid Layout
- CSS Grid Layout Module Specification
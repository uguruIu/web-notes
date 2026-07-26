# CSS Animation

Difficulty: ⭐⭐⭐☆☆

Category: Motion

Prerequisites: CSS Basics, Selectors, Box Model

---

# Learning Path

```text
Static Elements

        │
        ▼

Transition

        │
        ▼

Transform

        │
        ▼

Animation

        │
        ▼

Keyframes

        │
        ▼

Smooth User Experience
```

---

# Quick Facts

Purpose         : Add movement and visual feedback.

Frequently Used : ⭐⭐⭐⭐☆

Difficulty      : ⭐⭐⭐☆☆

Core Concept    : Motion

---

# Overview

CSS Animations bring web pages to life.

Instead of instantly changing between two states, elements can smoothly move, rotate, scale, fade, or transform.

Animations are commonly used for:

- Buttons
- Cards
- Menus
- Modals
- Loaders
- Navigation
- Hover Effects

---

# Why Animations?

Animations improve communication between the interface and the user.

Good animations help users understand:

✓ What changed

✓ Where something moved

✓ What can be clicked

✓ What is loading

Animations should support the user—not distract them.

---

# Motion Hierarchy

```text
Motion

        │
        ▼

Transform

        │
        ▼

Transition

        │
        ▼

Animation

        │
        ▼

Better User Experience
```

Think of these as building blocks.

---

# Transition

A transition smoothly changes an element from one state to another.

Without a transition:

```text
State A

↓

State B

(Instant)
```

With a transition:

```text
State A

↓

──────────────►

↓

State B

(Smooth)
```

---

## Basic Syntax

```css
button{

    transition:0.3s;

}
```

---

## Hover Example

```css
button{

    background:steelblue;

    transition:0.3s;

}

button:hover{

    background:tomato;

}
```

Instead of changing instantly, the background color gradually changes.

---

# Transition Properties

```css
transition-property

transition-duration

transition-timing-function

transition-delay
```

---

## Example

```css
transition:

background-color

0.3s

ease;
```

---

# When to Use Transition

Use transitions for:

✓ Hover effects

✓ Button states

✓ Link effects

✓ Card interactions

✓ Color changes

✓ Small UI feedback

---

# Remember

```text
One Change

↓

Transition

---------------------------

Multiple Steps

↓

Animation
```

---

# Transform

The transform property changes the position, size, or orientation of an element.

Unlike changing width or top, transforms do not affect the normal document flow.

---

## Common Transform Functions

```css
translate()

scale()

rotate()

skew()
```

---

# Transform Playground

## translate()

Moves an element.

```text
Original

□□□□

↓

translate()

        □□□□
```

---

## scale()

Changes size.

```text
Original

□□□□

↓

scale()

□□□□□□□□
```

---

## rotate()

Rotates an element.

```text
Original

□□□□

↓

rotate()

◢□□◣
```

---

## skew()

Tilts an element.

```text
Original

□□□□

↓

skew()

▱▱▱▱
```

---

# Combining Transforms

Multiple transforms can be combined.

```css
transform:

translateX(20px)

rotate(15deg)

scale(1.1);
```

Transforms are applied from left to right.

---

# Transition + Transform

One of the most common UI patterns.

```css
.card{

    transition:0.3s;

}

.card:hover{

    transform:translateY(-8px);

}
```

---

## Visualization

```text
Hover

□□□□

↓

translateY()

      □□□□
```

Simple.

Clean.

Modern.

---

# Real World Examples

Transitions and transforms are used in:

✓ Buttons

✓ Cards

✓ Navigation Menus

✓ Dropdowns

✓ Image Galleries

✓ Modals

✓ Tooltips

---

# Pro Tips

💡 Animate `transform` instead of `top` or `left`.

💡 Keep transitions short (200–400ms).

💡 Use motion to provide feedback.

💡 Avoid excessive movement.

---

# Summary

✔ Transition creates smooth state changes.

✔ Transform changes position, size, and rotation.

✔ Transition and Transform are often used together.

✔ Small animations improve usability.

---

## Next Part

In Part 2 we will cover:

- CSS Animation
- @keyframes
- Animation Properties
- Timing Functions
- Animation Pipeline
- Performance Pyramid
- Animate.css
- Rule of Thumb
- Developer Mindset
- Cheat Sheet

---

# CSS Animation

## @keyframes

`@keyframes` defines the steps of an animation.

Unlike transitions, animations can have multiple stages.

---

# Transition vs Animation

```text
Transition

State A

    │

    ▼

State B


Only two states
```

---

```text
Animation

Start

 │

 ▼

Step 1

 │

 ▼

Step 2

 │

 ▼

Step 3

 │

 ▼

End


Multiple states
```

---

# Basic Animation Syntax

```css
@keyframes example{

    from{

        transform:translateX(0);

    }


    to{

        transform:translateX(200px);

    }

}
```

Apply:

```css
.box{

animation:example 2s;

}
```

---

# Animation Timeline

```text
0%

●────────────────────────●

Start                  End

100%
```

Multiple keyframes:

```text
0%

●──────●──────●──────●

25%    50%    75%   100%
```

---

# Percentage Keyframes

```css
@keyframes move{

0%{

transform:translateX(0);

}


50%{

transform:translateX(100px);

}


100%{

transform:translateX(200px);

}

}
```

The browser creates the movement between the defined points.

---

# Animation Properties

```text
animation

│

├── animation-name

├── animation-duration

├── animation-delay

├── animation-iteration-count

├── animation-direction

├── animation-fill-mode

└── animation-timing-function
```

---

# animation-duration

Controls how long the animation takes.

```css
animation-duration:2s;
```

---

# animation-iteration-count

Controls repetition.

```css
animation-iteration-count:infinite;
```

Example:

```text
1 time

●────────►


Infinite

●────────►●────────►●────────►
```

---

# animation-direction

Controls movement direction.

```css
normal

reverse

alternate

alternate-reverse
```

Example:

```text
alternate


→ → →

← ← ←

→ → →
```

---

# Timing Functions

Timing functions control animation speed.

---

## linear

Constant speed.

```text
████████████
```

---

## ease

Starts slow.

Speeds up.

Slows down.

```text
▁▂▄▆██▆▄▂▁
```

---

## ease-in

Starts slowly.

```text
▁▂▄████████
```

---

## ease-out

Ends slowly.

```text
████████▄▂▁
```

---

## ease-in-out

Smooth start and finish.

```text
▁▂▄██▄▂▁
```

---

# Animation Pipeline

```text
Element

↓

Transform

↓

Animation

↓

Browser Rendering

↓

GPU

↓

Smooth Motion
```

---

# Performance Pyramid

Not every CSS property animates equally.

```text
Better Performance

        ▲

        │

   transform

        │

    opacity

--------------------

Avoid when possible

        │

   width

   height

   top

   left
```

---

# Why Transform?

Changing position:

```css
left:100px;
```

can force the browser to recalculate layout.

Using:

```css
transform:translateX(100px);
```

usually creates smoother animations.

---

# Animate.css

Animate.css is a ready-made CSS animation library.

Useful for:

- Quick prototypes
- Small projects
- UI effects

Example effects:

- Bounce
- Fade
- Shake
- Zoom

---

# Animation Decision Tree

```text
Need movement?

        │

        ▼

One simple state change?

        │

    Yes ─────► Transition


        │

        No


        ▼

Multiple steps?

        │

    Yes ─────► Animation


        │

        ▼

Only position/size change?

        │

        ▼

Transform
```

---

# Rule of Thumb

```text
Need a smooth change?

↓

Transition


Need continuous motion?

↓

Animation


Need movement?

↓

Transform
```

---

# Developer Mindset

```text
Good animations

guide users.


Bad animations

distract users.
```

Animation should have a purpose.

Not every element needs movement.

---

# Common Mistakes

❌ Too many animations.

❌ Very long durations.

❌ Distracting effects.

❌ Animating expensive properties.

❌ Ignoring accessibility.

---

# Best Practices

✔ Keep animations short.

✔ Prefer transform and opacity.

✔ Use animation to improve feedback.

✔ Respect user preferences.

```css
@media(prefers-reduced-motion){

    animation:none;

}
```

---

# Cheat Sheet

```text
Transition

↓

Two states


Transform

↓

Movement


Animation

↓

Multiple states


@keyframes

↓

Animation Steps


Timing Function

↓

Motion Feel
```

---

# Summary

✔ Transition creates smooth changes.

✔ Transform changes element appearance.

✔ Animation creates complex motion.

✔ Keyframes define animation steps.

✔ Performance matters.

✔ Good animations improve user experience.
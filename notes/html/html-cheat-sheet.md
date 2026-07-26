# HTML Cheat Sheet

## Basic Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

</body>

</html>
```

---

## Headings

```html
<h1>Main Title</h1>

<h2>Section</h2>

<h3>Subsection</h3>
```

---

## Text Elements

```html
<p>Paragraph</p>

<strong>Bold</strong>

<em>Italic</em>

<mark>Highlight</mark>

<small>Small Text</small>

<br>

<hr>
```

---

## Links

```html
<a href="https://example.com">

Visit Website

</a>
```

Open in new tab:

```html
<a href="https://example.com" target="_blank">

Visit Website

</a>
```

---

## Images

```html
<img
    src="image.jpg"
    alt="Description">
```

---

## Lists

### Unordered List

```html
<ul>

    <li>Item</li>

</ul>
```

### Ordered List

```html
<ol>

    <li>Item</li>

</ol>
```

### Description List

```html
<dl>

    <dt>HTML</dt>

    <dd>Markup Language</dd>

</dl>
```

---

## Tables

```html
<table>

    <tr>

        <th>Name</th>

        <th>Age</th>

    </tr>

    <tr>

        <td>John</td>

        <td>25</td>

    </tr>

</table>
```

---

## Forms

```html
<form>

    <label for="name">

        Name

    </label>

    <input
        id="name"
        type="text">

    <button>

        Submit

    </button>

</form>
```

### Common Input Types

| Type | Description |
|------|-------------|
| text | Text input |
| password | Password input |
| email | Email input |
| number | Numeric input |
| checkbox | Checkbox |
| radio | Radio button |
| date | Date picker |
| file | File upload |
| submit | Submit button |

---

## Layout Elements

### Block Elements

```text
<div>
<p>
<h1>-<h6>
<section>
<article>
<header>
<footer>
<nav>
<table>
```

### Inline Elements

```text
<span>
<a>
<strong>
<em>
<img>
<code>
```

---

## Semantic Elements

```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>
```

---

## Multimedia

### Audio

```html
<audio controls>

    <source src="audio.mp3">

</audio>
```

### Video

```html
<video controls>

    <source src="video.mp4">

</video>
```

### Iframe

```html
<iframe
    src="https://example.com">
</iframe>
```

---

## Meta Tags

```html
<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">

<meta
    name="description"
    content="Page description">
```

---

## Global Attributes

| Attribute | Description |
|----------|-------------|
| id | Unique identifier |
| class | CSS class |
| style | Inline CSS |
| title | Tooltip text |
| lang | Language |
| hidden | Hide element |

---

## Common HTML Entities

| Entity | Result |
|--------|--------|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&copy;` | © |
| `&nbsp;` | Space |

---

## HTML File Structure

```text
project/

│── index.html
│── about.html
│── contact.html

├── css/
│     └── style.css

├── js/
│     └── app.js

└── images/
      └── logo.png
```

---

## Best Practices

✅ Use semantic HTML

✅ Use meaningful file names

✅ Add `alt` to images

✅ Use `<label>` in forms

✅ Keep proper indentation

✅ Separate HTML, CSS and JavaScript

✅ Write descriptive `<title>`

✅ Use `lang` attribute

---

## Quick Reference

| Element | Purpose |
|---------|---------|
| `<html>` | Root element |
| `<head>` | Metadata |
| `<body>` | Visible content |
| `<h1>` | Main heading |
| `<p>` | Paragraph |
| `<a>` | Link |
| `<img>` | Image |
| `<ul>` | Unordered list |
| `<ol>` | Ordered list |
| `<table>` | Table |
| `<form>` | Form |
| `<input>` | Input field |
| `<button>` | Button |
| `<div>` | Block container |
| `<span>` | Inline container |
| `<header>` | Header |
| `<nav>` | Navigation |
| `<main>` | Main content |
| `<section>` | Section |
| `<article>` | Independent content |
| `<aside>` | Sidebar |
| `<footer>` | Footer |
| `<audio>` | Audio |
| `<video>` | Video |
| `<iframe>` | Embedded content |

---

## References

- MDN HTML Documentation
- WHATWG HTML Standard
- W3Schools HTML Reference
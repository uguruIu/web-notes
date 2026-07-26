# HTML Lists

## Overview

HTML listeleri, ilgili içerikleri düzenli ve okunabilir bir şekilde gruplamak için kullanılır.

HTML üç farklı liste türü sunar:

- Unordered List (`<ul>`)
- Ordered List (`<ol>`)
- Description List (`<dl>`)

---

## Unordered List

Sırası önemli olmayan öğeler için kullanılır.

Syntax:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Result:

- HTML
- CSS
- JavaScript

---

## Ordered List

Belirli bir sıraya sahip öğeler için kullanılır.

Syntax:

```html
<ol>
    <li>Install VS Code</li>
    <li>Create Project</li>
    <li>Write HTML</li>
</ol>
```

Result:

1. Install VS Code
2. Create Project
3. Write HTML

---

## List Item

Liste elemanları `<li>` elementi ile oluşturulur.

Example:

```html
<ul>

    <li>Apple</li>

    <li>Orange</li>

    <li>Banana</li>

</ul>
```

---

## Description List

Terim ve açıklamalar oluşturmak için kullanılır.

Syntax:

```html
<dl>

    <dt>HTML</dt>

    <dd>Markup language</dd>

    <dt>CSS</dt>

    <dd>Style sheet language</dd>

</dl>
```

Burada:

- `<dl>` → Description List
- `<dt>` → Description Term
- `<dd>` → Description Details

---

## Nested Lists

Listeler iç içe kullanılabilir.

Example:

```html
<ul>

    <li>
        Frontend

        <ul>

            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>

        </ul>

    </li>

    <li>Backend</li>

</ul>
```

---

## List Attributes

### Ordered List Type

Numaralandırma biçimi değiştirilebilir.

```html
<ol type="A">
```

Yaygın değerler:

| Value | Description |
|---|---|
| `1` | Numbers (default) |
| `A` | Uppercase letters |
| `a` | Lowercase letters |
| `I` | Uppercase Roman numerals |
| `i` | Lowercase Roman numerals |

---

### Start Attribute

Listeyi farklı bir numaradan başlatır.

```html
<ol start="5">

    <li>Item</li>

    <li>Item</li>

</ol>
```

Sonuç:

5. Item

6. Item

---

## Example

```html
<h2>Programming Languages</h2>

<ul>

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ul>

<h2>Learning Steps</h2>

<ol>

    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>

</ol>

<h2>Definitions</h2>

<dl>

    <dt>HTML</dt>

    <dd>HyperText Markup Language</dd>

</dl>
```

---

## Best Practices

- Sırası önemli olmayan içerikler için `<ul>` kullanın.
- Adım adım işlemler için `<ol>` kullanın.
- Tanım ve sözlük benzeri içerikler için `<dl>` kullanın.
- İç içe listeleri gereğinden fazla derinleştirmeyin.

---

## Notes

- `<li>` elementi hem `<ul>` hem de `<ol>` içerisinde kullanılır.
- `<dl>` yapısında `<li>` kullanılmaz.
- Listeler içerik düzenini ve okunabilirliği artırır.
- CSS ile liste işaretçileri özelleştirilebilir.

---

## Related Topics

- HTML Text Elements
- Semantic HTML
- CSS Lists

---

## References

- MDN HTML Lists
- WHATWG HTML Standard
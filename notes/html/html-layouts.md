# HTML Layout Elements

## Overview

HTML layout elementleri, sayfa içeriğini düzenlemek ve gruplamak için kullanılır.

En yaygın kullanılan layout elementleri:

- `<div>`
- `<span>`

Bu elementler tek başlarına görünümü değiştirmez. Genellikle CSS ile birlikte kullanılır.

---

## Block Elements

Block elementler bulunduğu satırın tamamını kaplar ve yeni bir satırdan başlar.

Örnek block elementler:

- `<div>`
- `<p>`
- `<h1>` - `<h6>`
- `<section>`
- `<article>`
- `<header>`
- `<footer>`
- `<nav>`
- `<ul>`
- `<ol>`
- `<table>`

Example:

```html
<div>First Block</div>

<div>Second Block</div>
```

Result:

```
First Block

Second Block
```

---

## Inline Elements

Inline elementler yalnızca içerikleri kadar yer kaplar.

Yeni satıra geçmezler.

Yaygın inline elementler:

- `<span>`
- `<a>`
- `<strong>`
- `<em>`
- `<img>`
- `<code>`
- `<abbr>`

Example:

```html
<span>HTML</span>

<span>CSS</span>

<span>JavaScript</span>
```

Result:

```
HTML CSS JavaScript
```

---

## The `<div>` Element

`<div>` genel amaçlı bir block elementtir.

Sayfa içerisindeki içerikleri gruplamak için kullanılır.

Example:

```html
<div>

    <h2>Article</h2>

    <p>This is a paragraph.</p>

</div>
```

`<div>` tek başına anlam taşımaz.

---

## The `<span>` Element

`<span>` genel amaçlı bir inline elementtir.

Metnin belirli bir bölümünü seçmek veya biçimlendirmek için kullanılır.

Example:

```html
<p>

Learning <span>HTML</span> is fun.

</p>
```

---

## Div vs Span

| `<div>` | `<span>` |
|---|---|
| Block element | Inline element |
| Yeni satırdan başlar | Aynı satırda devam eder |
| Büyük içerikleri gruplar | Küçük metin parçalarını gruplar |

---

## Example

```html
<div class="card">

    <h2>Profile</h2>

    <p>
        Welcome to
        <span class="highlight">
            Web Notes
        </span>
    </p>

</div>
```

---

## Best Practices

- İçerikleri mantıklı şekilde gruplamak için `<div>` kullanın.
- Küçük metin parçaları için `<span>` kullanın.
- Gereksiz `<div>` kullanımından kaçının.
- Mümkün olduğunda semantic elementleri tercih edin.

---

## Notes

- `<div>` bir block elementtir.
- `<span>` bir inline elementtir.
- Her ikisi de tek başına anlamsal bilgi taşımaz.
- Genellikle CSS ve JavaScript ile birlikte kullanılır.
- Modern HTML'de uygun durumlarda `<section>`, `<article>`, `<main>` gibi semantic elementler tercih edilir.

---

## Related Topics

- HTML Elements & Attributes
- Semantic HTML
- CSS Display
- CSS Flexbox
- CSS Grid

---

## References

- MDN HTML div
- MDN HTML span
- WHATWG HTML Standard
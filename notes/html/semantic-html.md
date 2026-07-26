# Semantic HTML

## Overview

Semantic HTML, içeriğin anlamını açıklayan HTML elementlerini kullanma yaklaşımıdır.

Semantic elementler, hem geliştiricilerin hem de tarayıcıların sayfa yapısını daha kolay anlamasını sağlar.

---

## Why Use Semantic HTML?

Semantic HTML kullanmanın avantajları:

- Daha okunabilir kod
- Daha kolay bakım
- Daha iyi erişilebilirlik (Accessibility)
- Daha iyi SEO
- Ekran okuyucular için daha anlamlı yapı

---

## Semantic vs Non-semantic

Non-semantic elementler içeriğin anlamını belirtmez.

Example:

```html
<div class="header"></div>

<div class="content"></div>

<div class="footer"></div>
```

Semantic elementler ise içeriğin amacını açıkça ifade eder.

Example:

```html
<header></header>

<main></main>

<footer></footer>
```

---

## Common Semantic Elements

### `<header>`

Sayfanın veya bir bölümün başlığını içerir.

```html
<header>

    <h1>Web Notes</h1>

</header>
```

---

### `<nav>`

Navigasyon bağlantılarını içerir.

```html
<nav>

    <a href="/">Home</a>

    <a href="/about">About</a>

</nav>
```

---

### `<main>`

Sayfanın ana içeriğini temsil eder.

```html
<main>

    <h2>Welcome</h2>

</main>
```

Bir sayfada genellikle yalnızca bir adet `<main>` bulunur.

---

### `<section>`

Birbiriyle ilişkili içerikleri gruplamak için kullanılır.

```html
<section>

    <h2>Latest Articles</h2>

</section>
```

---

### `<article>`

Bağımsız olarak anlam ifade eden içerikler için kullanılır.

Örnek:

- Blog yazısı
- Haber
- Forum gönderisi

```html
<article>

    <h2>HTML Basics</h2>

    <p>...</p>

</article>
```

---

### `<aside>`

Ana içerikle dolaylı ilişkili içerikler için kullanılır.

Örnek:

- Yan menü
- Reklam
- İlgili bağlantılar

```html
<aside>

    <h3>Related Articles</h3>

</aside>
```

---

### `<footer>`

Sayfa veya bölümün alt kısmını temsil eder.

```html
<footer>

    <p>© 2026 Web Notes</p>

</footer>
```

---

### `<figure>` & `<figcaption>`

Görsel ve açıklamasını birlikte göstermek için kullanılır.

```html
<figure>

    <img src="logo.png" alt="Website logo">

    <figcaption>
        Website Logo
    </figcaption>

</figure>
```

---

## Example Page Structure

```html
<body>

<header>

    <h1>Web Notes</h1>

</header>

<nav>

    <a href="/">Home</a>

    <a href="/docs">Docs</a>

</nav>

<main>

    <section>

        <article>

            <h2>Semantic HTML</h2>

            <p>...</p>

        </article>

    </section>

    <aside>

        Related Articles

    </aside>

</main>

<footer>

    <p>Copyright 2026</p>

</footer>

</body>
```

---

## Best Practices

- İçeriğin anlamına uygun semantic element kullanın.
- Gereksiz `<div>` kullanımından kaçının.
- Her sayfada yalnızca bir `<main>` kullanın.
- Navigasyon bağlantılarını `<nav>` içerisinde gruplandırın.
- Bağımsız içerikler için `<article>` kullanın.
- İlişkili içerikleri `<section>` içerisinde düzenleyin.

---

## Notes

- Semantic elementler görünümü değiştirmez.
- Sayfanın anlamını ve yapısını tanımlar.
- CSS ile birlikte kullanılmaları önerilir.
- SEO ve Accessibility için önemlidir.
- Modern HTML geliştirmenin temel parçalarındandır.

---

## Related Topics

- HTML Layout Elements
- Forms
- Accessibility
- Meta & SEO

---

## References

- MDN Semantic HTML
- WHATWG HTML Standard
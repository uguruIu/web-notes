# HTML Links & Navigation

## Overview

HTML içerisinde başka sayfalara, dosyalara veya farklı bölümlere bağlantı vermek için linkler kullanılır.

Link oluşturmak için `<a>` (anchor) elementi kullanılır.

Linkler web sayfaları arasında gezinmeyi sağlar.

---

## Anchor Element

Bir bağlantı oluşturmak için `<a>` elementi kullanılır.

Syntax:

```html
<a href="url">Link Text</a>
```

Example:

```html
<a href="https://www.google.com">
    Visit Google
</a>
```

Burada:

- `<a>` → Link elementi
- `href` → Gidilecek adres
- İçerik → Kullanıcıya gösterilen yazı

---

## href Attribute

`href` attribute'u bağlantının hedef adresini belirtir.

Example:

```html
<a href="https://example.com">
    Website
</a>
```

`href` olmadan `<a>` elementi gerçek bir bağlantı oluşturmaz.

---

# Absolute URLs

Tam adres verilen bağlantılara **absolute URL** denir.

Example:

```html
<a href="https://www.mozilla.org">
    Mozilla
</a>
```

Kullanım alanları:

- Başka web sitelerine bağlantı vermek
- Harici kaynaklara yönlendirmek

---

# Relative URLs

Aynı proje içerisindeki dosyalara verilen bağlantılara **relative URL** denir.

Örnek proje:

```text
project/

├── index.html
├── about.html
└── pages/
    └── contact.html
```

Ana sayfadan:

```html
<a href="about.html">
    About
</a>
```

Alt klasöre:

```html
<a href="pages/contact.html">
    Contact
</a>
```

---

## Opening Links in New Tab

Yeni sekmede açmak için `target` attribute'u kullanılır.

Example:

```html
<a href="https://example.com" target="_blank">
    Open Website
</a>
```

Yaygın değer:

| Value | Description |
|---|---|
| `_self` | Aynı sekmede açar |
| `_blank` | Yeni sekmede açar |

---

## Email Links

E-posta bağlantısı oluşturmak için `mailto:` kullanılır.

Example:

```html
<a href="mailto:example@email.com">
    Send Email
</a>
```

Kullanıcı bağlantıya tıkladığında varsayılan mail uygulaması açılır.

---

## Telephone Links

Telefon bağlantısı oluşturmak için `tel:` kullanılır.

Example:

```html
<a href="tel:+905551112233">
    Call Us
</a>
```

Özellikle mobil cihazlarda kullanışlıdır.

---

## Download Links

Dosya indirme bağlantısı oluşturmak için `download` attribute'u kullanılabilir.

Example:

```html
<a href="file.pdf" download>
    Download PDF
</a>
```

---

# Page Anchors (Fragment Links)

Aynı sayfa içerisindeki belirli bir bölüme gitmek için kullanılır.

Önce hedef elemente `id` verilir:

```html
<h2 id="contact">
    Contact
</h2>
```

Daha sonra link oluşturulur:

```html
<a href="#contact">
    Go to Contact
</a>
```

---

# Navigation Menu

Web sitelerinde menüler genellikle linkler kullanılarak oluşturulur.

Example:

```html
<nav>

<a href="index.html">
Home
</a>

<a href="about.html">
About
</a>

<a href="contact.html">
Contact
</a>

</nav>
```

---

# Link States

CSS ile link durumları değiştirilebilir.

Yaygın durumlar:

```css
a:link {
}

a:visited {
}

a:hover {
}

a:active {
}
```

Açıklama:

| State | Description |
|---|---|
| link | Ziyaret edilmemiş link |
| visited | Daha önce ziyaret edilmiş |
| hover | Üzerine gelindiğinde |
| active | Tıklanırken |

---

# Example

```html
<!DOCTYPE html>

<html>

<body>

<h1>My Website</h1>

<nav>

<a href="index.html">
Home
</a>

<a href="about.html">
About
</a>

<a href="contact.html">
Contact
</a>

</nav>

<br>

<a href="https://example.com" target="_blank">
External Website
</a>

</body>

</html>
```

---

# Notes

- Link oluşturmak için `<a>` elementi kullanılır.
- `href` bağlantının hedefini belirtir.
- Harici bağlantılar için absolute URL kullanılır.
- Proje içi bağlantılar için relative URL kullanılır.
- `target="_blank"` yeni sekmede açar.
- Sayfa içi gezinme için `id` ve `#` kullanılır.
- Navigasyon menüleri genellikle `<nav>` elementi içerisinde oluşturulur.

---

# Related Topics

- HTML Elements & Attributes
- Semantic HTML
- CSS Link Styling

---

# References

- MDN HTML Links
- WHATWG HTML Standard
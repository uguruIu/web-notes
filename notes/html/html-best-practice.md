# HTML Best Practices

## Overview

HTML best practices, daha okunabilir, sürdürülebilir ve erişilebilir web sayfaları oluşturmak için önerilen yöntemlerdir.

Bu kurallar zorunlu değildir, ancak modern web geliştirmede yaygın olarak uygulanır.

---

## Use Semantic HTML

İçeriğin anlamına uygun semantic elementler kullanın.

Good:

```html
<header></header>

<nav></nav>

<main></main>

<footer></footer>
```

Avoid:

```html
<div class="header"></div>

<div class="menu"></div>

<div class="content"></div>

<div class="footer"></div>
```

---

## Write Meaningful Structure

Başlıkları ve içerikleri mantıklı bir sırayla düzenleyin.

Good:

```html
<h1>Main Title</h1>

<h2>Section</h2>

<h3>Subsection</h3>
```

Heading seviyelerini gereksiz yere atlamayın.

---

## Always Use alt for Images

Önemli görseller için açıklayıcı `alt` metni ekleyin.

Good:

```html
<img src="cat.jpg" alt="Black cat sitting on a chair">
```

Decorative image:

```html
<img src="line.png" alt="">
```

---

## Use Labels in Forms

Her form alanını uygun bir `<label>` ile ilişkilendirin.

```html
<label for="email">

Email

</label>

<input
    id="email"
    type="email">
```

---

## Keep HTML Clean

- Gereksiz elementlerden kaçının.
- Gereksiz `<div>` kullanmayın.
- Basit ve okunabilir yapı oluşturun.

---

## Use Meaningful File Names

Dosya isimlerinde tutarlı bir isimlendirme kullanın.

Good:

```text
document-structure.html

semantic-html.html

contact-form.html
```

Tercih edilen isimlendirme:

- kebab-case

---

## Use Proper Indentation

Kodun okunabilir olması için girintileme kullanın.

Good:

```html
<section>

    <h2>Articles</h2>

    <p>Content...</p>

</section>
```

---

## Separate HTML, CSS and JavaScript

Her teknolojiyi kendi dosyasında tutun.

Good:

```text
index.html

style.css

app.js
```

---

## Validate HTML

Kodun HTML standartlarına uygun olduğundan emin olun.

Doğrulama işlemi:

- HTML Validator
- Tarayıcı geliştirici araçları

---

## Keep Accessibility in Mind

Erişilebilirliği unutmayın.

- Semantic HTML kullanın.
- `alt` ekleyin.
- `label` kullanın.
- `lang` belirtin.
- Klavye ile kullanılabilir yapı oluşturun.

---

## Optimize Images

- Gereksiz büyük görseller kullanmayın.
- Modern dosya formatlarını tercih edin.
- Görselleri optimize edin.

---

## Write Descriptive Titles

Her sayfa için anlamlı bir `<title>` yazın.

Example:

```html
<title>HTML Forms | Web Notes</title>
```

---

## Best Practices Checklist

- Semantic HTML kullan.
- Gereksiz `<div>` kullanma.
- Doğru heading sırası kullan.
- Görsellere `alt` ekle.
- Formlarda `label` kullan.
- HTML, CSS ve JavaScript'i ayır.
- Dosya isimlerinde kebab-case kullan.
- Kodunu düzgün girintile.
- Sayfanın dilini belirt.
- Anlamlı `<title>` yaz.

---

## Notes

- Temiz HTML daha okunabilir ve kolay bakım yapılabilir.
- Semantic HTML hem SEO hem Accessibility için önemlidir.
- Tutarlı dosya yapısı projeyi yönetmeyi kolaylaştırır.
- Basit çözümler genellikle daha sürdürülebilirdir.

---

## Related Topics

- Semantic HTML
- Accessibility
- Meta & SEO

---

## References

- MDN HTML Guide
- WHATWG HTML Standard
- W3C Web Standards
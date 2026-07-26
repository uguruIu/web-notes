# HTML Accessibility

## Overview

Accessibility (A11y), web sitelerinin herkes tarafından kullanılabilir olmasını amaçlar.

Doğru HTML kullanımı; ekran okuyucular, klavye kullanıcıları ve yardımcı teknolojiler için daha erişilebilir web sayfaları oluşturur.

---

## Why Accessibility Matters

Accessibility'nin sağladığı avantajlar:

- Daha iyi kullanıcı deneyimi
- Ekran okuyucu desteği
- Klavye ile kullanılabilirlik
- Daha iyi SEO
- Web standartlarına uyumluluk

---

## Semantic HTML

Semantic elementler sayfanın yapısını anlamlandırır.

Example:

```html
<header></header>

<nav></nav>

<main></main>

<section></section>

<footer></footer>
```

Semantic HTML, ekran okuyucuların sayfayı daha doğru yorumlamasını sağlar.

---

## Alternative Text

Görseller için anlamlı `alt` açıklamaları kullanılmalıdır.

Good:

```html
<img src="cat.jpg" alt="Black cat sitting on a chair">
```

Decorative Image:

```html
<img src="line.png" alt="">
```

---

## Labels

Her form alanı için uygun bir `<label>` kullanılmalıdır.

Example:

```html
<label for="email">

Email

</label>

<input
    id="email"
    type="email">
```

---

## Headings

Başlık seviyeleri doğru sırayla kullanılmalıdır.

Good:

```html
<h1>Main Title</h1>

<h2>Section</h2>

<h3>Subsection</h3>
```

Heading seviyelerini gereksiz şekilde atlamaktan kaçının.

---

## Link Text

Bağlantılar anlamlı metinler içermelidir.

Good:

```html
<a href="/about">
    About Us
</a>
```

Avoid:

```html
<a href="/about">
    Click Here
</a>
```

---

## Keyboard Navigation

Web sayfası yalnızca fare ile değil, klavye ile de kullanılabilmelidir.

Önemli noktalar:

- Tab sırası mantıklı olmalıdır.
- Form alanları klavye ile erişilebilir olmalıdır.
- Butonlar ve linkler odaklanabilir olmalıdır.

---

## Language Attribute

Sayfanın dili belirtilmelidir.

Example:

```html
<html lang="en">
```

Türkçe sayfalar için:

```html
<html lang="tr">
```

---

## ARIA

ARIA (Accessible Rich Internet Applications), HTML'in yetersiz kaldığı durumlarda erişilebilirliği artırmak için kullanılır.

Example:

```html
<button aria-label="Close">

    ✕

</button>
```

Mümkün olduğunda önce semantic HTML tercih edilmeli, ARIA ise gerektiğinde kullanılmalıdır.

---

## Example

```html
<!DOCTYPE html>

<html lang="en">

<body>

<header>

    <h1>Web Notes</h1>

</header>

<main>

    <img
        src="logo.png"
        alt="Web Notes logo">

    <label for="email">

        Email

    </label>

    <input
        id="email"
        type="email">

</main>

</body>

</html>
```

---

## Best Practices

- Semantic HTML kullanın.
- Tüm önemli görsellere anlamlı `alt` ekleyin.
- Form alanlarını `<label>` ile ilişkilendirin.
- Başlık seviyelerini doğru sırayla kullanın.
- Anlamlı link metinleri yazın.
- Sayfanın dilini `lang` ile belirtin.
- Gerekmedikçe ARIA yerine semantic HTML tercih edin.

---

## Notes

- Accessibility, herkes için daha kullanılabilir web sayfaları oluşturmayı amaçlar.
- Semantic HTML erişilebilirliğin temelidir.
- `alt`, `label` ve `lang` önemli erişilebilirlik özellikleridir.
- Klavye desteği unutulmamalıdır.
- ARIA, semantic HTML'in yerine değil, tamamlayıcısı olarak kullanılmalıdır.

---

## Related Topics

- Semantic HTML
- HTML Forms
- HTML Images
- Meta & SEO

---

## References

- MDN Accessibility
- WAI (Web Accessibility Initiative)
- WHATWG HTML Standard
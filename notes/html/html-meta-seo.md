# HTML Meta & SEO

## Overview

Meta etiketleri, web sayfası hakkında tarayıcılara ve arama motorlarına bilgi sağlar.

SEO (Search Engine Optimization), web sayfalarının arama motorlarında daha iyi anlaşılmasını ve sıralanmasını amaçlar.

---

## The `<title>` Element

Sayfanın başlığını belirtir.

`<title>` elementi `<head>` bölümü içerisinde bulunur.

Example:

```html
<title>HTML Web Notes</title>
```

`<title>`:

- Tarayıcı sekmesinde görünür.
- Arama motorları tarafından kullanılır.
- SEO açısından önemlidir.

---

## Meta Charset

Karakter kodlamasını belirtir.

Example:

```html
<meta charset="UTF-8">
```

UTF-8 en yaygın kullanılan karakter kodlamasıdır.

---

## Meta Viewport

Responsive tasarım için kullanılır.

Example:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">
```

Mobil cihazlarda doğru görüntüleme sağlar.

---

## Meta Description

Sayfanın kısa açıklamasını belirtir.

Example:

```html
<meta
    name="description"
    content="HTML learning notes and examples.">
```

Arama motorları bu açıklamayı arama sonuçlarında gösterebilir.

---

## Meta Keywords

Eskiden anahtar kelimeler için kullanılırdı.

Example:

```html
<meta
    name="keywords"
    content="HTML, CSS, JavaScript">
```

Modern arama motorları bu etiketi büyük ölçüde dikkate almaz.

---

## Favicon

Tarayıcı sekmesinde görünen simgeyi belirtir.

Example:

```html
<link
    rel="icon"
    href="favicon.ico">
```

---

## Open Graph

Sosyal medya platformlarında paylaşılan bağlantıların nasıl görüneceğini belirler.

Example:

```html
<meta
    property="og:title"
    content="Web Notes">

<meta
    property="og:description"
    content="HTML documentation">

<meta
    property="og:image"
    content="cover.png">
```

---

## Basic SEO Tips

- Her sayfanın benzersiz bir `<title>` etiketi olmalıdır.
- Anlamlı bir meta description yazın.
- Heading elementlerini doğru sırayla kullanın.
- Semantic HTML tercih edin.
- Görseller için `alt` attribute'u ekleyin.
- Anlamlı link metinleri kullanın.

---

## Example

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="HTML learning notes">

    <title>Web Notes</title>

    <link
        rel="icon"
        href="favicon.ico">

</head>
```

---

## Best Practices

- Her sayfaya açıklayıcı bir `<title>` ekleyin.
- UTF-8 karakter kodlamasını kullanın.
- Responsive tasarım için viewport ekleyin.
- Kısa ve anlamlı meta description yazın.
- Semantic HTML kullanın.
- Aynı başlık ve açıklamayı tüm sayfalarda tekrar etmeyin.

---

## Notes

- Meta etiketleri `<head>` bölümünde yer alır.
- `<title>` SEO için önemli elementlerden biridir.
- `viewport` mobil uyumluluk sağlar.
- `description` arama sonuçlarında kullanılabilir.
- Open Graph, sosyal medya paylaşımlarını iyileştirir.

---

## Related Topics

- HTML Document Structure
- Semantic HTML
- Accessibility

---

## References

- MDN HTML Metadata
- MDN SEO
- WHATWG HTML Standard
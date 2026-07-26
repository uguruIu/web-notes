# HTML Document Structure

## Overview

HTML dokümanları belirli bir temel yapıya sahiptir.

Her HTML dosyası genellikle `<!DOCTYPE html>`, `<html>`, `<head>` ve `<body>` elementlerinden oluşur.

Bu yapı, tarayıcının HTML dosyasını doğru şekilde yorumlamasını sağlar.

---

## Basic HTML Template

Her HTML dosyasında kullanılan temel yapı:

```html
<!DOCTYPE html>
<html>

<head>
    <title>My First Page</title>
</head>

<body>

    <h1>Hello World</h1>

    <p>This is my first HTML document.</p>

</body>

</html>
```

---

## Document Type Declaration

```html
<!DOCTYPE html>
```

`DOCTYPE`, tarayıcıya kullanılan HTML sürümünü bildirir.

Modern HTML belgelerinde HTML5 standardı kullanılır.

---

## HTML Element

```html
<html>

</html>
```

`<html>` elementi, HTML dokümanının kök elementidir.

Sayfadaki tüm HTML içerikleri bu element içerisinde bulunur.

---

## Head Element

```html
<head>

</head>
```

`<head>` bölümü kullanıcıya doğrudan gösterilmeyen bilgileri içerir.

Örnek içerikler:

- Sayfa başlığı
- Meta bilgileri
- CSS dosyaları
- Favicon
- SEO bilgileri

Örnek:

```html
<head>

    <title>My Website</title>

    <meta charset="UTF-8">

</head>
```

---

## Body Element

```html
<body>

</body>
```

`<body>` elementi, kullanıcı tarafından görünen tüm içerikleri içerir.

Örnek:

```html
<body>

<h1>Welcome</h1>

<p>This is a paragraph.</p>

<img src="image.jpg">

</body>
```

---

## Title Element

```html
<title>My Website</title>
```

`<title>` elementi, tarayıcı sekmesinde görünen başlığı belirler.

Örnek:

```html
<head>

<title>HTML Notes</title>

</head>
```

---

## Meta Tags

Meta etiketleri, HTML dokümanı hakkında bilgiler sağlar.

Örnek:

```html
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Yaygın kullanılan meta etiketleri:

| Meta | Açıklama |
|---|---|
| charset | Karakter kodlamasını belirtir |
| viewport | Responsive tasarım için kullanılır |
| description | Sayfa açıklaması sağlar |

---

## HTML Comments

HTML içerisinde açıklama eklemek için kullanılır.

Syntax:

```html
<!-- This is a comment -->
```

Özellikleri:

- Tarayıcı tarafından görüntülenmez.
- Kod açıklamak için kullanılır.
- Geliştirme sırasında faydalıdır.

---

## Complete Example

```html
<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HTML Structure</title>

</head>


<body>

    <!-- Page Content -->

    <h1>Hello HTML</h1>

    <p>Learning HTML structure.</p>

</body>

</html>
```

---

## Notes

- Her HTML dosyası temel bir yapıya sahip olmalıdır.
- `<head>` kullanıcıya gösterilmeyen bilgileri içerir.
- `<body>` kullanıcı tarafından görünen içerikleri içerir.
- `DOCTYPE` tarayıcıya HTML standardını bildirir.
- HTML5 ile birlikte doküman yapısı daha sade hale gelmiştir.

---

## References

- MDN HTML Document Structure
- WHATWG HTML Standard
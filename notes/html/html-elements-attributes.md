# HTML Elements & Attributes

## Overview

HTML dokümanları elementlerden oluşur.

HTML elementleri, web sayfasındaki içeriklerin yapısını ve anlamını belirler.

Örneğin:

- Başlıklar
- Paragraflar
- Görseller
- Bağlantılar
- Form alanları

HTML elementleri kullanılarak oluşturulur.

---

## HTML Elements

Bir HTML elementi genellikle açılış etiketi, içerik ve kapanış etiketinden oluşur.

Syntax:

```html
<tagname>Content</tagname>
```

Örnek:

```html
<p>Hello World</p>
```

Bu örnekte:

- `<p>` → Açılış etiketi
- `Hello World` → İçerik
- `</p>` → Kapanış etiketi

---

## Nested HTML Elements

HTML elementleri başka elementlerin içerisinde kullanılabilir.

Örnek:

```html
<div>

    <h1>Title</h1>

    <p>Paragraph text.</p>

</div>
```

Burada:

- `<div>` ana elementtir.
- `<h1>` ve `<p>` iç elementlerdir.

Elementleri doğru şekilde iç içe kullanmak önemlidir.

---

## Empty Elements

Bazı HTML elementleri kapanış etiketi içermez.

Bunlara **empty elements** denir.

Örnek:

```html
<img src="image.jpg">

<br>

<hr>
```

Yaygın empty elements:

| Element | Açıklama |
|---|---|
| `<img>` | Görsel ekler |
| `<br>` | Satır boşluğu oluşturur |
| `<hr>` | Yatay çizgi oluşturur |
| `<input>` | Form alanı oluşturur |

---

## HTML Attributes

Attributes, HTML elementleri hakkında ek bilgiler sağlar.

Attributes her zaman açılış etiketinin içerisinde yazılır.

Syntax:

```html
<tag attribute="value">
```

Örnek:

```html
<img src="image.jpg" alt="Example image">
```

Burada:

- `src` → Görsel dosyasının yolunu belirtir.
- `alt` → Görsel açıklaması sağlar.

---

## Common Attributes

Bazı attribute'lar birçok HTML elementinde kullanılabilir.

### id

Elemente benzersiz bir kimlik verir.

```html
<p id="intro">
    Introduction text.
</p>
```

---

### class

Bir veya daha fazla elemente ortak isim verir.

```html
<p class="text">
    Paragraph
</p>
```

CSS ve JavaScript ile seçim yapmak için kullanılır.

---

### style

Elemente doğrudan CSS yazmayı sağlar.

```html
<p style="color:red;">
    Red text
</p>
```

---

### title

Element hakkında ek bilgi gösterir.

```html
<p title="Information">
    Hover over me.
</p>
```

---

## Boolean Attributes

Bazı attribute'lar değer almadan kullanılır.

Örnek:

```html
<input type="text" disabled>
```

Burada `disabled` attribute'u input alanını pasif hale getirir.

Yaygın boolean attributes:

- disabled
- checked
- selected
- readonly
- required

---

## data-* Attributes

Özel veri saklamak için kullanılır.

Syntax:

```html
<div data-user="123">
    User
</div>
```

JavaScript ile bu verilere erişilebilir.

Örnek:

```javascript
element.dataset.user
```

---

## Example

```html
<!DOCTYPE html>

<html>

<body>

<h1 id="title">
    My Website
</h1>

<p class="description">
    Learning HTML elements.
</p>

<img src="image.jpg" alt="Sample image">

</body>

</html>
```

---

## Notes

- HTML elementleri sayfanın temel yapı taşlarıdır.
- Attribute'lar elementlere ek bilgiler verir.
- Attribute'lar açılış etiketinde yazılır.
- Bazı elementlerin kapanış etiketi yoktur.
- `id` benzersiz olmalıdır.
- `class` birden fazla elementte kullanılabilir.

---

## References

- MDN HTML Elements
- MDN HTML Attributes
- WHATWG HTML Standard
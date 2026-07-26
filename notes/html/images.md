# HTML Images

## Overview

HTML içerisinde görsel eklemek için `<img>` elementi kullanılır.

`<img>` bir **empty element**tir ve kapanış etiketi bulunmaz.

---

## Image Element

Syntax:

```html
<img src="image.jpg" alt="Image description">
```

Example:

```html
<img src="images/profile.jpg" alt="Profile photo">
```

---

## src Attribute

`src` (**source**) attribute'u görsel dosyasının konumunu belirtir.

Example:

```html
<img src="logo.png" alt="Website logo">
```

`src` olmadan görsel görüntülenemez.

---

## alt Attribute

`alt` (**alternative text**) görsel yüklenemediğinde veya ekran okuyucu kullanan kullanıcılar için alternatif açıklama sağlar.

Example:

```html
<img src="cat.jpg" alt="Black cat sitting on a chair">
```

`alt` kullanımı erişilebilirlik (**Accessibility**) açısından önemlidir.

---

## Width & Height

Görsel boyutları `width` ve `height` attribute'ları ile belirlenebilir.

Example:

```html
<img src="photo.jpg" alt="Mountain" width="400" height="300">
```

CSS ile boyutlandırmak çoğu durumda daha esnek bir yöntemdir.

---

## Image Paths

### Relative Path

Aynı proje içerisindeki görseller için kullanılır.

```html
<img src="images/photo.jpg" alt="Photo">
```

---

### Absolute Path

Harici bir adresteki görseli kullanır.

```html
<img src="https://example.com/image.jpg" alt="Example image">
```

---

## Figure & Figcaption

Bir görsel ve açıklamasını birlikte göstermek için kullanılır.

Example:

```html
<figure>

    <img src="cat.jpg" alt="Black cat">

    <figcaption>
        A black cat sitting on a chair.
    </figcaption>

</figure>
```

---

## Responsive Images

Responsive tasarımlarda görseller genellikle CSS ile ölçeklendirilir.

Example:

```css
img {
    max-width: 100%;
    height: auto;
}
```

Bu sayede görsel ekran boyutuna göre küçülüp büyüyebilir.

---

## Picture Element

Farklı ekran boyutları veya dosya formatları için farklı görseller kullanılmasını sağlar.

Example:

```html
<picture>

    <source media="(min-width: 768px)" srcset="large.jpg">

    <source media="(min-width: 480px)" srcset="medium.jpg">

    <img src="small.jpg" alt="Responsive image">

</picture>
```

---

## Common Image Formats

| Format | Description |
|---|---|
| JPG / JPEG | Fotoğraflar için yaygın format |
| PNG | Şeffaf arka plan destekler |
| SVG | Vektörel görseller |
| GIF | Basit animasyonlar |
| WebP | Modern, küçük dosya boyutu |

---

## Example

```html
<!DOCTYPE html>

<html>

<body>

<h1>HTML Images</h1>

<img src="images/mountain.jpg"
     alt="Mountain landscape"
     width="500">

</body>

</html>
```

---

## Best Practices

- Her zaman anlamlı bir `alt` açıklaması yazın.
- Proje içindeki görseller için relative path kullanın.
- Büyük boyutlu görselleri optimize edin.
- Responsive tasarımlar için CSS kullanın.
- Dekoratif görsellerde uygun durumlarda boş `alt=""` kullanılabilir.

---

## Notes

- `<img>` boş (empty) bir elementtir.
- `src` görsel dosyasını belirtir.
- `alt` erişilebilirlik için önemlidir.
- `figure` ve `figcaption` semantik kullanım sağlar.
- CSS ile boyutlandırma HTML attribute'larına göre daha esnektir.

---

## Related Topics

- HTML Elements & Attributes
- Semantic HTML
- Accessibility
- CSS Images

---

## References

- MDN HTML Images
- WHATWG HTML Standard
# HTML Text Elements

## Overview

HTML içerisinde metin içeriklerini düzenlemek ve anlamlandırmak için kullanılan elementlere **Text Elements** denir.

Başlıklar, paragraflar, metin biçimlendirme ve alıntılar HTML text elementleri kullanılarak oluşturulur.

---

## Headings

HTML'de başlık oluşturmak için `<h1>` ile `<h6>` arasında heading elementleri kullanılır.

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Sub Title</h3>
```

Başlık seviyeleri:

| Element | Açıklama |
|---|---|
| `<h1>` | En önemli başlık |
| `<h2>` | İkinci seviye başlık |
| `<h3>` | Alt başlık |
| `<h4>` | Daha alt seviye |
| `<h5>` | Daha alt seviye |
| `<h6>` | En küçük başlık |

Not:

- Bir sayfada genellikle bir adet `<h1>` kullanılır.
- Başlık sırası anlamlı şekilde kullanılmalıdır.
- Başlıklar SEO ve erişilebilirlik açısından önemlidir.

---

## Paragraphs

Paragraflar oluşturmak için `<p>` elementi kullanılır.

Örnek:

```html
<p>
This is a paragraph.
</p>
```

Tarayıcılar varsayılan olarak paragraflar arasında boşluk bırakır.

---

## Line Break

Satır boşluğu oluşturmak için `<br>` elementi kullanılır.

Örnek:

```html
<p>
Hello<br>
World
</p>
```

Sonuç:

```
Hello
World
```

`<br>` boş bir elementtir, kapanış etiketi yoktur.

---

## Horizontal Rule

Sayfa içerisinde yatay çizgi oluşturmak için `<hr>` kullanılır.

Örnek:

```html
<h1>Chapter One</h1>

<hr>

<p>Chapter content.</p>
```

Genellikle içerik bölümlerini ayırmak için kullanılır.

---

# Text Formatting Elements

HTML metinleri farklı şekillerde biçimlendirmek için çeşitli elementler sağlar.

---

## Bold Text

### `<b>`

Metni kalın gösterir.

```html
<b>Bold text</b>
```

---

### `<strong>`

Metni önemli olarak belirtir ve genellikle kalın görünür.

```html
<strong>Important text</strong>
```

Fark:

- `<b>` sadece görsel biçimlendirme yapar.
- `<strong>` içerik önemini belirtir.

---

## Italic Text

### `<i>`

Metni eğik gösterir.

```html
<i>Italic text</i>
```

---

### `<em>`

Metni vurgulu şekilde belirtir.

```html
<em>Emphasized text</em>
```

Fark:

- `<i>` görsel amaçlıdır.
- `<em>` anlam belirtir.

---

## Other Formatting Elements

### Marked Text

```html
<mark>Highlighted text</mark>
```

Metni işaretlemek için kullanılır.

---

### Small Text

```html
<small>Small text</small>
```

Daha küçük metin oluşturur.

---

### Deleted Text

```html
<del>Deleted text</del>
```

Silinmiş metni gösterir.

---

### Inserted Text

```html
<ins>Inserted text</ins>
```

Eklenmiş metni gösterir.

---

### Subscript

Alt simge oluşturur.

```html
H<sub>2</sub>O
```

Sonuç:

H₂O

---

### Superscript

Üst simge oluşturur.

```html
x<sup>2</sup>
```

Sonuç:

x²

---

# Quotations & Citations

HTML içerisinde alıntı ve kaynak belirtmek için kullanılan elementlerdir.

---

## Blockquote

Uzun alıntılar için kullanılır.

```html
<blockquote>
This is a long quotation.
</blockquote>
```

---

## Short Quote

Kısa alıntılar için `<q>` kullanılır.

```html
<p>
He said <q>Hello World</q>
</p>
```

---

## Abbreviation

Kısaltmaları açıklamak için kullanılır.

```html
<abbr title="HyperText Markup Language">
HTML
</abbr>
```

Kullanıcı element üzerine geldiğinde açıklama görünür.

---

## Address

İletişim bilgileri için kullanılır.

```html
<address>
Written by John Doe<br>
Email: example@mail.com
</address>
```

---

## Citation

Bir eser, kitap, film veya kaynak belirtmek için kullanılır.

```html
<cite>
The Lord of the Rings
</cite>
```

---

## Bidirectional Override

Metin yönünü değiştirmek için kullanılır.

```html
<bdo dir="rtl">
Hello World
</bdo>
```

`rtl` → right to left

---

# Code Text Elements

Kod veya klavye girdilerini göstermek için kullanılır.

---

## Code

Kod parçaları için kullanılır.

```html
<code>
console.log("Hello");
</code>
```

---

## Preformatted Text

Boşlukları ve satır düzenini korur.

```html
<pre>
Line 1
    Line 2
</pre>
```

---

## Keyboard Input

Klavye girişlerini göstermek için kullanılır.

```html
<kbd>
Ctrl + C
</kbd>
```

---

# Example

```html
<!DOCTYPE html>

<html>

<body>

<h1>HTML Text Elements</h1>

<p>
This is a paragraph.
</p>

<p>
<strong>Important text</strong>
</p>

<p>
<em>Emphasized text</em>
</p>

<p>
Water formula: H<sub>2</sub>O
</p>

<blockquote>
HTML is the standard markup language for Web pages.
</blockquote>

</body>

</html>
```

---

# Notes

- `<h1>` - `<h6>` başlık oluşturmak için kullanılır.
- `<p>` paragraf oluşturur.
- `<br>` satır kırılması sağlar.
- `<hr>` içerik bölümleri arasında ayırıcı oluşturur.
- `<strong>` ve `<em>` semantic anlam taşır.
- `<b>` ve `<i>` daha çok görsel biçimlendirme içindir.
- Alıntılar için uygun HTML elementleri kullanılmalıdır.

---

# References

- MDN HTML Text Elements
- WHATWG HTML Standard
# HTML Multimedia

## Overview

HTML multimedia elementleri, web sayfalarına ses, video ve harici içerik eklemek için kullanılır.

Yaygın multimedia elementleri:

- `<audio>`
- `<video>`
- `<source>`
- `<track>`
- `<iframe>`

---

## Audio Element

Ses dosyaları eklemek için `<audio>` elementi kullanılır.

Example:

```html
<audio controls>

    <source src="audio.mp3" type="audio/mpeg">

    Your browser does not support the audio element.

</audio>
```

### Common Attributes

| Attribute | Description |
|---|---|
| `controls` | Oynatma kontrollerini gösterir. |
| `autoplay` | Sayfa açıldığında otomatik oynatır. |
| `loop` | Sesi sürekli tekrarlar. |
| `muted` | Sesi kapalı başlatır. |

---

## Video Element

Video eklemek için `<video>` elementi kullanılır.

Example:

```html
<video controls width="600">

    <source src="video.mp4" type="video/mp4">

    Your browser does not support the video element.

</video>
```

### Common Attributes

| Attribute | Description |
|---|---|
| `controls` | Video kontrollerini gösterir. |
| `autoplay` | Otomatik oynatır. |
| `loop` | Sürekli tekrar eder. |
| `muted` | Sesi kapalı başlatır. |
| `poster` | Video başlamadan önce gösterilecek görseli belirtir. |

---

## Source Element

`<source>` elementi aynı medya için birden fazla dosya formatı tanımlamayı sağlar.

Example:

```html
<video controls>

    <source src="video.mp4" type="video/mp4">

    <source src="video.webm" type="video/webm">

</video>
```

Tarayıcı desteklediği ilk formatı kullanır.

---

## Track Element

Videolara altyazı veya açıklama eklemek için kullanılır.

Example:

```html
<video controls>

    <source src="movie.mp4" type="video/mp4">

    <track
        src="subtitle.vtt"
        kind="subtitles"
        srclang="en"
        label="English">

</video>
```

---

## Iframe

Başka bir web sayfasını mevcut sayfa içerisine gömmek için kullanılır.

Example:

```html
<iframe
    src="https://example.com"
    width="600"
    height="400">
</iframe>
```

Yaygın kullanım alanları:

- YouTube videoları
- Google Maps
- Harici web sayfaları
- Sunum ve dökümanlar

---

## Embedding YouTube Videos

Example:

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video player"
    allowfullscreen>
</iframe>
```

---

## Example

```html
<h2>Audio</h2>

<audio controls>

    <source src="music.mp3" type="audio/mpeg">

</audio>

<h2>Video</h2>

<video controls width="500">

    <source src="movie.mp4" type="video/mp4">

</video>
```

---

## Best Practices

- Uygun medya formatlarını kullanın.
- Video ve ses için birden fazla format sunmayı değerlendirin.
- Gerekli durumlarda altyazı (`<track>`) ekleyin.
- Gereksiz `autoplay` kullanımından kaçının.
- Harici içerikleri yalnızca güvenilir kaynaklardan gömün.

---

## Notes

- `<audio>` ses oynatır.
- `<video>` video oynatır.
- `<source>` alternatif medya dosyaları tanımlar.
- `<track>` altyazı ve metin parçaları ekler.
- `<iframe>` harici içerik gömmek için kullanılır.

---

## Related Topics

- HTML Images
- Accessibility
- HTML Links & Navigation

---

## References

- MDN HTML Audio
- MDN HTML Video
- MDN HTML iframe
- WHATWG HTML Standard
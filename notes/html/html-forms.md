# HTML Forms

## Overview

HTML formları, kullanıcıdan veri almak için kullanılır.

Formlar; giriş yapma, kayıt olma, arama, iletişim ve dosya yükleme gibi birçok işlemde kullanılır.

---

## Form Element

Tüm form alanları `<form>` elementi içerisinde bulunur.

Syntax:

```html
<form>

</form>
```

Example:

```html
<form>

    <input type="text">

</form>
```

---

## Action Attribute

`action` form verilerinin gönderileceği adresi belirtir.

Example:

```html
<form action="/login">

</form>
```

---

## Method Attribute

Form verisinin nasıl gönderileceğini belirler.

```html
<form method="get">

</form>
```

Yaygın değerler:

| Method | Description |
|---|---|
| `GET` | Veriyi URL'e ekleyerek gönderir. |
| `POST` | Veriyi istek gövdesinde gönderir. |

---

## Input Element

Veri girişi için kullanılan en temel form elementidir.

Example:

```html
<input type="text">
```

---

## Common Input Types

### Text

```html
<input type="text">
```

---

### Password

```html
<input type="password">
```

---

### Email

```html
<input type="email">
```

---

### Number

```html
<input type="number">
```

---

### Checkbox

```html
<input type="checkbox">
```

---

### Radio

```html
<input type="radio">
```

---

### Date

```html
<input type="date">
```

---

### File

```html
<input type="file">
```

---

### Submit

```html
<input type="submit">
```

---

### Reset

```html
<input type="reset">
```

---

### Button

```html
<input type="button" value="Click">
```

---

## Label

`<label>` form alanını açıklamak için kullanılır.

Example:

```html
<label for="username">

Username

</label>

<input id="username" type="text">
```

`for` değeri ilgili input'un `id` değeri ile aynı olmalıdır.

---

## Textarea

Çok satırlı metin girişleri için kullanılır.

```html
<textarea>

</textarea>
```

Example:

```html
<textarea rows="5" cols="30">

</textarea>
```

---

## Select

Açılır liste oluşturur.

Example:

```html
<select>

    <option>HTML</option>

    <option>CSS</option>

    <option>JavaScript</option>

</select>
```

---

## Button Element

Buton oluşturmak için kullanılır.

Example:

```html
<button>

Save

</button>
```

---

## Fieldset & Legend

İlgili form alanlarını gruplamak için kullanılır.

Example:

```html
<fieldset>

    <legend>

        Personal Information

    </legend>

</fieldset>
```

---

## Common Attributes

| Attribute | Description |
|---|---|
| `name` | Alan adını belirtir. |
| `id` | Benzersiz kimlik oluşturur. |
| `placeholder` | Geçici açıklama gösterir. |
| `value` | Varsayılan değer belirler. |
| `required` | Alanı zorunlu yapar. |
| `readonly` | Düzenlemeyi engeller. |
| `disabled` | Alanı devre dışı bırakır. |
| `maxlength` | Maksimum karakter sayısını belirler. |
| `min` / `max` | Sayısal sınırlar belirler. |

---

## Complete Example

```html
<form action="/login" method="post">

    <label for="username">

        Username

    </label>

    <input
        id="username"
        name="username"
        type="text"
        required>

    <br><br>

    <label for="password">

        Password

    </label>

    <input
        id="password"
        name="password"
        type="password"
        required>

    <br><br>

    <button type="submit">

        Login

    </button>

</form>
```

---

## Best Practices

- Her input için mümkün olduğunda `<label>` kullanın.
- Anlamlı `name` değerleri kullanın.
- Doğru `input` türünü seçin.
- Gerekli alanlar için `required` kullanın.
- İlgili alanları `fieldset` ile gruplandırın.
- HTML doğrulamasına güvenmeyin; sunucu tarafında da doğrulama yapın.

---

## Notes

- Formlar kullanıcıdan veri almak için kullanılır.
- `<form>` tüm form alanlarını kapsar.
- `GET` ve `POST` en yaygın form metodlarıdır.
- `<label>` erişilebilirliği artırır.
- Form doğrulaması hem istemci hem de sunucu tarafında yapılmalıdır.

---

## Related Topics

- Semantic HTML
- Accessibility
- HTML Elements & Attributes
- HTTP Methods

---

## References

- MDN HTML Forms
- WHATWG HTML Standard
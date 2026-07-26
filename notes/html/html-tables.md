# HTML Tables

## Overview

HTML tabloları, verileri satır ve sütunlar halinde düzenlemek için kullanılır.

Bir tablo genellikle başlık, veri satırları ve isteğe bağlı olarak açıklama (caption) içerir.

---

## Table Structure

Bir HTML tablosu aşağıdaki temel elementlerden oluşur:

- `<table>` → Tabloyu oluşturur.
- `<tr>` → Table Row (Satır)
- `<th>` → Table Header (Başlık Hücresi)
- `<td>` → Table Data (Veri Hücresi)

Example:

```html
<table>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>

</table>
```

---

## Table Sections

Büyük tabloları daha düzenli hale getirmek için kullanılabilir.

### Table Head

```html
<thead>

</thead>
```

Tablonun başlık bölümünü içerir.

---

### Table Body

```html
<tbody>

</tbody>
```

Tablonun ana veri bölümünü içerir.

---

### Table Footer

```html
<tfoot>

</tfoot>
```

Toplam, özet veya ek bilgiler için kullanılır.

---

## Table Caption

Tabloya başlık eklemek için kullanılır.

Example:

```html
<table>

    <caption>
        Student List
    </caption>

</table>
```

---

## Colspan

Bir hücrenin birden fazla sütunu kaplamasını sağlar.

Example:

```html
<td colspan="2">
    Total
</td>
```

---

## Rowspan

Bir hücrenin birden fazla satırı kaplamasını sağlar.

Example:

```html
<td rowspan="2">
    John
</td>
```

---

## Complete Example

```html
<table>

    <caption>
        Student List
    </caption>

    <thead>

        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>

    </thead>

    <tbody>

        <tr>
            <td>John</td>
            <td>25</td>
        </tr>

        <tr>
            <td>Jane</td>
            <td>28</td>
        </tr>

    </tbody>

</table>
```

---

## Best Practices

- Başlık hücreleri için `<th>` kullanın.
- Büyük tablolarda `<thead>`, `<tbody>` ve `<tfoot>` kullanın.
- Tablo açıklaması gerekiyorsa `<caption>` kullanın.
- Düzen amacıyla tablo kullanmayın.
- Görünümü CSS ile şekillendirin.

---

## Notes

- `<table>` tabloyu oluşturur.
- `<tr>` satır oluşturur.
- `<th>` başlık hücresidir.
- `<td>` veri hücresidir.
- `colspan` sütunları birleştirir.
- `rowspan` satırları birleştirir.
- Modern web geliştirmede tablolar yalnızca tablosal veriler için kullanılmalıdır.

---

## Related Topics

- HTML Elements & Attributes
- CSS Tables
- Accessibility

---

## References

- MDN HTML Tables
- WHATWG HTML Standard

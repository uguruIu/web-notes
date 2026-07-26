# SCSS

Difficulty: ⭐⭐☆☆☆

Category: CSS Preprocessor

Prerequisites: CSS Basics

---

# Learning Path

```text
CSS

↓

SCSS

↓

Compiler

↓

CSS

↓

Browser
```

---

# Overview

SCSS (Sassy CSS), CSS'in daha gelişmiş ve düzenli yazılmasını sağlayan bir CSS preprocessor'dır.

SCSS kodu doğrudan tarayıcı tarafından çalıştırılmaz.

Önce normal CSS'e çevrilir.

---

# Why SCSS?

Normal CSS büyüdükçe bazı problemler ortaya çıkar:

- Tekrar eden kodlar
- Büyük dosya yönetimi
- Renk değişiklikleri
- Karmaşık yapılar

SCSS bu problemleri azaltır.

---

# CSS vs SCSS

## CSS

```css
.button{

    background:#3498db;

    padding:10px;

}

.card{

    background:#3498db;

    padding:10px;

}
```

Aynı değerler tekrar ediyor.

---

## SCSS

```scss
$primary:#3498db;

$padding:10px;


.button{

    background:$primary;

    padding:$padding;

}


.card{

    background:$primary;

    padding:$padding;

}
```

Tek bir yerden yönetilebilir.

---

# Variables

Variables tekrar kullanılan değerleri saklar.

---

## Syntax

```scss
$variable-name:value;
```

---

## Example

```scss
$main-color:#333;

$spacing:20px;


body{

color:$main-color;

margin:$spacing;

}
```

---

# Nesting

SCSS içerisinde CSS yapıları iç içe yazılabilir.

---

CSS:

```css
.nav{

}

.nav a{

}

.nav a:hover{

}
```

---

SCSS:

```scss
.nav{

    a{

    }


    &:hover{

    }

}
```

---

# Parent Selector (&)

`&` mevcut elementi temsil eder.

---

Example:

```scss
.button{

    background:black;


    &:hover{

        background:red;

    }

}
```

Çıktı:

```css
.button:hover{

background:red;

}
```

---

# Mixins

Mixin tekrar kullanılan CSS bloklarıdır.

---

Example:

```scss
@mixin center{

display:flex;

justify-content:center;

align-items:center;

}
```

Kullanım:

```scss
.box{

@include center;

}
```

---

# Extend

Benzer stilleri paylaşmak için kullanılır.

---

Example:

```scss
%button{

padding:10px;

border-radius:5px;

}


.primary{

@extend %button;

}
```

---

# SCSS Workflow

```text
SCSS File

style.scss

        │

        ▼

Sass Compiler

        │

        ▼

CSS File

style.css

        │

        ▼

Browser
```

---

# NPM ile Sass

Kurulum:

```bash
npm install sass
```

Çalıştırma:

```bash
sass input.scss output.css
```

---

# Common Mistakes

❌ SCSS dosyasını direkt tarayıcıda kullanmaya çalışmak.

❌ Gereksiz nesting kullanmak.

❌ Çok fazla mixin oluşturmak.

❌ CSS mantığını tamamen unutmak.

---

# Rule of Thumb

```text
Small Project

↓

CSS is enough


Large Project

↓

SCSS can help
```

---

# Developer Mindset

SCSS yeni bir CSS dili değildir.

SCSS:

CSS yazmayı kolaylaştıran bir araçtır.

Önce CSS'i öğren.

Sonra SCSS kullan.

---

# Cheat Sheet

```text
Variables

$

↓

Nesting

{}

↓

Parent Selector

&

↓

Mixin

@mixin

↓

Use Mixin

@include

↓

Extend

@extend
```

---

# Summary

✔ SCSS CSS'in geliştirilmiş halidir.

✔ Browser SCSS çalıştırmaz.

✔ Compiler SCSS'i CSS'e çevirir.

✔ Variables tekrarları azaltır.

✔ Nesting okunabilirliği artırır.

✔ Mixins tekrar kullanılabilir kod sağlar.

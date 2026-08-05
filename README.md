# ISM Unique Design — Website Portofoliu

Site static, premium și minimalist, pentru un studio de design interior. Realizat exclusiv cu **HTML, CSS și JavaScript simplu** — fără React, fără framework-uri, fără bază de date, fără instalări (npm, build tools etc.). Funcționează direct pe **GitHub Pages**.

## Structura fișierelor

```
ism-unique-design/
├── index.html                 → Pagina principală (Hero, Despre, Portofoliu, Proces, Testimoniale, Contact)
├── style.css                  → Tot stilul site-ului (design tokens, layout, animații, responsive)
├── script.js                  → Meniu mobil, animații la scroll, formular de contact, buton "sus"
├── README.md                  → Acest fișier
├── images/                    → Toate imaginile site-ului (SVG, căi relative)
│   ├── favicon.svg
│   ├── hero-main.svg
│   ├── about-portrait.svg
│   ├── ornament-divider.svg
│   └── motif-*.svg            → Ilustrații pentru cardurile de portofoliu și galerii
└── projects/                  → Paginile individuale pentru fiecare proiect
    ├── proiect-1.html         → Reședința Aurelia
    ├── proiect-2.html         → Penthouse Ivory
    ├── proiect-3.html         → Apartament Herăstrău
    └── proiect-4.html         → Vila Monochrome
```

Toate căile către imagini, CSS, JS și pagini sunt **relative**, deci site-ul funcționează identic local, pe GitHub Pages sau pe orice alt hosting static, fără nicio configurare suplimentară.

## Despre imagini

Imaginile incluse sunt **ilustrații SVG originale**, desenate special pentru acest proiect, în stilul editorial al site-ului (linii aurii pe fundal ivoire/negru). Ele sunt gata de folosit ca atare, dar sunt gândite ca **placeholder-uri elegante** — recomandăm să le înlocuiești treptat cu fotografii reale din proiectele studioului, pentru un rezultat final complet premium.

### Cum înlocuiești o imagine cu o fotografie reală
1. Adaugă fotografia (format `.jpg` sau `.webp`, recomandat optimizată sub 300–500 KB) în folderul `images/` sau `projects/` (poți crea subfoldere, ex. `images/proiecte/aurelia-01.jpg`).
2. În fișierul HTML relevant, înlocuiește atributul `src` al tagului `<img>`:
   ```html
   <img src="images/proiecte/aurelia-01.jpg" alt="Descriere scurtă și exactă a imaginii">
   ```
3. Actualizează mereu textul din `alt="..."` ca să descrie fotografia reală (important pentru accesibilitate și SEO).

## Cum publici site-ul pe GitHub Pages

1. Creează un repository nou pe GitHub (public), de exemplu `ism-unique-design`.
2. Încarcă în repository **tot conținutul acestui folder** (`index.html`, `style.css`, `script.js`, `README.md`, `images/`, `projects/`), păstrând exact aceeași structură de foldere.
   - Din interfața web GitHub: butonul **"Add file" → "Upload files"**, apoi tragi toate fișierele/folderele.
   - Sau din linia de comandă:
     ```bash
     git init
     git add .
     git commit -m "Website ISM Unique Design"
     git branch -M main
     git remote add origin https://github.com/NUME-UTILIZATOR/ism-unique-design.git
     git push -u origin main
     ```
3. Intră în repository, pe GitHub → **Settings → Pages**.
4. La secțiunea **"Build and deployment"**, alege sursa **"Deploy from a branch"**.
5. La **Branch**, selectează `main` și folderul `/ (root)`, apoi apasă **Save**.
6. După 1–2 minute, GitHub îți va afișa adresa live, de forma:
   ```
   https://NUME-UTILIZATOR.github.io/ism-unique-design/
   ```

Nu este nevoie de niciun build step, niciun `npm install`, niciun server — GitHub Pages servește direct fișierele statice.

## Personalizare rapidă

| Ce vrei să schimbi | Unde |
|---|---|
| Numele studioului, textele, prețurile | direct în `index.html` și în fișierele din `projects/` |
| Culori (ivoire, bej, negru, auriu) | secțiunea `:root` din `style.css` (variabilele `--c-...`) |
| Fonturi | linkul Google Fonts din `<head>`-ul fiecărei pagini HTML + variabilele `--font-display` / `--font-body` din `style.css` |
| Linkuri Instagram / Facebook / WhatsApp | caută `instagram.com`, `facebook.com` și `wa.me` în `index.html` și în paginile din `projects/`, apoi înlocuiește cu conturile reale |
| Date de contact (email, telefon, adresă) | secțiunea `#contact` din `index.html` |
| Adăugarea unui proiect nou | copiază `projects/proiect-4.html`, redenumește-l (ex. `proiect-5.html`), actualizează textul și imaginile, apoi adaugă un card nou în grila de portofoliu din `index.html` |

## Formularul de contact

Formularul din secțiunea **Contact** este validat integral în JavaScript (`script.js`) și afișează un mesaj de confirmare — dar, fiind un site 100% static, **nu trimite emailuri automat**. Pentru trimitere reală, cea mai simplă soluție este conectarea la un serviciu gratuit compatibil cu site-uri statice, fără server propriu:

- **[Formspree](https://formspree.io)** — adaugi `action="https://formspree.io/f/CODUL-TĂU"` și `method="POST"` pe tagul `<form>` din `index.html`.
- **[Getform](https://getform.io)** — funcționează similar cu Formspree.
- **Netlify Forms** — dacă găzduiești site-ul pe Netlify în loc de GitHub Pages, adaugi doar atributul `data-netlify="true"` pe `<form>`.

Oricare variantă alegi, poți păstra validarea JavaScript existentă ca prim filtru înainte de trimitere.

## Compatibilitate

- Fără dependințe npm, fără build tools, fără baze de date.
- Singura resursă externă este fontul de pe Google Fonts (opțional — poți descărca fonturile local dacă vrei site 100% offline).
- Testat pentru afișare corectă pe mobil, tabletă și desktop (breakpoints la 980px și 720px în `style.css`).
- Respectă preferința `prefers-reduced-motion` pentru utilizatorii care dezactivează animațiile.

---

Realizat pentru **ISM Unique Design** · Website static, editorial, premium.

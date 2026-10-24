# Fonty portfolio

Inter i Bricolage Grotesque pochodzą z Google Fonts (24.10.2026).
Są to te same wersje i zakresy wag co poprzednio: Inter 4.001, 100–900;
Bricolage Grotesque 1.001, 200–800. Pliki WOFF2 zawierają wspólny podzbiór
znaków zamiast dwóch osobnych plików `latin` i `latin-ext` dla każdego kroju.

Łączna wielkość plików: 110 512 B. Fonty obsługuje `next/font/local` w
`src/app/layout.tsx`, z `display: swap` i automatycznym dopasowaniem fallbacku.
Licencje OFL i informacje o autorach znajdują się obok plików.

## Znaki i odtworzenie

Zapytanie Google Fonts CSS2 wykorzystuje `display=swap`, parametr `text`
z poniższymi znakami oraz `family=Inter:wght@100..900` albo
`family=Bricolage Grotesque:wght@200..800`:

- U+0020–007E i U+00A0–00FF: podstawowy alfabet łaciński, cyfry i Latin-1.
- Pełny alfabet polski: ĄąĆćĘęŁłŃńÓóŚśŹźŻż.
- U+0300–030C i U+0328: znaki diakrytyczne, także do zapisu rozłożonego.
- U+2000–206F, U+2190–2199 oraz €, − i ™: odstępy, interpunkcja i symbole.

Dokładne publiczne adresy zapytań i pobranych fontów zapisano w
`src/assets/fonts/sources.json`. Parametr `text` jest kodowany jako UTF-8.
Mechanizm podzbiorów opisuje [Google Fonts CSS API](https://developers.google.com/fonts/docs/css2#optimizing_your_font_requests).

Po dodaniu tekstu w innym alfabecie należy rozszerzyć podzbiór lub dodać
odpowiedni font. Kontrola obecnych stron sprawdza utratę używanych znaków.
Przy ponownym pobieraniu sprawdzić wersję fontu, polskie litery, łamanie tekstu,
responsywność i CLS; API może z czasem udostępnić nową wersję kroju.

Źródła licencji: [Inter](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt),
[Bricolage Grotesque](https://github.com/google/fonts/blob/main/ofl/bricolagegrotesque/OFL.txt).

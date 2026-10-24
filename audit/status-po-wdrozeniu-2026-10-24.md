# Stan po wdrożeniu ZOBO — 24.10.2026

Wykonano punkty 1, 2 i 6: zapis i scalenie zmian do `main`, przekierowanie
poprzedniej domeny oraz pomiar publicznej produkcji `https://zobo.design/`.
Dla punktów 3–5 przygotowano [krótką listę dla właściciela](co-potrzebne-od-ciebie.md).

## Git i wdrożenie

- Zmiany SEO, dostępności, fontów i podstawowego pomiaru zapisano w `fa7de79`.
- Zachowano nowszą integrację GTM/GA4 ze zgodą, obecną na `main` w `7604874`.
  Konflikty `.env.example` i `layout.tsx` rozwiązano przez połączenie obu zakresów.
- Scalenie z `main`: `0e771a3`; dokumentacja i źródła fontów: `4b3c356`.
- Gałąź `codex/seo-geo-audit` oraz `main` wysłano przez Git/SSH.
  GitHub connector nie miał dostępu do repozytorium; nie tworzono PR.
- Lokalny `main` zaktualizowano fast-forwardem. Zachowano niezwiązane zmiany
  `AGENTS.md`, `agniesz.md`, `seo-geo.md` i `tools.md`. Uzupełniono zależności;
  istniejący serwer developerski 3000 pozostał uruchomiony.
- Automatyczny produkcyjny build z Git zakończył się `READY`:
  `dpl_56hQGnKGkL6wYAjm3Qsk8nogvqZv`, źródło `4b3c356`, czas budowania 32 s.
- `npm run typecheck`, `npm run lint`, `npm run build` i `git diff --check`
  przeszły poprawnie.

Po pomiarach dodano wyłącznie dokumentację i regułę ignorowania surowych
lokalnych raportów. Wyniki poniżej dotyczą wskazanego wyżej commita aplikacji.

## Przekierowanie domeny

Na poziomie projektu Vercel ustawiono:

`agnieszka-eight.vercel.app` → **308** → `zobo.design`.

Sprawdzono stronę główną, `/case-studies/obstruo`, ilustracje z parametrem
`?ref=redirect-check` i plik CV. Wszystkie odpowiedzi zachowują pełną ścieżkę
oraz parametr URL. Nie zmieniano DNS, rekordów pocztowych ani ochrony strony.

## Wydajność publicznej produkcji

Pomiary wykonano na publicznym `zobo.design`, po zakończeniu wdrożenia z `main`.
To wyniki laboratoryjne na produkcyjnej domenie, niezależne od wcześniejszego
porównania lokalnego. Każda próba korzystała ze świeżego profilu Chrome.
Skrypty produkcyjne działały normalnie: bez blokowania usług, makietowania
odpowiedzi, zmiany CSS ani akceptowania analityki przed pomiarem.

Lighthouse 13.5.0, Chrome 156; domyślna symulacja mobile i preset desktop.
Próby: 24.10.2026, 16:10–16:11 UTC.

| Strona i urządzenie | Próby | Performance — mediana i zakres | LCP — mediana i zakres | CLS |
| --- | --- | --- | --- | --- |
| Home, mobile | 3 | 88; 87–93 | 3,52 s; 2,88–3,63 s | 0 |
| Obstruo, mobile | 3 | 89; 88–90 | 3,41 s; 3,28–3,54 s | 0 |
| Ilustracje okolicznościowe, mobile | 1 | 87 | 3,64 s | 0 |
| Home, desktop | 1 | 97 | 0,99 s | 0 |

Accessibility i SEO: 100 we wszystkich ośmiu próbach. Best Practices: 81.
Obniżenie Best Practices wskazuje trzy ostrzeżenia przestarzałych API w skrypcie
`/cdn-cgi/challenge-platform/scripts/jsd/main.js`. To skrypt JavaScript Detections
Cloudflare, zgodny z [dokumentacją dostawcy](https://developers.cloudflare.com/cloudflare-challenges/challenge-types/javascript-detections/).
Konfiguracji ochrony nie zmieniano. Sam ten wynik nie dowodzi, że skrypt jest
jedyną przyczyną mobilnego LCP.

Wniosek: stabilność układu jest dobra, natomiast mobilny LCP nadal przekracza
cel 2,5 s. Ten etap obejmował pomiar; nie wprowadzano kolejnych zmian wydajności
w oparciu o pojedynczy wynik. Nie deklarujemy poprawy względem pomiaru lokalnego,
ponieważ warunki i domena są różne.

Źródła metodologii: [zmienność Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring),
[różnice danych laboratoryjnych i terenowych](https://web.dev/articles/lab-and-field-data-differences).

## Dostępne dane rzeczywiste

API Vercel potwierdziło `Speed Insights.hasData: true`. Odczyt dla produkcji,
hosta `zobo.design`, z jednodniowego okna daje:

| Metryka | P75 | Liczba próbek |
| --- | --- | --- |
| LCP, home, desktop | 2004 ms | 3 |
| CLS, home, desktop | 0 | Osobnej liczby nie odczytywano. |
| INP, home, desktop | 8 ms | 1 |

W tym odczycie nie ma danych mobilnych ani pozostałych tras. Próba jest bardzo
mała, może zawierać nasze wizyty QA oraz wcześniejsze wdrożenia produkcyjne.
Nie jest to reprezentatywne potwierdzenie Core Web Vitals całego serwisu
ani 28-dniowy raport CrUX.

## Zachowanie analityki po scaleniu

W świeżym, osobnym profilu sprawdzono: odrzucenie → akceptacja → wycofanie zgody.
Przed zgodą i po odrzuceniu brak żądań do Google i analitycznych cookies.
Po zgodzie GTM zwrócił HTTP 200, a wysyłka GA4 HTTP 204. Po wycofaniu zgody
strona przeładowała się, skrypty Google nie zostały ponownie dołączone,
a cookies GA usunięto. Brak błędów JavaScript i przepełnienia przy 390 px.
Nie odczytywano panelu GA4 i nie aktywowano nowych zdarzeń kliknięć.

## Dowody

[Zbiorcze wyniki i metody](results/production-check-2026-10-24.json) zawierają
wszystkie osiem prób, agregaty Vercel, kontrole przekierowań i test zgody.
Surowe raporty Lighthouse i zrzuty pozostają lokalnie w `audit/evidence/`.

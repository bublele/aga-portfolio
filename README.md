# ZOBO Portfolio

Responsywne portfolio Agnieszki Zobel zbudowane w Next.js App Router i TypeScript.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Skopiuj `.env.example` do `.env.local` i ustaw docelową domenę. Wdrożenie na
Vercel automatycznie wykorzysta `VERCEL_PROJECT_PRODUCTION_URL`, ale jawna
wartość `NEXT_PUBLIC_SITE_URL` jest rekomendowana dla stabilnych canonicali.

## Useful commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Content and routes

- `/` — homepage,
- `/case-studies` i `/case-studies/[slug]` — projekty brandingowe,
- `/illustrations` i `/illustrations/[slug]` — projekty ilustracyjne,
- `/robots.txt`, `/sitemap.xml` — indeksowanie,
- dynamiczne Open Graph i favicon przez konwencje App Router.

Treści znajdują się w `src/data/case-studies.ts` oraz
`src/data/illustrations.ts`. Obrazy są importowane statycznie z
`src/assets/images`, dzięki czemu Next.js zna ich wymiary i generuje placeholdery.

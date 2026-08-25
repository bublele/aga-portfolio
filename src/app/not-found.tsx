import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="not-found page-shell" id="main-content">
      <p className="eyebrow">404 / Nie znaleziono</p>
      <h1>Ta strona<br />gdzieś zniknęła.</h1>
      <p>Adres jest nieprawidłowy albo zawartość została przeniesiona.</p>
      <Link className="primary-button" href="/">
        Wróć na homepage <span aria-hidden="true">›</span>
      </Link>
    </main>
  );
}

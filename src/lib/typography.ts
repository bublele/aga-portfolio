/** Keep Polish one-letter words with the following word without changing explicit line breaks. */
export function keepPolishWordsTogether(text: string): string {
  return text.replace(
    /(?<![a-ząćęłńóśźż0-9_])([aiouwz])[ \t]+(?=\S)/gi,
    "$1\u00a0",
  );
}

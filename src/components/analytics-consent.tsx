"use client";

import Script from "next/script";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import styles from "@/components/analytics-consent.module.css";

type Consent = "granted" | "denied" | null;

const storageKey = "zobo.analytics-consent.v1";
const changeEvent = "zobo:analytics-consent-change";
const openEvent = "zobo:analytics-preferences";
let memoryConsent: Consent = null;
let storageUnavailable = false;

function readConsent(): Consent {
  if (storageUnavailable) return memoryConsent;
  try {
    const value = window.localStorage.getItem(storageKey);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return memoryConsent;
  }
}

function saveConsent(consent: Exclude<Consent, null>) {
  memoryConsent = consent;
  try {
    window.localStorage.setItem(storageKey, consent);
  } catch {
    storageUnavailable = true;
  }
  window.dispatchEvent(new Event(changeEvent));
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) onChange();
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function clearAnalyticsCookies() {
  const domains = ["", window.location.hostname, `.${window.location.hostname}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""} SameSite=Lax`;
    }
  }
}

export function AnalyticsPreferencesButton() {
  return (
    <button
      className={styles.preferencesButton}
      id="analytics-preferences"
      onClick={() => window.dispatchEvent(new Event(openEvent))}
      type="button"
    >
      Ustawienia analityki
    </button>
  );
}

export function AnalyticsConsent({ gtmId, measurementId }: { gtmId: string; measurementId: string }) {
  const consent = useSyncExternalStore<Consent | undefined>(subscribe, readConsent, () => undefined);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const openPreferences = () => {
      setPreferencesOpen(true);
      requestAnimationFrame(() => panelRef.current?.focus());
    };
    window.addEventListener(openEvent, openPreferences);
    return () => window.removeEventListener(openEvent, openPreferences);
  }, []);

  useEffect(() => {
    if (consent === "granted") return;
    Reflect.set(window, `ga-disable-${measurementId}`, true);
    if (consent === "denied") clearAnalyticsCookies();
    // Reload after withdrawal to remove the already loaded container and its listeners.
    if (Reflect.get(window, "__zoboAnalyticsLoaded")) window.location.reload();
  }, [consent, measurementId]);

  function closePreferences() {
    setPreferencesOpen(false);
    if (preferencesOpen) document.getElementById("analytics-preferences")?.focus();
  }

  function chooseConsent(value: Exclude<Consent, null>) {
    if (value === "denied") Reflect.set(window, `ga-disable-${measurementId}`, true);
    saveConsent(value);
    closePreferences();
  }

  return (
    <>
      {consent === "granted" && (
        <Script id="zobo-google-tag-manager" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
          window.gtag('consent', 'default', {
            analytics_storage: 'denied', ad_storage: 'denied',
            ad_user_data: 'denied', ad_personalization: 'denied'
          });
          window.gtag('consent', 'update', { analytics_storage: 'granted' });
          window.gtag('set', { allow_google_signals: false, allow_ad_personalization_signals: false });
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.gtag('set', { debug_mode: true });
          }
          window[${JSON.stringify(`ga-disable-${measurementId}`)}] = false;
          window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
          var tagManager = document.createElement('script');
          tagManager.async = true;
          tagManager.src = 'https://www.googletagmanager.com/gtm.js?id=' + ${JSON.stringify(gtmId)};
          document.head.appendChild(tagManager);
          window.__zoboAnalyticsLoaded = true;
        `}</Script>
      )}
      {(consent === null || preferencesOpen) && (
        <section
          aria-label="Ustawienia analityki"
          className={styles.panel}
          ref={panelRef}
          tabIndex={-1}
        >
          <div className={styles.copy}>
            <h2>Analityka strony</h2>
            <p>
              Za Twoją zgodą korzystam z Google Analytics, aby sprawdzać popularność
              stron. Analityczne pliki cookies uruchomią się dopiero po akceptacji.
              Wybór możesz zmienić w stopce.
            </p>
            <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
              Jak Google wykorzystuje dane
            </a>
          </div>
          <div className={styles.actions}>
            <button onClick={() => chooseConsent("denied")} type="button">Odrzucam</button>
            <button onClick={() => chooseConsent("granted")} type="button">Akceptuję analitykę</button>
            {consent !== null && <button className={styles.closeButton} onClick={closePreferences} type="button">Zamknij</button>}
          </div>
        </section>
      )}
    </>
  );
}

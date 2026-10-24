const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const analyticsConfig = /^GTM-[A-Z0-9]+$/.test(gtmId) && /^G-[A-Z0-9]+$/.test(measurementId)
  ? { gtmId, measurementId }
  : null;

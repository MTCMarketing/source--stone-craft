import { business } from "../data/site";

/**
 * Where quote requests go.
 *
 * - Set GATSBY_FORM_ENDPOINT (see README) to POST JSON to a form service (Formspree, Web3Forms, a Cloudflare Worker...).
 * - With no endpoint configured the form falls back to opening a pre-filled email to the business, so it always works.
 */
const ENDPOINT = process.env.GATSBY_FORM_ENDPOINT || "";

export function pickService(name) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("rvp:service", { detail: name }));
  }
}

const labels = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  service: "Service",
  area: "City / area",
  message: "Project details",
};

export async function sendQuote(data) {
  // Honeypot: real visitors never fill this in.
  if (data.website) return { mode: "ignored" };

  const subject = `Quote request${data.service ? ` - ${data.service}` : ""} (${data.name})`;

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _subject: subject, source: "stonecraft website" }),
    });
    if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
    return { mode: "endpoint" };
  }

  const body = Object.entries(labels)
    .filter(([key]) => data[key])
    .map(([key, label]) => `${label}: ${data[key]}`)
    .join("\n");
  window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { mode: "mailto" };
}

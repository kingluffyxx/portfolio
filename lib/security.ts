/**
 * Helpers de sécurité pour les routes API publiques.
 * Aucune dépendance externe : tout est en mémoire / stdlib.
 */

/** Échappe les 5 caractères dangereux en contexte HTML et attribut. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL_RE.test(email);
}

/**
 * Limites de longueur. Un formulaire de contact légitime ne dépasse jamais ça,
 * et ça borne la taille des emails sortants.
 */
export const LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
  notes: 2000,
} as const;

export function tooLong(value: string, max: number): boolean {
  return value.length > max;
}

// ponytail: rate limit en mémoire, suffisant pour un portfolio mono-instance.
// Passer à @upstash/ratelimit si le site scale sur plusieurs lambdas.
const hits = new Map<string, number[]>();

/** Purge les clés froides pour éviter que la Map grossisse indéfiniment. */
function sweep(now: number, windowMs: number) {
  for (const [key, times] of hits) {
    if (times.every((t) => now - t > windowMs)) hits.delete(key);
  }
}

/**
 * Fenêtre glissante par clé. Retourne true si la requête doit être rejetée.
 */
export function isRateLimited(
  key: string,
  max: number,
  windowMs: number,
): boolean {
  const now = Date.now();
  if (hits.size > 500) sweep(now, windowMs);

  const times = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (times.length >= max) {
    hits.set(key, times);
    return true;
  }
  times.push(now);
  hits.set(key, times);
  return false;
}

/** IP client derrière le proxy Vercel. */
export function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

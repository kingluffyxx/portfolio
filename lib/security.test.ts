/**
 * Check minimal des helpers de sécurité.
 * Lancer : npx tsx lib/security.test.ts
 */
import assert from "node:assert/strict";
import { escapeHtml, isRateLimited, isValidEmail } from "./security";

// escapeHtml neutralise les vecteurs d'injection HTML
assert.equal(
  escapeHtml('<script>alert(1)</script>'),
  "&lt;script&gt;alert(1)&lt;/script&gt;",
);
assert.equal(
  escapeHtml('" onclick="evil()'),
  "&quot; onclick=&quot;evil()",
);
assert.equal(escapeHtml("a & b"), "a &amp; b");
// L'ampersand est échappé en premier, sinon double encodage
assert.equal(escapeHtml("<"), "&lt;");
assert.equal(escapeHtml("&lt;"), "&amp;lt;");
assert.equal(escapeHtml("normal text"), "normal text");

// isValidEmail
assert.equal(isValidEmail("xavier@example.com"), true);
assert.equal(isValidEmail("a@b.co"), true);
assert.equal(isValidEmail("pas-un-email"), false);
assert.equal(isValidEmail("a@b.c"), false); // TLD trop court
assert.equal(isValidEmail("a@b"), false);
assert.equal(isValidEmail("a b@c.com"), false);
assert.equal(isValidEmail("a@" + "x".repeat(300) + ".com"), false);

// isRateLimited : 3 passages, le 4e bloque
const key = `test:${Math.random()}`;
assert.equal(isRateLimited(key, 3, 60_000), false);
assert.equal(isRateLimited(key, 3, 60_000), false);
assert.equal(isRateLimited(key, 3, 60_000), false);
assert.equal(isRateLimited(key, 3, 60_000), true, "le 4e doit etre bloque");

// Clés indépendantes
assert.equal(isRateLimited(`other:${Math.random()}`, 3, 60_000), false);

// Fenêtre expirée : window de 0 ms laisse repasser
const k2 = `win:${Math.random()}`;
assert.equal(isRateLimited(k2, 1, 0), false);
assert.equal(isRateLimited(k2, 1, 0), false, "fenetre expiree doit reautoriser");

console.log("OK - tous les checks security passent");

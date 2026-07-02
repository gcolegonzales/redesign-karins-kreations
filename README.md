# Karin's Kreations — website redesign concept

A polished, single-page website concept for **Karin's Kreations LLC**, a family
florist in Gonzales, Louisiana (weddings, sympathy, everyday and occasion florals,
plants and gift baskets).

This is an **unsolicited design proposal** — a "this could be your site right now"
pitch piece, not an official site of the business.

## Why a redesign

Today the business is reachable only through Facebook and third-party florist
directories — there's **no real website**. That means:

- No home on the web the shop actually controls.
- Customers can't browse collections, see honest starting prices, or check hours
  in one clean place.
- No direct way to request a custom arrangement — inquiries scatter across
  Facebook messages and phone calls.

This concept fixes that with a fast, mobile-first, accessible site that:

- Presents the real work in four clear collections — **Weddings, Sympathy,
  Everyday, Proms & Occasions** — as editorial sections, not thin cards.
- Shows honest starting prices in a clean table.
- Adds a real **"Request an arrangement"** inquiry form (occasion, date, budget,
  delivery/pickup, details) plus prominent click-to-call — no fake checkout.
- Leads with a distinct botanical-editorial look: sage/blush/cream + deep green,
  a refined serif, tasteful motion, and an animated sticky nav.

## How to view

Just open **`index.html`** in any browser (double-click it). No build step, no
dependencies, no server required.

## SEO / deploy note

On-page SEO is wired in: a unique `<title>` + meta description, one `<h1>`,
JSON-LD structured data (`@type: Florist` with the real name, phone, address,
opening hours, price range, area served and Facebook link), complete Open Graph
and Twitter Card tags, a `<link rel="canonical">`, plus `robots.txt` and
`sitemap.xml` at the repo root.

The canonical URL, `og:url`, sitemap `<loc>`, robots `Sitemap:` line, and the
schema `url`/`image` all use the literal placeholder
**`https://REPLACE-WITH-DOMAIN.com/`**. Before deploying, do a single
find-and-replace of that placeholder with the real domain across `index.html`,
`robots.txt` and `sitemap.xml`.

## Real photos

Karin's real photography lives on their token-blocked Facebook page and can't be
downloaded automatically, so the site currently shows tasteful on-brand
placeholders. Drop owner-approved JPGs into `assets/photos/` (see
`assets/photos/DROP-PHOTOS-HERE.md` for exact filenames) and the site swaps them
in automatically — no code changes needed.

## Business details used (verified from public directories)

- **Address:** 43053 Weber City Rd, Gonzales, LA 70737
- **Phone:** (225) 403-1099
- **Hours:** Mon–Fri 9–6, Sat 9–2, Sun closed
- **Delivery:** Ascension Parish
- **Starting prices:** dozen roses $55 · fresh arrangements $25 · sympathy $50 ·
  plants $30 · gift baskets $25

## Files

```
index.html      · markup + content
styles.css      · botanical-editorial design system
script.js       · nav, scroll reveals, form, photo auto-swap
assets/photos/  · drop real photos here (placeholders until then)
```

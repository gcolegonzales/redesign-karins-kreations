# Drop real photos here

Karin's Kreations' real photography lives on their **Facebook page**
(facebook.com/KarinsKreationsLlc), which is token-blocked — those images
cannot be downloaded programmatically. Until real files are dropped in, the
site renders tasteful on-brand placeholder panels (marked `<!-- IMG-NEEDED -->`
in `index.html`).

## How to swap in real photos

Save owner-provided / owner-approved JPGs into this folder using these exact
filenames, and the site will use them automatically (the CSS references them):

| Filename                | Where it appears                          | Ideal shot |
|-------------------------|-------------------------------------------|------------|
| `hero.jpg`              | Hero panel (right column)                 | A signature fresh arrangement, bright & airy |
| `weddings.jpg`          | Weddings category                         | A bridal bouquet or reception centerpiece |
| `sympathy.jpg`          | Sympathy category                         | A standing spray or sympathy arrangement |
| `everyday.jpg`          | Everyday category                         | A cheerful hand-tied everyday bouquet |
| `occasions.jpg`         | Occasions category                        | A prom corsage or celebration piece |
| `studio.jpg`            | "Our Studio" editorial band               | The shop / greenhouse / Karin at work |
| `gallery-1.jpg` … `gallery-4.jpg` | Gallery strip                   | Any four strong arrangement photos |

- Recommended: landscape, at least 1200px wide, well-lit.
- Keep filenames lowercase and exact.
- No cropping needed — CSS uses `object-fit: cover`.

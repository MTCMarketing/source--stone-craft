# StoneCraft (Mockup III)

New website for **StoneCraft** (Iconic Concrete), a Maine maker of concrete countertops, polished floors, sinks, fireplaces and bar tops, 10 Dunnell Rd, Buxton, ME. Built with **Gatsby 5 + React 18**. White background with a dark moss green (`#3f4f22`), Montserrat headings and Inter text.

```bash
npm install
npm run develop   # http://localhost:8000
npm run build     # production build into /public
npm run serve     # preview the build on http://localhost:9000
```

After a CSS-only change run `npx gatsby clean` before building (Gatsby can reuse cached HTML that points at the old stylesheet).

## Pages

- `/` home: hero, datasheet strip, services (polished floors, countertops incl. vanities, restaurants & bars, and a mosaic of the other things StoneCraft makes), our work (gallery, project-notes carousel, colour-swatch marquee), reviews, why concrete, green room, press, about, contact
- `/reviews/` every review (Google + "Our admirers"), with the long floors story
- `/in-the-press/` the press article (with a pull quote) and the two Maine HOME+DESIGN features

## Where things live

| What | Where |
| --- | --- |
| All copy, reviews, projects, facts | `src/data/site.js` (press article: `src/data/press.json`) |
| Sections / pages | `src/components/`, `src/pages/` |
| Colors, type, layout | `src/styles/global.css` (tokens at the top) |
| Images, fonts, icons | `static/` |

## Content notes (please check before launch)

- **Reused from the current site** (stonecraftonline.com): address, phone, email, the logo, the project photos (gallery), project notes, concrete facts, green room, admirers, the press article and magazine covers. The old site dates from 2017: the green-room claims (bio-diesel trucks, local cement plant), "Scott and Kevin" and the 2009 press figures should be confirmed with the owner.
- **Reviews**: the Google reviews supplied by Nate, wording unchanged (typographic tidying only). **Left out on purpose:** one 5-year-old negative review (Matt Turner) and two reviews with no text. Say if any should be shown. Star ratings and totals were not supplied, so none are claimed.
- **Photos**: the Google photo gallery Nate linked cannot be downloaded automatically (it is a search page), so the gallery uses the project photos from the old site (they are small, up to ~600 px). Send larger originals to improve it. The hero and the three service pictures are Freepik stock (IDs `298369589`, `260203612`, `337123574`, `316261049`, `52468875`, `343248722`) and are illustrations, not StoneCraft's work. Check the licence/attribution terms of the plan that issued the API key.
- **About photo**: this is the press photo from the old site (Scott Chasse with a customer), which was only 300 px wide. It was enlarged to 1200 x 800 with Freepik's "precision" AI upscaler and given a light tone and grain pass. No other person or stock photo was added. AI enlargement invents fine detail, so please have the client approve it, or send the original photo.
- **Colour swatches** ("Colors we have poured") are approximate on-screen shades matched to the colour names on the old site. The page says so; ask the client for real samples if exact colours matter.
- **Press article** is reproduced from the old site's "In the press" page (the newspaper is not named there). Confirm reprint permission or switch to an excerpt with a link.
- **Logo**: the client's own logo from the old site, with its pale-green background removed so it sits cleanly on white (`static/images/logo-clean.webp`). The original is only 338 px wide: send a vector or larger file if one exists.
- **Name**: shown as "StoneCraft" (the old site also uses "Stone Craft"; reviews say "Stonecraft Inc").
- **Domain**: assumed `stonecraftonline.com` (in `src/data/site.js`, `gatsby-config.js`, `static/robots.txt`, `static/sitemap.xml`).
- **Quote form** opens a pre-filled email to info@stonecraftonline.com. Set `GATSBY_FORM_ENDPOINT` in `.env.production` to post to a form service instead.

## Client mockup viewer

`index.html` + `shots/` at the root is the Desktop / Mobile image viewer (same as the other mockups). It sends one silent visit ping with site id `stonecraft` to `https://logs.mockup.wiki/visitors/visit`: turn on the visitor watch with that exact tag and blacklist your own IPs. For GitHub Pages the repo must be public.

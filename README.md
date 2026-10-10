# sundorf.me

Personal website of Lucy Sundorf — statically generated with Angular, styled with Tailwind CSS v4.
No trackers, no web fonts, no JavaScript frameworks beyond Angular (zoneless), system font stack.
Built to load fast on low-end devices.

## Pages

| Route       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Home — about, stack, contact, AbuseIPDB contributor badge       |
| `/projects` | Showcase of GitHub projects (ssh-honeypot featured)             |
| `/secret`   | Hidden placeholder page, not linked anywhere — edit at will     |
| everything else | Prerendered `404.html`, served automatically by Cloudflare  |

The secret page lives in `src/app/pages/secret.ts`. It is prerendered like every other page but has
a `noindex` robots meta, and it is deliberately absent from the navigation.

Project showcase content is data-driven: edit `src/app/projects.data.ts`.

## Development

```bash
npm install
npm start          # dev server on http://localhost:4200
```

## Build

```bash
npm run build      # static output in dist/sundorf-me/browser
```

Every route is prerendered to plain HTML at build time (`outputMode: "static"` in `angular.json`).
There is no server runtime — the output is a plain folder of files.

## Deploying to Cloudflare Pages

### Option A: git-connected Pages (classic)

1. Push this repo to GitHub.
2. In Cloudflare: **Workers & Pages > Create > Pages > Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: **Angular**
   - Build command: `npm run build`
   - Build output directory: `dist/sundorf-me/browser`
4. Deploy. Add the custom domain `sundorf.me` (and `www.sundorf.me`) under the Pages project's
   **Custom domains**.

### Option B: Workers with static assets

```bash
npm run build
npx wrangler deploy
```

Uses `wrangler.jsonc`, which sets `assets.not_found_handling = "404-page"` so unmatched URLs serve
the prerendered `404.html` with a proper 404 status.

### Notes

`public/_headers` is deployed automatically and sets security headers plus long-lived caching for
hashed JS/CSS assets. `public/_redirects` is empty by default — the prerendered `404.html` covers
unknown URLs, so no SPA fallback is needed.

## Notes

- The AbuseIPDB badge lives on the home page (`src/app/pages/home.html`), contributor id 66953.
- Contact email on the home page is `lucy@sundorf.me` — adjust if you use a different address or a
  Cloudflare-routed alias.

# perfratio website

Website for **perfratio**, part of [BenchCommons](https://github.com/BenchCommons). An original editorial identity: ink-plum surfaces, amber and coral measurement accents, expressive serif headlines and an instrument-style comparison board.

## Develop

Node.js 22.13+ is required.

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run build
npm run lint
```

Routes: `/` (English), `/pt/` (Brazilian Portuguese), `/docs/` (English getting-started guide). Examples are interactive; commands can be copied. The terminal preview is explicitly illustrative.

## Repository links

The project lives at `BenchCommons/perfratio` (v1.0.0 is published) and this site at `BenchCommons/website-perfratio`. Change `repository` in `app/config.ts` to update source installation, release, issue and reference links together.

## Hosting

Production: https://perfratio.better-web.org

Built with React and vinext on Cloudflare Workers. `wrangler.json` selects the OpenDigital account and binds `perfratio.better-web.org` as a Custom Domain. Cloudflare provisions DNS and HTTPS. Publish with an authenticated Wrangler session:

```sh
npm run deploy
```

Deploy uses the generated `dist/server/wrangler.json` so the compiled Worker and client assets stay aligned. The Sites Vite plugin and `.openai/hosting.json` remain available for the separate Sites preview. No database, authentication or analytics are used by the website.

## Content sources

Content and commands reflect the source README, Cargo.toml and CLI at release [v1.0.0](https://github.com/BenchCommons/perfratio/releases/tag/v1.0.0) of `BenchCommons/perfratio` at commit `38d56c87a2c191ac4015887d4b84adb922840549`. The tag object is annotated and unsigned (GitHub reports `unsigned`); the commit is GitHub-verified. Source install and documentation links use `--tag v1.0.0` and `blob/v1.0.0/`, never `master`. Replace `releaseTag` in `app/config.ts` and this reference when updating the content. Energy measurement depends on supported accessible hardware sensors. No performance claims are inferred from the illustrative terminal.

# Karamix Labs Official Website

Production-ready static website for Karamix Labs, a premium digital company focused on mobile application interfaces, responsive web platforms, business dashboards, and practical digital systems.

Public company channel: https://t.me/karamixlabs

## Stack

- HTML
- CSS
- JavaScript
- Static assets
- No framework, build step, or package manager

## Brand Infrastructure

- Professional SEO metadata
- Open Graph and Twitter social preview
- JSON-LD Organization and WebSite schema
- Full favicon and web app icon package
- Scalable SVG logo system
- English and Arabic language switching with RTL support
- `robots.txt` and `sitemap.xml` for indexing

## Local Usage

Open `index.html` directly in a browser.

## Deployment

- GitHub Pages compatible
- Cloudflare compatible
- Domain: `https://karamixlabs.com`
- Canonical URL: `https://karamixlabs.com/`
- Permanent redirects: `http://karamixlabs.com/*`, `http://www.karamixlabs.com/*`, and `https://www.karamixlabs.com/*` must resolve with one 301 hop to `https://karamixlabs.com/*`

## Redirects and Indexing

The repository includes `_redirects` rules for Cloudflare Pages compatible hosting. If this site is served directly by GitHub Pages behind a custom domain, configure the same behavior at the DNS/CDN layer:

- Always Use HTTPS enabled
- `www.karamixlabs.com/*` 301 redirected to `https://karamixlabs.com/*`
- `http://karamixlabs.com/*` 301 redirected to `https://karamixlabs.com/*`
- Google Search Console property and sitemap submission should use only `https://karamixlabs.com/`

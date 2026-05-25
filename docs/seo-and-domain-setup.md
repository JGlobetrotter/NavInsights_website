# Domain & SEO Setup Guide

## 1. Connect navisignalinsights.com to GitHub Pages

### At your domain registrar (GoDaddy, Namecheap, etc.)

Add these DNS records:

| Type  | Host/Name | Value                   |
|-------|-----------|-------------------------|
| A     | @         | 185.199.108.153         |
| A     | @         | 185.199.109.153         |
| A     | @         | 185.199.110.153         |
| A     | @         | 185.199.111.153         |
| CNAME | www       | jglobetrotter.github.io |

`@` = the root domain (navisignalinsights.com).
The CNAME for `www` means www.navisignalinsights.com will also work.

### In GitHub

1. Go to your repo → **Settings** → **Pages**
2. Under **Custom domain**, type `navisignalinsights.com` and click Save
3. Wait for DNS to propagate (minutes to 24h)
4. Tick **Enforce HTTPS** once it appears

The `CNAME` file in the repo root keeps this setting from resetting on each deploy.

---

## 2. What SEO is Already Done (in the code)

All 7 main pages now have:

- **Canonical URL** — tells Google the authoritative address of each page
- **Open Graph tags** — controls how the page looks when shared on LinkedIn/Facebook
- **Twitter Card tags** — controls how the page looks when shared on Twitter/X
- **JSON-LD structured data** (homepage only) — tells Google this is a professional service

`robots.txt` and `sitemap.xml` are at the repo root — Google uses these to discover and crawl the site.

---

## 3. After the Domain Goes Live — Final Steps

1. **Submit to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property → URL prefix → `https://navisignalinsights.com`
   - Verify ownership (easiest: HTML tag method — paste a meta tag into index.html `<head>`)
   - Submit sitemap: `https://navisignalinsights.com/sitemap.xml`

2. **Test Open Graph tags**
   - LinkedIn: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
   - Facebook: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
   - Paste your URL and confirm the title, description, and image appear correctly

3. **Check Google can index the site**
   - In Search Console → URL Inspection → paste `https://navisignalinsights.com`
   - Click "Request Indexing" for the homepage

---

## 4. Ongoing SEO Tips for GitHub Pages

- **Keep page titles and descriptions unique** — each page already has distinct ones
- **Add alt text to all images** — search engines read alt text
- **Update `sitemap.xml` lastmod dates** when you make significant content changes
- **Add Google Analytics** (optional) — paste the GA4 script into each page `<head>` for traffic data
- **Build backlinks** — share pages on LinkedIn, list the site in directories
- GitHub Pages is fast and serves HTTPS — both are positive ranking signals

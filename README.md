# Arkvon Group Website

A Next.js site for Arkvon Group with a homepage, About page, Contact page,
and an auto-generated page for every subsidiary company.

## 1. Install dependencies

```
npm install
```

## 2. Run locally

```
npm run dev
```

Open http://localhost:3000

## 3. Edit your content

- `data/companies.js` — add/edit/remove subsidiary companies here. Each one
  automatically gets its own page at `/companies/your-slug`.
- `app/about/page.js` — edit the About Arkvon Group text.
- `app/contact/page.js` — edit contact details.
- `app/page.js` — edit the homepage hero text.

## 4. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com → Add New Project → import the repo.
3. Click Deploy (no configuration needed, Vercel auto-detects Next.js).
4. In the Vercel project → Settings → Domains, add `arkvongroup.com`.
5. Add the DNS records Vercel gives you into your domain's DNS Management
   panel at your registrar.

## Design notes

- Fonts: Fraunces (display) + Public Sans (body), loaded via next/font/google
  — these load automatically at build time, no local font files needed.
- Colors: ink navy (#0F1B2D), paper (#F7F5F0), bronze accent (#B08D57).
- The homepage diagram (`components/GroupDiagram.js`) automatically draws a
  line from "Arkvon Group" to every company in `data/companies.js` — add a
  company there and it appears in the diagram automatically.

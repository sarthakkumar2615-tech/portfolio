# Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion. All content lives in `data/portfolio.ts`.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run typecheck && npm run build
```

## Contact form
`components/Contact.tsx` posts to `NEXT_PUBLIC_FORM_ENDPOINT`. With no endpoint it opens the visitor's mail app (mailto) instead.
- **Formspree (easiest):** create a form at formspree.io, copy `https://formspree.io/f/XXXX` into `.env.local` (and Vercel env vars).
- **Resend:** add `app/api/contact/route.ts` that calls `resend.emails.send(...)` with `RESEND_API_KEY` (server-only env var), then set `NEXT_PUBLIC_FORM_ENDPOINT=/api/contact`. Respond with JSON and a 200 status.
- **EmailJS:** `npm i @emailjs/browser`, call `emailjs.sendForm(serviceId, templateId, form, publicKey)` in `onSubmit` instead of `fetch`.

## Publish to GitHub
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
# create an empty repo on github.com/new (no README), then:
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Deploy on Vercel
1. Sign in at vercel.com with GitHub, click **Add New → Project**, import the repo.
2. Framework is auto-detected (Next.js). Add env vars `NEXT_PUBLIC_FORM_ENDPOINT` and `NEXT_PUBLIC_SITE_URL` (your final URL).
3. Click **Deploy**. Every push to `main` redeploys. Add a custom domain under **Settings → Domains**.

## Add it to LinkedIn
- **Featured:** Profile → **Add profile section → Recommended → Add featured** → **+ → Add a link** → paste your Vercel URL, add a title and description.
- **Projects:** Profile → **Add profile section → Additional → Add projects**: name, dates, description, and paste the site URL in **Project URL**; also add it under **Contact info → Website**.

## Personalise checklist
- [ ] `name`, `role`, `tagline`, `location`
- [ ] `about` text and `photo` (add `public/images/me.webp`, set `photo.src` and `alt`)
- [ ] `socials` links
- [ ] `projects` (titles, descriptions, links, screenshots in `public/images`, with alt text)
- [ ] `experience` and `skills`
- [ ] `resumeUrl` (add `public/resume.pdf`)
- [ ] `email` and the form endpoint
- [ ] `NEXT_PUBLIC_SITE_URL` after first deploy

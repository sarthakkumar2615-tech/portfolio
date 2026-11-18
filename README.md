# Sarthak Chunera | Software Developer Portfolio

A responsive personal portfolio website showcasing my projects, skills, and experience as a Frontend and Full-Stack Developer.

**Live site:** <!-- EDIT: paste your Vercel URL --> "pending live site at vercel"
**LinkedIn:** https://www.linkedin.com/in/sarthakchunera
**GitHub:** https://github.com/sarthakkumar2615-tech

<!-- OPTIONAL: add a screenshot. Save an image as public/images/preview.webp, then uncomment the line below. -->
<!-- ![Portfolio preview](public/images/preview.webp) -->

## Features

- Responsive layout for mobile, tablet, and desktop
- Dark and light theme with a saved preference
- Sections for hero, projects, about, skills, experience, and contact
- Project gallery with screenshots and links to the source code
- Active navigation highlighting and smooth scrolling
- Accessible markup: semantic HTML, keyboard navigation, visible focus states, and descriptive image alt text
- Contact form that works with Formspree, or falls back to the visitor's email app
- Subtle animations that respect the visitor's reduced-motion setting
- All content is editable in one file (`data/portfolio.ts`)

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Hosting | Vercel |

## Featured Projects

- **Architecture & Construction Portfolio** | Next.js studio website with project filtering, admin panel, and enquiry form. [Source code](https://github.com/sarthakkumar2615-tech/architecture-construction-portfolio)
- **Rentaro** | Role-based rental platform with Host, Admin, and Guest workflows, built with React and Supabase. [Source code](https://github.com/sarthakkumar2615-tech/rentaro)

## Getting Started

### Prerequisites

- Node.js 18.17 or newer
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/sarthakkumar2615-tech/portfolio.git
cd portfolio
npm install
cp .env.example .env.local     # on Windows (cmd): copy .env.example .env.local
npm run dev
```

Open http://localhost:3000 in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |

## Project Structure

```
.
├── app/                 # Layout, page, and global styles
├── components/          # Navbar, Hero, Projects, About, Skills, Experience, Contact, Footer
├── data/portfolio.ts    # All editable content
├── hooks/               # Active-section hook for navigation
└── public/              # Images and résumé PDF
```

## Customization

All text, links, and images are edited in `data/portfolio.ts`:

- **Personal details:** name, role, tagline, location, email
- **Photo:** save an image in `public/images/` and set `photo.src` (for example `/images/me.jpeg`)
- **Projects:** title, description, tags, screenshots, GitHub link, and an optional live demo link
- **Skills and experience:** edit the lists
- **Résumé:** replace `public/resume.pdf`

## Contact Form

Set your form endpoint in `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint URL.
2. Paste it into `NEXT_PUBLIC_FORM_ENDPOINT`.
3. Add the same variables in Vercel under **Settings, then Environment Variables**, and redeploy.

Without an endpoint, the form opens the visitor's email app addressed to the email in `data/portfolio.ts`.

## Deployment

1. Push this repository to GitHub.
2. Sign in at [vercel.com](https://vercel.com) with GitHub.
3. Choose **Add New, then Project**, and import this repository.
4. Add the environment variables above, then click **Deploy**.

Every push to the `main` branch redeploys the site automatically.

## Contact

- Email: sarthak.kumar2615@gmail.com
- LinkedIn: https://www.linkedin.com/in/sarthakchunera
- GitHub: https://github.com/sarthakkumar2615-tech
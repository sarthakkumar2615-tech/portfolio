// Single source of truth: edit this file to personalise the site.
export const portfolio = {
  name: "Sarthak Chunera",
  role: "Frontend & Full-Stack Developer",
  tagline: "I build responsive web apps with React, Next.js, and Tailwind CSS.",
  location: "Ramnagar, Uttarakhand, India",
  email: "sarthak.kumar2615@gmail.com",
  resumeUrl: "/sarthak-chunera-resume.pdf", // e.g. /files/resume.pdf
  photo: { src: "", alt: "Portrait of Sarthak Chunera" }, // e.g. /images/me.webp (leave src empty for initials)
  nav: [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Let’s talk" },
  ],
  stats: [
    { value: "2", label: "full-stack projects built" },
    { value: "2", label: "internships completed" },
    { value: "2025", label: "B.Tech CSE graduate" },
  ],
  about: {
    heading: "Clean interfaces. Working software. Reliable support.",
    paragraphs: [
      "I’m a B.Tech Computer Science graduate (VMSBTU, 2025) who builds web applications with JavaScript, React.js, Next.js, and Tailwind CSS, backed by REST APIs and MySQL.",
      "After MERN stack training and a Python internship, I worked as an Associate Engineer at Tata Communications, handling L1/L2 network incidents and coordinating with teams to restore service within SLA.",
      "I was also elected house president at school, where I organized events, mentored juniors, and worked with faculty on inter-house competitions.",
    ],
  },
  skills: [
    { title: "Frontend", blurb: "Responsive, accessible interfaces.", items: ["HTML5", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
    { title: "Backend & data", blurb: "Connecting the UI to real data.", items: ["REST API integration", "MySQL", "Authentication", "Role-based access"] },
    { title: "Tools & support", blurb: "Shipping and keeping things running.", items: ["Git", "GitHub", "VS Code", "ServiceNow", "Incident management"] },
  ],
  projects: [
    {
      title: "Architecture & Construction Portfolio",
      category: "Next.js · Atelier Meridian studio website",
      description: "A responsive portfolio platform for an architecture and construction studio, with project filtering, detailed walkthroughs, admin authentication, project management, and a client enquiry form. Checked with ESLint and production Next.js builds.",
      href: "https://github.com/sarthakkumar2615-tech/architecture-construction-portfolio",
      live: "", // add your deployed URL here (e.g. https://your-project.vercel.app)
      images: [
        { src: "/images/projects/atelier-hero.webp", alt: "Atelier Meridian home page with a full-screen hero image of a courtyard building and the headline We design and build the whole" },
        { src: "/images/projects/atelier-projects.webp", alt: "Projects page with category filters and residential project cards" },
        { src: "/images/projects/atelier-admin.webp", alt: "Admin panel for publishing and deleting projects" },
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    },
    {
      title: "Rentaro",
      category: "React · Supabase · Full-stack room management",
      description: "A role-based rental platform with Host, Admin, and Guest workflows. Hosts submit listings, admins review and approve them, and only verified rooms reach the guest-facing site. Includes authentication and protected routes.",
      href: "https://github.com/sarthakkumar2615-tech/rentaro",
      live: "", // add your deployed URL here
      images: [
        { src: "/images/projects/rentaro-home.webp", alt: "Rentaro home page with a location search bar and destination shortcuts for Uttarakhand hill stations" },
        { src: "/images/projects/rentaro-host-login.webp", alt: "Rentaro host sign-in form" },
        { src: "/images/projects/rentaro-admin-login.webp", alt: "Rentaro admin portal sign-in form" },
      ],
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    },
  ],
  experience: [
    { period: "Feb 2026 – May 2026", title: "Associate Engineer", org: "Tata Communications Ltd. (via Lobo Staffing Solutions, Pune)", description: "Monitored network infrastructure, resolved L1/L2 routing, switching, and connectivity incidents in a global support center, and coordinated with teams to restore service within SLA." },
    { period: "Aug 2025 – Jan 2026", title: "MERN Stack Training / Internship", org: "Certificate program", description: "Built full-stack applications with the MERN stack and earned an internship certificate." },
    { period: "Jun 2023 – Aug 2023", title: "Python Development Internship", org: "Certificate program", description: "Completed a Python development internship and earned a certificate." },
    { period: "2021 – 2025", title: "B.Tech, Computer Science", org: "VMSBTU, Uttarakhand", description: "Graduated with a 7.2 CGPA." },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sarthakchunera" },
    { label: "GitHub", href: "https://github.com/sarthakkumar2615-tech" },
  ],
};
export type Portfolio = typeof portfolio;

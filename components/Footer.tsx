import { portfolio as p } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">© {new Date().getFullYear()} {p.name}. {p.location}.</p>
        <ul className="flex flex-wrap gap-5 text-sm">
          {p.socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{s.label}<span className="sr-only"> (opens in a new tab)</span></a></li>
          ))}
          <li><a href="#top" className="underline-offset-4 hover:underline">Back to top</a></li>
        </ul>
      </div>
    </footer>
  );
}

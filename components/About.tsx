import Image from "next/image";
import { portfolio as p } from "@/data/portfolio";

export function About() {
  const initials = p.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-line">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
          {p.photo.src ? (
            <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width:768px) 30vw, 80vw" className="object-cover" />
          ) : (
            <div role="img" aria-label={`${p.photo.alt} (placeholder)`} className="flex h-full items-center justify-center font-display text-8xl text-muted">{initials}</div>
          )}
        </div>
        <div>
          <h2 id="about-title" className="font-display text-4xl sm:text-5xl">{p.about.heading}</h2>
          <div className="mt-6 space-y-4 text-lg text-muted">{p.about.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
          <a href={p.resumeUrl} className="btn mt-8" download>Download résumé (PDF)</a>
        </div>
      </div>
    </section>
  );
}

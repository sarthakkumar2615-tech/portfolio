import { portfolio as p } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-t border-line">
      <div className="container-x">
        <h2 id="skills-title" className="font-display text-4xl sm:text-6xl">What I work with.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {p.skills.map((s) => (
            <article key={s.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted">{s.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((i) => <li key={i} className="rounded-full border border-line px-3 py-1 text-sm">{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { portfolio as p } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="section border-t border-line">
      <div className="container-x">
        <h2 id="exp-title" className="font-display text-4xl sm:text-6xl">Where I’ve worked and learned.</h2>
        <ol className="mt-12 border-l border-line">
          {p.experience.map((e) => (
            <li key={e.period + e.title} className="relative grid gap-2 py-6 pl-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <span aria-hidden className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-sm text-muted">{e.period}</p>
              <div>
                <h3 className="font-display text-2xl">{e.title}, <span className="text-muted">{e.org}</span></h3>
                <p className="mt-2 max-w-xl text-muted">{e.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

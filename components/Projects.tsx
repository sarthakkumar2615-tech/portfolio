import { portfolio as p } from "@/data/portfolio";
import { ProjectGallery } from "./ProjectGallery";

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="section border-t border-line">
      <div className="container-x">
        <h2 id="work-title" className="max-w-3xl font-display text-4xl sm:text-6xl">Selected projects.</h2>
        <ul className="mt-14 space-y-16">
          {p.projects.map((pr) => (
            <li key={pr.title}>
              <article className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
                <ProjectGallery images={pr.images} title={pr.title} />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-accent">{pr.category}</p>
                  <h3 className="mt-2 font-display text-3xl sm:text-4xl">{pr.title}</h3>
                  <p className="mt-3 text-muted">{pr.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {pr.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={pr.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub<span className="sr-only"> ({pr.title}, opens in a new tab)</span></a>
                    {pr.live && <a href={pr.live} target="_blank" rel="noopener noreferrer" className="btn">Live demo<span className="sr-only"> ({pr.title}, opens in a new tab)</span></a>}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

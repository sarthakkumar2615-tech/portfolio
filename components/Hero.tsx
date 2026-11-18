"use client";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio as p } from "@/data/portfolio";

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_30%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent)]" />
      <div className="container-x">
        <motion.p {...item(0)} className="mb-6 text-sm text-muted">{p.role} · Based in {p.location}</motion.p>
        <motion.h1 {...item(1)} id="hero-title" className="font-display text-[clamp(3.5rem,13vw,10rem)] leading-[0.9] tracking-tight">{p.name}</motion.h1>
        <motion.p {...item(2)} className="mt-8 max-w-xl text-lg text-muted sm:text-xl">{p.tagline}</motion.p>
        <motion.div {...item(3)} className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">Explore my work</a>
          <a href="#contact" className="btn">Start a conversation</a>
        </motion.div>
        <motion.dl {...item(4)} className="mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
          {p.stats.map((s) => (
            <div key={s.label}><dt className="sr-only">{s.label}</dt><dd className="font-display text-4xl">{s.value}</dd><dd className="mt-1 text-sm text-muted">{s.label}</dd></div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

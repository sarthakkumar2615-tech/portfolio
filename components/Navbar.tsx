"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const ids = portfolio.nav.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const link = (id: string) =>
    `block rounded-full px-3 py-1.5 text-sm transition-colors ${active === id ? "bg-fg text-bg" : "text-muted hover:text-fg"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl">{portfolio.name}</a>
        <ul className="hidden items-center gap-1 md:flex">
          {portfolio.nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined} className={link(n.id)}>{n.label}</a></li>
          ))}
          <li className="ml-2"><ThemeToggle /></li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)} className="rounded-full border border-line px-4 py-1.5 text-sm">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="container-x overflow-hidden md:hidden">
            {portfolio.nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className={`${link(n.id)} my-1 text-base`}>{n.label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

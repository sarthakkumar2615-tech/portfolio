"use client";
import { FormEvent, useState } from "react";
import { portfolio as p } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent" | "error";
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const field = "mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot
    if (!endpoint) { // fallback: open the visitor's mail client
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${p.email}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-line">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <h2 id="contact-title" className="font-display text-4xl sm:text-6xl">Let’s build something together.</h2>
          <p className="mt-6 max-w-md text-lg text-muted">I’m open to frontend and full-stack roles, freelance work, and collaborations. Send me a message and I’ll reply soon.</p>
          <a href={`mailto:${p.email}`} className="mt-6 inline-block underline underline-offset-4">{p.email}</a>
        </div>
        <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
          <div><label htmlFor="name" className="text-sm font-medium">Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
          <div><label htmlFor="email" className="text-sm font-medium">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
          <div><label htmlFor="message" className="text-sm font-medium">Message</label><textarea id="message" name="message" required rows={5} className={field} /></div>
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
          <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">{status === "sending" ? "Sending…" : "Send message"}</button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === "sent" && "Message sent. I’ll reply soon."}
            {status === "error" && `Couldn’t send your message. Try again or email ${p.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}

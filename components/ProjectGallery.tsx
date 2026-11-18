"use client";
import Image from "next/image";
import { useState } from "react";

type Img = { src: string; alt: string };

export function ProjectGallery({ images, title }: { images: Img[]; title: string }) {
  const [i, setI] = useState(0);
  if (!images.length) {
    return <div role="img" aria-label={`${title} (placeholder)`} className="flex aspect-[16/10] items-center justify-center rounded-xl border border-line bg-surface font-display text-4xl text-muted">{title}</div>;
  }
  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
        <Image key={images[i].src} src={images[i].src} alt={images[i].alt} fill sizes="(min-width:1024px) 560px, (min-width:640px) 50vw, 100vw" className="object-cover object-top" />
      </div>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-3 gap-3" aria-label={`${title} screenshots`}>
          {images.map((img, n) => (
            <li key={img.src}>
              <button type="button" onClick={() => setI(n)} aria-pressed={i === n} aria-label={`Show screenshot ${n + 1} of ${images.length}`} className={`relative block aspect-[16/10] w-full overflow-hidden rounded-lg border transition-colors ${i === n ? "border-accent" : "border-line opacity-70 hover:opacity-100"}`}>
                <Image src={img.src} alt="" fill sizes="180px" className="object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

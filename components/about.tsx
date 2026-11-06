"use client";

import { about, site } from "@/content/site";
import { HighlightGrid } from "@/components/ui/highlight-grid";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Corners, Reveal, SectionHead } from "./reveal";

const skillRows = [about.skills.slice(0, 3), about.skills.slice(3, 6), about.skills.slice(6, 8), about.skills.slice(8)].map(
  (row) => row.map((label) => ({ label })),
);

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative border-y border-line bg-surface/30 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <SectionHead id="about-title" eyebrow={about.eyebrow} titleTop={about.title} />
          {about.bio.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg font-medium text-gold/90">{about.nameNote}</p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-10 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Toolkit</p>
            <ul className="sr-only">
              {about.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div aria-hidden>
              <HighlightGrid
                className="mt-4"
                rows={skillRows}
                colors={["#f5c842", "#f9dc85", "#e0b232"]}
                transitionDuration={300}
              />
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <ol className="relative mt-12">
              <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-linear-to-b from-gold via-gold/40 to-transparent" />
              {about.timeline.map((t) => (
                <li key={t.year} className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute top-[3px] left-0 size-[11px] rounded-full ${t.current ? "pulse-dot bg-mint" : "bg-gold"}`}
                  />
                  <p className="font-mono text-[11px] leading-4 tracking-[0.16em] text-muted-foreground uppercase">{t.year}</p>
                  <p className="mt-1.5 font-medium">{t.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.2} className="lg:sticky lg:top-28">
            <aside className="card relative p-7 sm:p-8">
              <Corners className="border-gold/45" />
              <div className="flex items-center gap-5">
                <div className="relative size-20 shrink-0">
                  <div
                    aria-hidden
                    className="spin-slow absolute inset-0 rounded-full"
                    style={{ background: "conic-gradient(from 0deg, #F5C842, transparent 70%)" }}
                  />
                  <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-surface">
                    <span className="text-gold-gradient font-display text-2xl">MJ</span>
                  </div>
                </div>
                <div>
                  <p className="font-display text-xl">{site.founder}</p>
                  <p className="text-sm text-muted-foreground">{about.role}</p>
                  <p className="mt-2 flex items-center gap-2 text-xs text-mint">
                    <span className="pulse-dot size-2 rounded-full bg-mint" aria-hidden />
                    Open to new clients
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {about.credentials.map((c) => (
                  <li key={c.title} className="flex gap-3.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-gold shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]">
                      <c.icon className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] leading-snug font-medium">{c.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{c.meta}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-2.5">
                <a
                  href={site.linkedinPersonal}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14)] transition-[background-color,scale] duration-150 hover:bg-white/5 active:scale-[0.96]"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14)] transition-[background-color,scale] duration-150 hover:bg-white/5 active:scale-[0.96]"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </div>
              <div className="mt-5 flex justify-center">
                <Link001 href={site.linkedinCompany} className="text-sm text-gold">
                  Follow Lunar Analytics on LinkedIn
                </Link001>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

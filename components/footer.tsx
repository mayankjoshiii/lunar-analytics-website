import { footer, sections, site } from "@/content/site";
import { Link000, Link001, Link003 } from "@/components/ui/skiper-ui/skiper40";
import { MoonMark } from "./icons";
import { Eyebrow } from "./reveal";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[40rem]"
        style={{ background: "radial-gradient(50% 60% at 50% 100%, rgb(245 200 66 / 0.1), transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{footer.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.05] tracking-[-0.04em]">
              {footer.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{footer.sub}</p>
            <Link003
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex font-display text-[clamp(1.35rem,3.2vw,2.5rem)] tracking-[-0.03em] text-gold"
            >
              {site.email}
            </Link003>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <nav aria-label="Footer">
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Explore</p>
              <ul className="mt-5 space-y-3">
                {sections.map((s) => (
                  <li key={s.id}>
                    <Link000 href={`#${s.id}`} className="inline-flex text-foreground/80">
                      {s.label}
                    </Link000>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Elsewhere</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link001 href={site.linkedinCompany} className="inline-flex text-foreground/80">
                    LinkedIn
                  </Link001>
                </li>
                <li>
                  <Link001 href={site.linkedinPersonal} className="inline-flex text-foreground/80">
                    Mayank on LinkedIn
                  </Link001>
                </li>
                <li>
                  <Link001 href={site.github} className="inline-flex text-foreground/80">
                    GitHub
                  </Link001>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-2.5 text-foreground">
            <MoonMark className="size-5" />
            <span className="font-display text-base">{site.name}</span>
          </a>
          <p className="max-w-md">{footer.tagline}</p>
          <p>
            © {new Date().getFullYear()} {site.name} · Founded by {site.founder}
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-[0.2em] text-center font-display text-[24vw] leading-[0.8] tracking-[-0.07em] select-none"
        style={{
          background: "linear-gradient(180deg, rgb(245 200 66 / 0.2), rgb(245 200 66 / 0) 85%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Lunar
      </p>
    </footer>
  );
}

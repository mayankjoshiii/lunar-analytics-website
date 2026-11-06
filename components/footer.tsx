import { sections, site } from "@/content/site";
import { GithubIcon, LinkedinIcon, MoonMark } from "./icons";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <MoonMark className="size-7" />
              <span className="font-display text-xl">{site.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fractional data analytics for UK small and medium businesses. Based in Swansea, working across the UK.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-gold">
                {s.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4 text-sm">
            <a href={`mailto:${site.email}`} className="block transition-colors hover:text-gold">
              {site.email}
            </a>
            <div className="flex gap-2">
              <a
                href={site.linkedinCompany}
                target="_blank"
                rel="noreferrer"
                aria-label="Lunar Analytics on LinkedIn"
                className="flex size-10 items-center justify-center rounded-full text-muted-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] transition-colors hover:text-gold"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-full text-muted-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] transition-colors hover:text-gold"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <p>Founded by {site.founder}</p>
        </div>
      </div>
    </footer>
  );
}

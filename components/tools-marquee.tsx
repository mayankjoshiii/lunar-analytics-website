import { tools } from "@/content/site";

export function ToolsMarquee() {
  const row = [...tools, ...tools];
  return (
    <section aria-label="Tools I work in" className="relative border-y border-line bg-surface/40 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 md:flex-row md:items-center md:gap-10 md:px-8">
        <p className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Tools I work in</p>
        <ul className="sr-only">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="edge-fade min-w-0 flex-1 overflow-hidden" aria-hidden>
          <div className="marquee flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {row.map((t, i) => (
                  <span key={`${copy}-${i}`} className="flex items-center font-display text-2xl whitespace-nowrap text-foreground/85 italic md:text-[1.75rem]">
                    {t}
                    <span className="mx-8 inline-block size-1.5 rotate-45 bg-gold/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

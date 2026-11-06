"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { sections, site } from "@/content/site";
import { MoonMark } from "./icons";
import { ease } from "./reveal";
import { useScrollTo } from "./smooth-scroll";

export function IslandNav() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const target = useRef<string | null>(null);
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll();
  const percent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const ring = useMotionTemplate`conic-gradient(var(--gold) ${percent}%, rgb(255 255 255 / 0.1) 0)`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", "why", ...sections.map((s) => s.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const label = sections.find((s) => s.id === current)?.label ?? site.name;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          aria-label="Main"
          className={`pointer-events-auto overflow-hidden bg-surface/80 shadow-[0_0_0_1px_rgb(255_255_255/0.09),0_18px_44px_-18px_rgb(0_0_0/0.9)] backdrop-blur-xl transition-[width,border-radius] duration-500 ${
            open ? "w-full max-w-sm rounded-[28px]" : "w-[min(22rem,100%)] rounded-[28px]"
          }`}
        >
          <div className="flex h-14 items-center gap-2 pr-2 pl-2">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="island-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="flex min-w-0 flex-1 items-center gap-3 text-left"
            >
              <motion.span style={{ background: ring }} className="relative flex size-10 shrink-0 items-center justify-center rounded-full">
                <span className="absolute inset-[2px] rounded-full bg-background" />
                <MoonMark className="relative size-6" />
              </motion.span>
              <span className="relative h-5 min-w-0 flex-1 overflow-hidden text-sm font-medium">
                <AnimatePresence initial={false}>
                  <motion.span
                    key={label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="absolute inset-0 truncate"
                  >
                    {label}
                  </motion.span>
                </AnimatePresence>
              </span>
              <ChevronDown
                className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                scrollTo("contact");
              }}
              className="gold-gradient flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-[13px] font-semibold text-background transition-transform duration-150 active:scale-[0.96]"
            >
              <CalendarDays className="size-4" aria-hidden />
              Book a call
            </a>
          </div>

          <AnimatePresence
            onExitComplete={() => {
              if (target.current) scrollTo(target.current);
              target.current = null;
            }}
          >
            {open && (
              <motion.ul
                id="island-menu"
                key="menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease }}
                className="overflow-hidden px-2"
              >
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      data-lenis-prevent
                      onClick={(e) => {
                        e.preventDefault();
                        target.current = s.id;
                        setOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] transition-colors hover:bg-white/5 ${
                        current === s.id ? "text-gold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.label}
                      {current === s.id && <span className="size-1.5 rounded-full bg-gold" />}
                    </a>
                  </li>
                ))}
                <li className="h-2" />
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}

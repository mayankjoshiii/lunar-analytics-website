"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

function format(v: number, decimals: number) {
  return v.toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export function CountingNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  delay = 0,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce) {
      node.textContent = format(value, decimals);
      return;
    }
    if (!inView) {
      node.textContent = format(0, decimals);
      return;
    }
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v, decimals);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals, duration, delay]);

  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      <span ref={ref}>{format(value, decimals)}</span>
      {suffix}
    </span>
  );
}

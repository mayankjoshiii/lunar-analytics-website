"use client";

import { LiquidMetal } from "@/components/ui/liquid-metal";

export function LiquidMoon({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative ${className}`}>
      <div
        className="absolute inset-[-30%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(245 200 66 / 0.3) 0%, rgb(245 200 66 / 0.08) 42%, transparent 68%)" }}
      />
      <LiquidMetal
        shape="circle"
        colorBack="#00000000"
        colorTint="#f5c842"
        speed={0.3}
        repetition={1.6}
        distortion={0.06}
        softness={0.45}
        shiftRed={0}
        shiftBlue={0}
        contour={0.4}
        angle={70}
        maxPixelCount={1_000_000}
        className="rounded-full"
      />
    </div>
  );
}

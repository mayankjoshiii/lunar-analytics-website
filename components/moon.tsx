export function Moon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div
        className="absolute inset-[-40%] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgb(245 200 66 / 0.18) 0%, rgb(245 200 66 / 0.05) 42%, transparent 68%)" }}
      />
      <div
        className="relative size-full overflow-hidden rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #fff7de 0%, #f4e0a2 26%, #d8b35c 58%, #8a6826 100%)",
          boxShadow: "0 0 70px 4px rgb(245 200 66 / 0.14), inset -18px -24px 50px rgb(58 38 6 / 0.6)",
        }}
      >
        <span className="absolute top-[26%] left-[55%] size-[15%] rounded-full bg-[#a77a1f]/30 shadow-[inset_2px_2px_4px_rgb(0_0_0/0.18)]" />
        <span className="absolute top-[56%] left-[27%] size-[10%] rounded-full bg-[#a77a1f]/25 shadow-[inset_2px_2px_4px_rgb(0_0_0/0.15)]" />
        <span className="absolute top-[62%] left-[60%] size-[7%] rounded-full bg-[#a77a1f]/25" />
        <span className="absolute top-[38%] left-[34%] size-[5%] rounded-full bg-[#a77a1f]/20" />
      </div>
    </div>
  );
}

import { ImageResponse } from "next/og";

export const alt = "Lunar Analytics. Your business has data. Let's turn it into decisions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64"><circle cx="27" cy="33" r="18" fill="white"/><circle cx="38" cy="26" r="16" fill="black"/></mask><rect width="64" height="64" fill="#F5C842" mask="url(#m)"/></svg>`;

const lines = ["Your business has data.", "Let's turn it into decisions."];
const tagline = "Fractional data analytics for UK small businesses";
const domain = "lunaranalytics.co.uk";

async function loadFont(style: "normal" | "italic") {
  const family = style === "italic" ? "Instrument+Serif:ital@1" : "Instrument+Serif";
  const text = encodeURIComponent([...lines, "Lunar Analytics", tagline, domain].join(""));
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${text}`)).text();
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!src) throw new Error("font not found");
  return (await fetch(src[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const fonts = await Promise.all([loadFont("normal"), loadFont("italic")])
    .then(([regular, italic]) => [
      { name: "Instrument Serif", data: regular, style: "normal" as const, weight: 400 as const },
      { name: "Instrument Serif", data: italic, style: "italic" as const, weight: 400 as const },
    ])
    .catch((err) => {
      console.warn("Open Graph image: using the default font", err);
      return undefined;
    });
  const serif = fonts ? "Instrument Serif" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 85% 10%, rgba(245,200,66,0.18), transparent 45%), #070b15",
          color: "#eef1f7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={52} height={52} src={`data:image/svg+xml;utf8,${encodeURIComponent(moon)}`} alt="" />
          <span style={{ fontFamily: serif, fontSize: 40 }}>Lunar Analytics</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: serif, fontSize: 84, lineHeight: 1.04 }}>
          <span>{lines[0]}</span>
          <span style={{ fontStyle: "italic", color: "#F5C842" }}>{lines[1]}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: serif, fontSize: 28, color: "#8b95a9" }}>
          <span>{tagline}</span>
          <span>{domain}</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/content/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Lunar Analytics | Fractional data analytics for UK small businesses";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.founder, url: site.linkedinPersonal }],
  keywords: [
    "fractional data analyst",
    "data analytics consultant UK",
    "small business analytics",
    "Power BI dashboards",
    "churn analysis",
    "KPI dashboard",
    "data analyst Swansea",
    "data analytics Wales",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title,
    description: "Your business has data. Let's turn it into decisions.",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Your business has data. Let's turn it into decisions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b15",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`dark ${sans.variable} ${mono.variable} antialiased`}>
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScroll>{children}</SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}

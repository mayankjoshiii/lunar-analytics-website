import { About } from "@/components/about";
import { Challenges } from "@/components/challenges";
import { Contact } from "@/components/contact";
import { Cost } from "@/components/cost";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { IslandNav } from "@/components/island-nav";
import { NightSky } from "@/components/night-sky";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { ToolsMarquee } from "@/components/tools-marquee";
import { Work } from "@/components/work";
import { faqs, pricing, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      image: `${site.url}/opengraph-image`,
      address: { "@type": "PostalAddress", addressLocality: "Swansea", addressRegion: "Wales", addressCountry: "GB" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      priceRange: `£${pricing.tiers[0].monthly.toLocaleString("en-GB")} to £${pricing.tiers[pricing.tiers.length - 1].monthly.toLocaleString("en-GB")} a month`,
      founder: {
        "@type": "Person",
        name: site.founder,
        jobTitle: "Founder and lead analyst",
        sameAs: [site.linkedinPersonal, site.github],
      },
      sameAs: [site.linkedinCompany],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-gold px-4 py-2 text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <NightSky />
      <IslandNav />
      <main id="main">
        <Hero />
        <ToolsMarquee />
        <Cost />
        <Challenges />
        <Pricing />
        <Process />
        <Work />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

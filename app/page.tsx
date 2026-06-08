import { Nav, ScrollProgress } from '@/components/Nav'
import { SiteBackground } from '@/components/SiteBackground'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { About } from '@/components/About'
import { CaseStudy } from '@/components/CaseStudy'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <SiteBackground />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <CaseStudy />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import Results from '@/components/Results'
import CaseStudy from '@/components/CaseStudy'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <About />
      <Results />
      <CaseStudy />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

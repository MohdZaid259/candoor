import Navbar from '@/components/layout/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Industries from '@/components/sections/industries'
import Projects from '@/components/sections/projects'
import Process from '@/components/sections/process'
import CTA from '@/components/sections/cta'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Projects />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}

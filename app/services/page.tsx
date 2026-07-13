import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import ServicesPageHero from '@/components/sections/services-page-hero'
import ServicesGrid from '@/components/sections/services-grid'
import CTA from '@/components/sections/cta'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicesPageHero />
      <ServicesGrid />
      <CTA />
      <Footer />
    </main>
  )
}

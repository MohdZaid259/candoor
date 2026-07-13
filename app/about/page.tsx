import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import AboutPageHero from '@/components/sections/about-page-hero'
import CompanyOverview from '@/components/sections/company-overview'
import VisionMission from '@/components/sections/vision-mission'
import CoreValues from '@/components/sections/core-values'
import AboutWhyChooseUs from '@/components/sections/about-why-choose-us'
import IndustriesServed from '@/components/sections/industries-served'
import HSE from '@/components/sections/hse'
import QualityAssurance from '@/components/sections/quality-assurance'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutPageHero />
      <CompanyOverview />
      <VisionMission />
      <CoreValues />
      <AboutWhyChooseUs />
      <IndustriesServed />
      <HSE />
      <QualityAssurance />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import ContactPageHero from '@/components/sections/contact-page-hero'
import ContactCards from '@/components/sections/contact-cards'
import ContactForm from '@/components/sections/contact-form'
import FAQ from '@/components/sections/faq'
import ContactCTA from '@/components/sections/contact-cta'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactPageHero />
      <ContactCards />
      <ContactForm />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  )
}

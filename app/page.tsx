import Bento from '@/components/marketing/bento'
import CTA from '@/components/marketing/cta'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import Footer from '@/components/marketing/footer'
import Hero from '@/components/marketing/hero/index'
import Navbar from '@/components/marketing/nav'
import Pricing from '@/components/marketing/price'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[var(--background-landing)] text-[var(--foreground-landing)]">
      <Navbar isAuthenticated={false} />
      <Hero />
      <Bento />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

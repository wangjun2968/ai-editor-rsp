import SEOHead from '../components/SEOHead'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import PopularTools from '../components/PopularTools'
import Features from '../components/Features'
import SEOBanner from '../components/SEOBanner'

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="AI Editor RSP — Free AI Photo Editor & Reels Template Hub"
        description="Free AI photo editor online. Remove backgrounds, enhance images, apply AI filters, create CapCut templates, and edit festival photos. No signup required."
        keywords={[
          'ai photo editor free',
          'capcut template',
          'background remover free',
          'trending reels editing',
          'aesthetic photo editing',
          'wedding photo editing ai',
          'vintage photo editing',
          'festival photo editing',
          'diwali photo editing',
          'holi ai photo editing',
        ]}
        canonical="https://rspeditor.in"
      />
      <Hero />
      <CategoryGrid />
      <PopularTools />
      <Features />
      <SEOBanner />
    </>
  )
}

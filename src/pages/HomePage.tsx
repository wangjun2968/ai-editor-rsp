import SEOHead from '../components/SEOHead'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import PopularTools from '../components/PopularTools'
import Features from '../components/Features'
import SEOBanner from '../components/SEOBanner'
import AdBanner from '../components/AdBanner'

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

      {/* Top Banner Ad — 首页首屏下方 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdBanner slot="1234567890" format="auto" className="min-h-[90px]" />
      </div>

      <CategoryGrid />

      {/* In-Feed Ad — 分类和热门工具之间 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <AdBanner slot="2345678901" format="rectangle" className="min-h-[250px]" />
      </div>

      <PopularTools />

      {/* Mid-Page Banner — 热门工具和特性之间 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdBanner slot="3456789012" format="horizontal" className="min-h-[90px]" />
      </div>

      <Features />
      <SEOBanner />

      {/* Bottom Banner Ad — 页面底部 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-8">
        <AdBanner slot="4567890123" format="auto" className="min-h-[90px]" />
      </div>
    </>
  )
}

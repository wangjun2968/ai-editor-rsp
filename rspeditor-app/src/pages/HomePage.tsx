import { Link } from 'react-router-dom'
import { Search, ArrowRight, TrendingUp } from 'lucide-react'
import { useState, useMemo } from 'react'
import { useLang } from '../contexts/LangContext'
import { t } from '../i18n'
import { templates, categories } from '../data/templates'
import TemplateCard from '../components/TemplateCard'

export default function HomePage() {
  const { lang } = useLang()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    let result = templates
    if (activeCategory !== 'all') {
      result = result.filter((t) => t.categorySlug === activeCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          (t.titleHi && t.titleHi.toLowerCase().includes(q)) ||
          (t.titleTa && t.titleTa.toLowerCase().includes(q))
      )
    }
    return result
  }, [search, activeCategory])

  const popular = useMemo(() => {
    return [...templates].sort((a, b) => b.usageCount - a.usageCount).slice(0, 4)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-h)] tracking-tight">
          {t(lang, 'tagline')}
        </h1>
        <p className="mt-4 text-lg opacity-70 max-w-2xl mx-auto">
          {t(lang, 'metaDescription')}
        </p>

        {/* Search */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(lang, 'searchPlaceholder')}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--code-bg)] text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.slug
                ? 'bg-primary text-white'
                : 'bg-[var(--code-bg)] hover:bg-primary-bg hover:text-primary'
            }`}
          >
            {lang === 'hi' && cat.labelHi ? cat.labelHi : lang === 'ta' && cat.labelTa ? cat.labelTa : cat.label}
          </button>
        ))}
      </section>

      {/* Templates Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="text-center py-16 opacity-60">
          <p>No templates found. Try a different search.</p>
        </div>
      )}

      {/* Popular Section */}
      {!search && activeCategory === 'all' && (
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-primary" />
            <h2 className="text-xl font-medium text-[var(--text-h)]">{t(lang, 'popular')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popular.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-16 mb-8 text-center py-12 rounded-2xl bg-primary-bg border border-primary-border">
        <h2 className="text-2xl font-medium text-[var(--text-h)]">
          {lang === 'hi' ? 'और टेम्पलेट्स देखें' : lang === 'ta' ? 'மேலும் வார்ப்புருக்களைக் காண்க' : 'Explore More Templates'}
        </h2>
        <p className="mt-2 opacity-70">
          {lang === 'hi' ? 'हर श्रेणी में तैयार प्रॉम्प्ट्स' : lang === 'ta' ? 'ஒவ்வொரு வகையிலும் தயாராக வார்த்தைகள்' : 'Ready-to-use prompts for every category'}
        </p>
        <Link
          to="/category/all"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors"
        >
          {t(lang, 'viewAll')}
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}

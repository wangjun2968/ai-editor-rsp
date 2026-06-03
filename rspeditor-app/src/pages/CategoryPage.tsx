import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLang } from '../contexts/LangContext'
import { t } from '../i18n'
import { categories, getTemplatesByCategory } from '../data/templates'
import TemplateCard from '../components/TemplateCard'

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()

  const category = categories.find((c) => c.slug === slug)
  const templateList = getTemplatesByCategory(slug || 'all')

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-medium text-[var(--text-h)]">Category not found</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    )
  }

  const catLabel = lang === 'hi' && category.labelHi ? category.labelHi : lang === 'ta' && category.labelTa ? category.labelTa : category.label

  return (
    <div className="py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm opacity-70 hover:text-primary transition-colors mb-6">
        <ArrowLeft size={16} /> {t(lang, 'home')}
      </Link>

      <h1 className="text-3xl font-medium text-[var(--text-h)]">
        {t(lang, 'categoryPageTitle', { category: catLabel })}
      </h1>
      <p className="mt-2 opacity-70">
        {t(lang, 'categoryPageDesc', { category: catLabel })}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {templateList.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {templateList.length === 0 && (
        <div className="text-center py-16 opacity-60">
          <p>No templates in this category yet.</p>
        </div>
      )}
    </div>
  )
}

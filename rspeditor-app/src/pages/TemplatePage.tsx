import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { t } from '../i18n'
import { getTemplateBySlug, getRelatedTemplates } from '../data/templates'
import TemplateCard from '../components/TemplateCard'

export default function TemplatePage() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const [copied, setCopied] = useState(false)

  const template = getTemplateBySlug(slug || '')
  const related = template ? getRelatedTemplates(template.id) : []

  if (!template) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-medium text-[var(--text-h)]">Template not found</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    )
  }

  const promptText = lang === 'hi' && template.promptHi
    ? template.promptHi
    : lang === 'ta' && template.promptTa
    ? template.promptTa
    : template.prompt

  const title = lang === 'hi' && template.titleHi
    ? template.titleHi
    : lang === 'ta' && template.titleTa
    ? template.titleTa
    : template.title

  const description = lang === 'hi' && template.descriptionHi
    ? template.descriptionHi
    : lang === 'ta' && template.descriptionTa
    ? template.descriptionTa
    : template.description

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = promptText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="py-8 max-w-3xl mx-auto">
      <Link to={`/category/${template.categorySlug}`} className="inline-flex items-center gap-1 text-sm opacity-70 hover:text-primary transition-colors mb-6">
        <ArrowLeft size={16} /> {template.category}
      </Link>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-bg text-primary">
          {template.category}
        </span>
        {template.usageCount > 10000 && (
          <span className="text-xs flex items-center gap-0.5 text-amber-500">
            <Sparkles size={12} />
            {t(lang, 'popular')}
          </span>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-medium text-[var(--text-h)]">
        {title}
      </h1>
      <p className="mt-3 text-lg opacity-80">{description}</p>

      {/* Prompt Box */}
      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--code-bg)] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)] bg-[var(--bg)]">
          <span className="text-xs font-medium opacity-60 uppercase tracking-wide">Prompt</span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              copied
                ? 'bg-green-500/10 text-green-500'
                : 'bg-primary text-white hover:bg-primary-light'
            }`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? t(lang, 'copied') : t(lang, 'copyPrompt')}
          </button>
        </div>
        <pre className="p-4 text-sm whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
          {promptText}
        </pre>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {template.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1 rounded-full bg-[var(--code-bg)] opacity-70"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* How to Use */}
      <div className="mt-8 p-5 rounded-xl bg-primary-bg border border-primary-border">
        <h3 className="font-medium text-[var(--text-h)] mb-2">{t(lang, 'howToUse')}</h3>
        <p className="text-sm opacity-80 whitespace-pre-line">{t(lang, 'howToUseDesc')}</p>
      </div>

      {/* Related Templates */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-medium text-[var(--text-h)] mb-4">{t(lang, 'relatedTemplates')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

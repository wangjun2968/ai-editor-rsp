import { Link } from 'react-router-dom'
import { Copy, Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { t } from '../i18n'
import type { Template } from '../data/templates'

interface Props {
  template: Template
}

export default function TemplateCard({ template }: Props) {
  const { lang } = useLang()
  const [copied, setCopied] = useState(false)

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

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
    <div className="group bg-[var(--bg)] border border-[var(--border)] rounded-xl p-5 hover:shadow-lg hover:border-primary-border transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <Link to={`/template/${template.slug}`} className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
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
          <h3 className="text-lg font-medium text-[var(--text-h)] group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm mt-1 opacity-80 line-clamp-2">{description}</p>
        </Link>
        <button
          onClick={handleCopy}
          className={`shrink-0 p-2.5 rounded-lg transition-all ${
            copied
              ? 'bg-green-500/10 text-green-500'
              : 'bg-[var(--code-bg)] hover:bg-primary-bg hover:text-primary'
          }`}
          title={t(lang, 'copyPrompt')}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {template.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-[var(--code-bg)] opacity-70"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { t } from '../i18n'
import { categories } from '../data/templates'
import type { Lang } from '../i18n'

export default function Header() {
  const { lang, setLang } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  const langOptions: { code: Lang; label: string }[] = [
    { code: 'en', label: t('en', 'english') },
    { code: 'hi', label: t('hi', 'hindi') },
    { code: 'ta', label: t('ta', 'tamil') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/95 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-[1126px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-semibold text-[var(--text-h)] tracking-tight">
            AI Editor <span className="text-primary">RSP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                location.pathname === `/category/${cat.slug}`
                  ? 'bg-primary-bg text-primary font-medium'
                  : 'hover:bg-[var(--code-bg)]'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-[var(--code-bg)] text-sm">
              <Globe size={16} />
              <span className="hidden sm:inline uppercase text-xs font-medium">{lang}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-32 bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-[var(--code-bg)] first:rounded-t-lg last:rounded-b-lg ${
                    lang === opt.code ? 'text-primary font-medium' : ''
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-md hover:bg-[var(--code-bg)] md:hidden"
          >
            <Search size={18} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-[var(--code-bg)] md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t(lang, 'searchPlaceholder')}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[var(--border)] px-4 py-3 space-y-1">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm ${
                location.pathname === `/category/${cat.slug}`
                  ? 'bg-primary-bg text-primary font-medium'
                  : 'hover:bg-[var(--code-bg)]'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

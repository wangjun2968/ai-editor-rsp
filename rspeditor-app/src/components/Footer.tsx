import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { t } from '../i18n'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="max-w-[1126px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-semibold text-[var(--text-h)]">
              AI Editor <span className="text-primary">RSP</span>
            </Link>
            <p className="mt-2 text-sm opacity-80">{t(lang, 'footerTagline')}</p>
            <p className="mt-4 text-xs opacity-60">{t(lang, 'madeWith')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-[var(--text-h)] mb-3">{t(lang, 'categories')}</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/category/social-media" className="hover:text-primary transition-colors">Social Media</Link></li>
              <li><Link to="/category/email" className="hover:text-primary transition-colors">Email</Link></li>
              <li><Link to="/category/blog" className="hover:text-primary transition-colors">Blog & Articles</Link></li>
              <li><Link to="/category/business" className="hover:text-primary transition-colors">Business</Link></li>
              <li><Link to="/category/coding" className="hover:text-primary transition-colors">Coding & Tech</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-[var(--text-h)] mb-3">Legal</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">{t(lang, 'privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">{t(lang, 'terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center text-xs opacity-60">
          © {new Date().getFullYear()} AI Editor RSP. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

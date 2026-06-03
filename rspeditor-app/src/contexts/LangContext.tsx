import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Lang } from '../i18n'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('rsp-lang') as Lang | null
    if (saved && ['en', 'hi', 'ta'].includes(saved)) return saved
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'hi') return 'hi'
    if (browserLang === 'ta') return 'ta'
    return 'en'
  })

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('rsp-lang', newLang)
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

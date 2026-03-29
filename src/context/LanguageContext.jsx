import { useMemo, useState } from 'react'
import { LanguageContext } from './languageContext'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ta')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ta' ? 'en' : 'ta'))
  }

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

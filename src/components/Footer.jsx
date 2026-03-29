import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

function Footer() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <footer className="border-t border-border bg-white/90 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="font-heading text-2xl text-brown">K.S. ELAA & CO</p>
          <p className="max-w-md text-sm text-textSecondary">
            {t.footer.tagline}
          </p>
          <p className="max-w-md text-sm text-textSecondary">
            {t.footer.serviceAreaText}
          </p>
          <p className="text-sm text-textSecondary">{t.footer.hoursText}</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-medium text-textSecondary">
          <Link to="/" className="transition hover:text-brown">
            {t.nav.home}
          </Link>
          <Link to="/services" className="transition hover:text-brown">
            {t.nav.services}
          </Link>
          <Link to="/contact" className="transition hover:text-brown">
            {t.nav.contact}
          </Link>
          <Link to="/wedding-decoration" className="transition hover:text-brown">
            {t.footer.quickLinks.wedding}
          </Link>
          <Link to="/haldi-decoration" className="transition hover:text-brown">
            {t.footer.quickLinks.haldi}
          </Link>
          <Link to="/panthal-setup" className="transition hover:text-brown">
            {t.footer.quickLinks.panthal}
          </Link>
        </div>

        <p className="max-w-sm text-sm text-textSecondary lg:text-right">{t.footer.crafted}</p>
      </div>
    </footer>
  )
}

export default Footer

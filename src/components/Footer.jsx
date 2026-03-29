import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'
import { companySocial, phoneNumber, whatsappNumber } from '../data/services'

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
          <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-textSecondary">
            <a
              href={companySocial.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brown transition hover:text-primaryHover"
            >
              {t.floating.instagram}
            </a>
            <span>|</span>
            <a href={`tel:+${phoneNumber}`} className="font-medium text-brown transition hover:text-primaryHover">
              +91 94430 75773
            </a>
            <span>|</span>
            <a href={`tel:+${whatsappNumber}`} className="font-medium text-brown transition hover:text-primaryHover">
              +91 93447 68115
            </a>
          </div>
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

      <div className="mx-auto mt-6 flex w-full max-w-7xl flex-wrap items-center gap-2 px-4 text-xs text-textSecondary sm:px-6 lg:px-8">
        <span>Developed by Mohanapriyan M:</span>
        <a
          href="https://mohanapriyan.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brown transition hover:text-primaryHover"
        >
          mohanapriyan.dev
        </a>
        <span>|</span>
        <a
          href="https://mohanapriyan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brown transition hover:text-primaryHover"
        >
          mohanapriyan.netlify.app
        </a>
      </div>
    </footer>
  )
}

export default Footer

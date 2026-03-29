import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="K.S. ELAA & CO home">
          <img
            src="/K-S-Elaa&co-logo.png"
            alt="K.S. ELAA & CO logo"
            className="h-10 w-10 rounded-full border border-primary/30 object-cover"
            loading="eager"
          />
          <span className="truncate font-heading text-base text-brown sm:text-lg">K.S. ELAA & CO</span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-border px-3 py-2 text-sm text-brown md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {t.nav.menu}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-brown' : 'text-textSecondary hover:text-brown'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-brown shadow-soft transition hover:bg-primaryHover"
          >
            {t.nav.bookNow}
          </Link>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-yellowSoft text-brown' : 'text-textSecondary'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-brown"
              onClick={() => setOpen(false)}
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

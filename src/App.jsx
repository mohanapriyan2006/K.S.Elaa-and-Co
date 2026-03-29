import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Camera, Globe2, MessageCircle, PhoneCall } from 'lucide-react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SeoManager from './components/SeoManager'
import { companySocial, phoneNumber, whatsappNumber } from './data/services'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import ServiceLanding from './pages/ServiceLanding'
import { pageTransition } from './utils/animations'
import { useLanguage } from './context/useLanguage'
import { content } from './i18n/content'
import { Analytics } from '@vercel/analytics/react'

const Motion = motion

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function FloatingLanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const t = content[language] ?? content.ta

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="fixed left-1/2 top-[4.35rem] z-[60] inline-flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-primary/40 bg-white/95 px-3 py-2 text-[11px] font-semibold text-brown shadow-soft backdrop-blur-md transition hover:scale-105 sm:top-20 sm:px-4 sm:text-sm"
      aria-label={language === 'ta' ? 'Switch to English' : 'தமிழுக்கு மாறு'}
    >
      <Globe2 size={16} />
      {t.langLabel} / {t.switchLanguage}
    </button>
  )
}

function FloatingContactActions() {
  const { language } = useLanguage()
  const t = content[language] ?? content.ta
  const whatsappText =
    language === 'ta'
      ? 'வணக்கம், நிகழ்ச்சி அலங்காரம் தொடர்பாக பேச விரும்புகிறேன்.'
      : 'Hello, I want to book event decoration services.'

  const actions = [
    {
      id: 'instagram',
      href: companySocial.instagram,
      label: t.floating.instagram,
      icon: Camera,
      className: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
      external: true,
    },
    {
      id: 'phone',
      href: `tel:+${phoneNumber}`,
      label: t.floating.call,
      icon: PhoneCall,
      className: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
    },
    {
      id: 'whatsapp',
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
      label: t.floating.whatsapp,
      icon: MessageCircle,
      className: 'bg-[#25D366] text-white',
      external: true,
    },
  ]

  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-3 sm:bottom-5 sm:right-5">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <a
            key={action.id}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noreferrer' : undefined}
            className={`group inline-flex items-center justify-center gap-2 rounded-full px-3 py-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:px-4 ${action.className}`}
            aria-label={action.label}
          >
            <Icon size={18} />
            <span className="hidden text-xs font-semibold sm:inline">{action.label}</span>
          </a>
        )
      })}
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  const serviceRoutes = [
    '/wedding-decoration',
    '/haldi-decoration',
    '/engagement-decoration',
    '/reception-setup',
    '/baby-shower-decoration',
    '/birthday-decoration',
    '/mannadu-panthal',
    '/panthal-setup',
    '/kabbadi-stage-setup',
    '/corporate-event-decoration',
  ]

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Motion.div {...pageTransition}>
              <Home />
            </Motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <Motion.div {...pageTransition}>
              <Services />
            </Motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <Motion.div {...pageTransition}>
              <About />
            </Motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <Motion.div {...pageTransition}>
              <Contact />
            </Motion.div>
          }
        />
        {serviceRoutes.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Motion.div {...pageTransition}>
                <ServiceLanding />
              </Motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background font-body text-textPrimary">
      <SeoManager />
      <ScrollToTop />
      <Navbar />
      <FloatingLanguageToggle />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <Analytics />
      <FloatingContactActions />
    </div>
  )
}

export default App

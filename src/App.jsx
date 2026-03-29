import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { whatsappNumber } from './data/services'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import { pageTransition } from './utils/animations'

const Motion = motion

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I want to book event decoration services.')}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background font-body text-textPrimary">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App

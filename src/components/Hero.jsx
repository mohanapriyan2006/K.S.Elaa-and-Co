import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { galleryImages } from '../data/services'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

const Motion = motion

function Hero() {
  const { language } = useLanguage()
  const t = content[language] ?? content.ta
  const homeContent = t?.home ?? content.en.home
  const heroImage =
    galleryImages[24] ||
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80'

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-yellowSoft/10 to-primary/10 pb-8 sm:pb-18 lg:pb-24 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-12">
      {/* Animated background elements */}
      <div className="absolute left-[-7rem] top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-8 right-[-5rem] h-80 w-80 rounded-full bg-yellowSoft/30 blur-3xl animate-pulse" />
      <div className="absolute right-1/3 top-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 relative z-10">
        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <Motion.p
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-gradient-to-r from-yellowSoft to-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brown shadow-sm"
          >
            <Sparkles size={14} strokeWidth={2.2} />
            {homeContent.heroBadge}
          </Motion.p>
          
          <Motion.h1
            variants={fadeInUp}
            className="font-heading text-2xl leading-tight text-brown sm:text-4xl lg:text-5xl"
          >
            {homeContent.heroTitleLine1}
            <span className="block bg-gradient-to-r from-primary via-brown to-primary bg-clip-text text-transparent">
              {homeContent.heroTitleLine2}
            </span>
          </Motion.h1>
          
          <Motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg leading-relaxed text-textSecondary sm:text-xl"
          >
            {homeContent.heroText}
          </Motion.p>
          
          <Motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4 sm:gap-4">
            <Link
              to="/contact"
              className="group relative rounded-xl bg-gradient-to-r from-primary to-primaryHover px-6 py-3 text-sm font-semibold text-brown shadow-lg transition hover:shadow-xl hover:scale-105 overflow-hidden sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {homeContent.heroPrimary}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="rounded-xl border-2 border-primary/40 bg-white px-6 py-3 text-sm font-semibold text-brown transition hover:border-primary hover:bg-yellowSoft/30 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
            >
              {homeContent.heroSecondary}
            </Link>
          </Motion.div>

          {/* Trust Indicators */}
          <Motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 pt-8 border-t border-border/50"
          >
            {[
              { number: '500+', label: homeContent.trustEvents },
              { number: '98%', label: homeContent.trustClients },
              { number: '10+', label: homeContent.trustYears },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-textSecondary">{stat.label}</p>
                </div>
              </div>
            ))}
          </Motion.div>
        </Motion.div>

        {/* Image Section with Premium Card Design */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-yellowSoft/20 rounded-[2.5rem] blur-2xl" />
          
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-primary/30 bg-white p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-100">
              <img
                src={heroImage}
                alt="Wedding decoration setup in Thanjavur and Trichy by K.S. ELAA & CO"
                width="1280"
                height="896"
                className="h-80 w-full object-cover sm:h-[28rem]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Badge */}
          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -right-4 rounded-xl border-2 border-white bg-gradient-to-br from-primary to-primaryHover px-4 py-3 shadow-xl"
          >
            <p className="text-xs font-bold uppercase text-white tracking-widest">Premium</p>
            <p className="text-xs text-white/90">Event Design</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero

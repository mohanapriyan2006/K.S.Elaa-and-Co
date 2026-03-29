import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CircleDollarSign, Palette, Sparkles, Star, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import Gallery from '../components/Gallery'
import { galleryPreview, serviceItems, testimonials } from '../data/services'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

const Motion = motion

const whyUsIcons = [Sparkles, Palette, CircleDollarSign, Zap]

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const { language } = useLanguage()
  const t = content[language]
  const whyCards = t?.home?.whyCards?.length ? t.home.whyCards : content.en.home.whyCards
  const localizedTestimonials =
    t?.home?.testimonials?.length ? t.home.testimonials : testimonials
  const safeTestimonialIndex = activeTestimonial % localizedTestimonials.length

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % localizedTestimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [localizedTestimonials.length])

  return (
    <>
      <Hero />

      <CategoryGrid
        items={serviceItems}
        title={t.home.categoriesTitle}
        subtitle={t.home.categoriesSubtitle}
        badgeLabel={t.home.categoriesBadge}
      />

      {/* Why Choose Us Section - Enhanced */}
      <section className="bg-gradient-to-br from-white/50 via-yellowSoft/10 to-primary/5 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-brown">{t.home.whyTitle}</h2>
            <p className="mt-3 text-textSecondary">{t.home.whySubtitle}</p>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyCards.map((point, index) => (
              <Motion.article
                key={point.title}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-primary/20 bg-white p-8 shadow-soft transition hover:shadow-lg hover:border-primary/40"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-yellow-400 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-yellowSoft/30 flex items-center justify-center mb-4 text-brown">
                  {(() => {
                    const Icon = whyUsIcons[index % whyUsIcons.length]
                    return <Icon size={22} strokeWidth={2.2} />
                  })()}
                </div>
                <h3 className="font-heading text-xl text-brown">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">{point.description}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-brown">{t.home.testimonialTitle}</h2>
            <p className="mt-3 text-textSecondary">{t.home.testimonialSubtitle}</p>
          </Motion.div>

          <div className="mx-auto max-w-3xl">
            <div className="relative min-h-[280px] rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-yellowSoft/30 to-primary/10 p-8 sm:p-12 shadow-lg">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={`${language}-${safeTestimonialIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 text-center"
                >
                  <div className="flex justify-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={1.5} />
                    ))}
                  </div>
                  <blockquote className="text-lg leading-relaxed text-textSecondary italic sm:text-xl">
                    "{localizedTestimonials[safeTestimonialIndex].quote}"
                  </blockquote>
                  <footer className="font-heading text-2xl text-brown">
                    — {localizedTestimonials[safeTestimonialIndex].name}
                  </footer>
                </Motion.div>
              </AnimatePresence>

              {/* Testimonial Indicators */}
              <div className="mt-8 flex justify-center gap-3">
                {localizedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === safeTestimonialIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white/30 py-12 sm:py-16 lg:py-20">
        <Gallery items={galleryPreview} title={t.home.galleryTitle} buttonLabel={t.home.galleryButton} />
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/20 to-yellowSoft/20 py-16 sm:py-20 lg:py-24">
        <div className="absolute left-[-10rem] top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10rem] bottom-0 h-80 w-80 rounded-full bg-yellowSoft/20 blur-3xl" />

        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-4xl sm:text-5xl text-brown">
              {t.home.ctaTitle}
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              {t.home.ctaSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primaryHover px-6 py-3 text-sm font-semibold text-brown shadow-lg transition hover:shadow-xl hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
              >
                {t.home.ctaPrimary}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="rounded-xl border-2 border-primary/40 bg-white px-6 py-3 text-sm font-semibold text-brown transition hover:border-primary hover:bg-yellowSoft/30 sm:px-8 sm:py-4 sm:text-base"
              >
                {t.home.ctaSecondary}
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  )
}

export default Home

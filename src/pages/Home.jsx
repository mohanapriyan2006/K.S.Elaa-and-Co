import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import Gallery from '../components/Gallery'
import { galleryPreview, serviceItems, testimonials, whyChooseUs } from '../data/services'
import { fadeInUp, staggerContainer } from '../utils/animations'

const Motion = motion

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Hero />

      <CategoryGrid
        items={serviceItems}
        title="Decoration Services"
        subtitle="From intimate family ceremonies to grand celebrations, every setup is designed with balance, warmth, and detail."
      />

      <section className="pb-6 pt-3 sm:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyChooseUs.map((point) => (
              <Motion.article
                key={point.title}
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-white p-6 shadow-soft"
              >
                <h3 className="font-heading text-2xl text-brown">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">{point.description}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </section>

      <Gallery items={galleryPreview} />

      <section className="pb-16 pt-8 sm:pb-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">Testimonials</p>
            <h2 className="mt-2 font-heading text-3xl text-brown sm:text-4xl">Loved By Families & Brands</h2>
          </div>

          <div className="relative min-h-[220px] rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-10">
            <AnimatePresence mode="wait">
              <Motion.div
                key={testimonials[activeTestimonial].name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-5"
              >
                <p className="text-lg leading-relaxed text-textPrimary sm:text-xl">
                  “{testimonials[activeTestimonial].quote}”
                </p>
                <p className="font-heading text-2xl text-brown">{testimonials[activeTestimonial].name}</p>
              </Motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeTestimonial === index ? 'w-8 bg-primary' : 'w-2.5 bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-brown shadow-soft transition hover:bg-primaryHover"
            >
              Book Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

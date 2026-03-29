import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import FilterTabs from '../components/FilterTabs'
import { serviceItems } from '../data/services'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

const Motion = motion

function Services() {
  const { language } = useLanguage()
  const t = content[language]
  const tabItems = [
    { value: 'All', label: t.servicesPage.tabs.all },
    { value: 'Wedding', label: t.servicesPage.tabs.wedding },
    { value: 'Celebrations', label: t.servicesPage.tabs.celebrations },
    { value: 'Panthal & Stage', label: t.servicesPage.tabs.panthal },
    { value: 'Corporate', label: t.servicesPage.tabs.corporate },
  ]

  const [activeTab, setActiveTab] = useState('All')

  const filteredItems = useMemo(() => {
    if (activeTab === 'All') return serviceItems
    return serviceItems.filter((item) => item.group === activeTab)
  }, [activeTab])

  const serviceFaqs = t.servicesPage.faqs
  const linkLabels =
    language === 'ta'
      ? { haldi: 'ஹல்தி அலங்காரம்', wedding: 'திருமண அலங்காரம்' }
      : { haldi: 'Haldi Decoration', wedding: 'Wedding Decoration' }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">{t.servicesPage.badge}</p>
            <h1 className="font-heading text-4xl text-brown sm:text-5xl">{t.servicesPage.title}</h1>
            <p className="max-w-3xl text-textSecondary">{t.servicesPage.subtitle}</p>
            <p className="max-w-3xl text-textSecondary">{t.servicesPage.seoIntro}</p>
          </div>

          <FilterTabs tabs={tabItems} activeTab={activeTab} onChange={setActiveTab} />

          <Motion.div layout className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <Motion.figure
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
                >
                  <Link
                    to={`/${item.slug}`}
                    aria-label={
                      language === 'ta'
                        ? `தஞ்சாவூர் மற்றும் திருச்சியில் ${item.title} சேவை`
                        : `${item.title} services in Thanjavur and Trichy`
                    }
                  >
                    <img
                      src={item.image}
                      alt={
                        language === 'ta'
                          ? `K.S. ELAA & CO வழங்கும் தஞ்சாவூர் மற்றும் திருச்சியில் ${item.title} அலங்காரம்`
                          : `${item.title} in Thanjavur and Trichy by K.S. ELAA & CO`
                      }
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-brown/75 to-transparent p-4 text-base font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    <Link to={`/${item.slug}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </figcaption>
                </Motion.figure>
              ))}
            </AnimatePresence>
          </Motion.div>

          <section className="mt-14 rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-3xl text-brown">{t.servicesPage.faqTitle}</h2>
            <div className="mt-5 space-y-4">
              {serviceFaqs.map((faq) => (
                <article key={faq.q} className="rounded-xl border border-border/70 bg-background p-4">
                  <h3 className="font-semibold text-brown">{faq.q}</h3>
                  <p className="mt-2 text-sm text-textSecondary">{faq.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-gradient-to-r from-primary/20 to-yellowSoft/30 p-6 sm:p-8">
            <h2 className="font-heading text-3xl text-brown">{t.servicesPage.helperTitle}</h2>
            <p className="mt-3 max-w-3xl text-textSecondary">
              {t.servicesPage.helperLead}{' '}
              <Link to="/haldi-decoration" className="font-semibold text-brown underline">{linkLabels.haldi}</Link>
              {' '}{t.servicesPage.helperLinkConnector}{' '}
              <Link to="/wedding-decoration" className="font-semibold text-brown underline">{linkLabels.wedding}</Link>
              {' '}{t.servicesPage.helperTail}
            </p>
          </section>
        </div>
      </section>
    </>
  )
}

export default Services

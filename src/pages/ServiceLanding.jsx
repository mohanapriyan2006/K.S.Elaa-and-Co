import { Link, useLocation } from 'react-router-dom'
import { seoServices } from '../data/seoServices'
import { useLanguage } from '../context/useLanguage'

function ServiceLanding() {
  const location = useLocation()
  const { language } = useLanguage()
  const service = seoServices[location.pathname]
  const t =
    language === 'ta'
      ? {
          notFound: 'சேவை கிடைக்கவில்லை',
          notFoundText: 'தஞ்சாவூர் மற்றும் திருச்சியில் எங்கள் அனைத்து நிகழ்ச்சி அலங்கார சேவைகளையும் பாருங்கள்.',
          viewAll: 'அனைத்து சேவைகள்',
          localService: 'உள்ளூர் சேவை',
          inCities: 'தஞ்சாவூர் & திருச்சி',
          benefits: 'நன்மைகள்',
          useCases: 'பயன்படும் நிகழ்வுகள்',
          faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
          bookToday: 'இன்றே பதிவு செய்யுங்கள்',
          ctaText:
            'தஞ்சாவூர் அல்லது திருச்சியில் விலை மற்றும் கிடைப்புத் தகவலுக்கு உடனே வாட்ஸ்அப் அல்லது அழைப்பில் தொடர்பு கொள்ளுங்கள்.',
          quote: 'விலை பெறுங்கள்',
          moreServices: 'மேலும் சேவைகள்',
        }
      : {
          notFound: 'Service Not Found',
          notFoundText: 'Please explore our complete event decoration services in Thanjavur and Trichy.',
          viewAll: 'View All Services',
          localService: 'Local Service',
          inCities: 'in Thanjavur & Trichy',
          benefits: 'Benefits',
          useCases: 'Use Cases',
          faqTitle: 'Frequently Asked Questions',
          bookToday: 'Book Today',
          ctaText:
            'Need quick support for pricing and availability in Thanjavur or Trichy? Reach us instantly on WhatsApp or call now.',
          quote: 'Get a Quote',
          moreServices: 'Explore More Services',
        }

  if (!service) {
    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl text-brown sm:text-5xl">{t.notFound}</h1>
          <p className="mt-4 text-textSecondary">{t.notFoundText}</p>
          <Link
            to="/services"
            className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover"
          >
            {t.viewAll}
          </Link>
        </div>
      </section>
    )
  }

  const localizedService = service[language] || service.en

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localizedService.faqs.map((faq) => ({
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">{t.localService}</p>
          <h1 className="mt-3 font-heading text-4xl text-brown sm:text-5xl">
            {localizedService.title} {t.inCities}
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-textSecondary sm:text-lg">
            {localizedService.description}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl text-brown">{t.benefits}</h2>
              <ul className="mt-4 space-y-3 text-textSecondary">
                {localizedService.benefits.map((item) => (
                  <li key={item} className="rounded-lg bg-yellowSoft/40 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl text-brown">{t.useCases}</h2>
              <ul className="mt-4 space-y-3 text-textSecondary">
                {localizedService.useCases.map((item) => (
                  <li key={item} className="rounded-lg bg-yellowSoft/40 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="mt-12 rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-3xl text-brown">{t.faqTitle}</h2>
            <div className="mt-6 space-y-5">
              {localizedService.faqs.map((faq) => (
                <article key={faq.q} className="rounded-xl border border-border/70 bg-background p-4">
                  <h3 className="font-semibold text-brown">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-textSecondary">{faq.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-gradient-to-r from-primary/20 to-yellowSoft/30 p-6 sm:p-8">
            <h2 className="font-heading text-3xl text-brown">{localizedService.title} {t.bookToday}</h2>
            <p className="mt-3 max-w-3xl text-textSecondary">{t.ctaText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover"
              >
                {t.quote}
              </Link>
              <Link
                to="/services"
                className="inline-flex rounded-xl border border-primary/40 bg-white px-5 py-3 text-sm font-semibold text-brown transition hover:bg-yellowSoft/30"
              >
                {t.moreServices}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default ServiceLanding

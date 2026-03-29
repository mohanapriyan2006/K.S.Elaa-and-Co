import { Link, useLocation } from 'react-router-dom'
import { seoServices } from '../data/seoServices'

function ServiceLanding() {
  const location = useLocation()
  const service = seoServices[location.pathname]

  if (!service) {
    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl text-brown sm:text-5xl">Service Not Found</h1>
          <p className="mt-4 text-textSecondary">
            Please explore our complete event decoration services in Thanjavur and Trichy.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover"
          >
            View All Services
          </Link>
        </div>
      </section>
    )
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">Local Service</p>
          <h1 className="mt-3 font-heading text-4xl text-brown sm:text-5xl">
            {service.title} in Thanjavur & Trichy
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-textSecondary sm:text-lg">
            {service.description}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl text-brown">Benefits</h2>
              <ul className="mt-4 space-y-3 text-textSecondary">
                {service.benefits.map((item) => (
                  <li key={item} className="rounded-lg bg-yellowSoft/40 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl text-brown">Use Cases</h2>
              <ul className="mt-4 space-y-3 text-textSecondary">
                {service.useCases.map((item) => (
                  <li key={item} className="rounded-lg bg-yellowSoft/40 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="mt-12 rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-3xl text-brown">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-5">
              {service.faqs.map((faq) => (
                <article key={faq.q} className="rounded-xl border border-border/70 bg-background p-4">
                  <h3 className="font-semibold text-brown">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-textSecondary">{faq.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-gradient-to-r from-primary/20 to-yellowSoft/30 p-6 sm:p-8">
            <h2 className="font-heading text-3xl text-brown">Book {service.title} Today</h2>
            <p className="mt-3 max-w-3xl text-textSecondary">
              Need quick support for pricing and availability in Thanjavur or Trichy? Reach us instantly on
              WhatsApp or call now.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex rounded-xl border border-primary/40 bg-white px-5 py-3 text-sm font-semibold text-brown transition hover:bg-yellowSoft/30"
              >
                Explore More Services
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default ServiceLanding

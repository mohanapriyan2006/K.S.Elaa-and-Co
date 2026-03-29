import ContactForm from '../components/ContactForm'
import { phoneNumber, whatsappNumber } from '../data/services'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

function Contact() {
  const { language } = useLanguage()
  const t = content[language]
  const whatsappText =
    language === 'ta'
      ? 'வணக்கம், நிகழ்ச்சி அலங்காரம் தொடர்பாக பேச விரும்புகிறேன்.'
      : 'Hello, I want to book event decoration services.'

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">{t.contactPage.badge}</p>
          <h1 className="font-heading text-4xl text-brown sm:text-5xl">{t.contactPage.title}</h1>
          <p className="text-textSecondary">
            {t.contactPage.subtitle}
          </p>

          <div className="space-y-4 rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h2 className="font-heading text-2xl text-brown">{t.contactPage.quickSupportTitle}</h2>
            <p className="text-sm text-textSecondary">
              {t.contactPage.quickSupportText}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover"
            >
              {t.contactPage.whatsappCta}
            </a>
          </div>

          <article className="space-y-3 rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h2 className="font-heading text-2xl text-brown">{t.contactPage.localInfoTitle}</h2>
            <p className="text-sm text-textSecondary">
              {t.contactPage.businessNameLabel}: K.S. ELAA & CO
            </p>
            <p className="text-sm text-textSecondary">
              {t.contactPage.serviceAreaLabel}: Thanjavur, Thiruvarur, Trichy - also Overall Tamil Nadu
            </p>
            <p className="text-sm text-textSecondary">
              {t.contactPage.phoneLabel}:{' '}
              <a className="font-semibold text-brown underline" href={`tel:+${phoneNumber}`}>+91 94430 75773</a>
              ,<a className="font-semibold text-brown underline" href={`tel:+${whatsappNumber}`}>+91 93447 68115</a>
            </p>
            <p className="text-sm text-textSecondary">{t.contactPage.hoursLabel}: {t.contactPage.hoursValue}</p>
          </article>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact

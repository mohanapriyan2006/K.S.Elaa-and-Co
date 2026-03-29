import ContactForm from '../components/ContactForm'
import { whatsappNumber } from '../data/services'

function Contact() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I want to book event decoration services.')}`

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">Contact</p>
          <h1 className="font-heading text-4xl text-brown sm:text-5xl">Plan Your Celebration With Us</h1>
          <p className="text-textSecondary">
            Share your event date and styling vision. We will build a custom decoration concept
            for your venue, budget, and occasion.
          </p>

          <div className="space-y-4 rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h2 className="font-heading text-2xl text-brown">Need quick support?</h2>
            <p className="text-sm text-textSecondary">
              Chat with our team directly on WhatsApp for package details and availability.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact

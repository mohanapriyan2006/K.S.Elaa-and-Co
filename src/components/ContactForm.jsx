import { useState } from 'react'

const initialValues = {
  name: '',
  phone: '',
  eventType: '',
  eventDate: '',
  message: '',
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^\d{10,15}$/.test(values.phone.replace(/\s+/g, ''))) {
      nextErrors.phone = 'Enter a valid phone number.'
    }
    if (!values.eventType) nextErrors.eventType = 'Please select event type.'
    if (!values.eventDate) nextErrors.eventDate = 'Please choose event date.'
    if (!values.message.trim()) nextErrors.message = 'Please tell us about your event.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-brown">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brown">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary"
            placeholder="10-15 digits"
          />
          {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-brown">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={values.eventType}
            onChange={handleChange}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary"
          >
            <option value="">Select event type</option>
            <option value="Marriage">Marriage</option>
            <option value="Reception">Reception</option>
            <option value="Engagement">Engagement</option>
            <option value="Haldi Decoration">Haldi Decoration</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Birthday">Birthday</option>
            <option value="Mannadu Panthal">Mannadu Panthal</option>
            <option value="Party Decoration">Party Decoration</option>
            <option value="Panthal Setup">Panthal Setup</option>
            <option value="Kabbadi Stage Setup">Kabbadi Stage Setup</option>
            <option value="Corporate Events">Corporate Events</option>
          </select>
          {errors.eventType && <p className="mt-2 text-xs text-red-600">{errors.eventType}</p>}
        </div>

        <div>
          <label htmlFor="eventDate" className="mb-2 block text-sm font-medium text-brown">
            Event Date
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={values.eventDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          {errors.eventDate && <p className="mt-2 text-xs text-red-600">{errors.eventDate}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brown">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary"
          placeholder="Tell us your style, venue, and event expectations"
        />
        {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-brown transition hover:bg-primaryHover sm:w-auto"
      >
        Send Inquiry
      </button>

      {submitted && (
        <p className="rounded-xl bg-yellowSoft px-4 py-3 text-sm text-brown">
          Thanks. Your event inquiry has been captured. We will contact you shortly.
        </p>
      )}
    </form>
  )
}

export default ContactForm

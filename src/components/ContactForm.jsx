import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import Loader from './Loader'
import { sendBookingRequest } from '../utils/emailjs'
import { useLanguage } from '../context/useLanguage'
import { content } from '../i18n/content'

const initialValues = {
  name: '',
  phone: '',
  eventType: '',
  eventDate: '',
  message: '',
}

function ContactForm() {
  const { language } = useLanguage()
  const t = content[language]

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitState, setSubmitState] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    if (submitState !== 'idle') {
      setSubmitState('idle')
    }
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.name.trim()) nextErrors.name = t.contactForm.errors.name
    if (!/^\d{10,15}$/.test(values.phone.replace(/\s+/g, ''))) {
      nextErrors.phone = t.contactForm.errors.phone
    }
    if (!values.eventType) nextErrors.eventType = t.contactForm.errors.eventType
    if (!values.eventDate) nextErrors.eventDate = t.contactForm.errors.eventDate
    if (!values.message.trim()) nextErrors.message = t.contactForm.errors.message

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitState('idle')
      return
    }

    setErrors({})
    setIsConfirmOpen(true)
  }

  const handleConfirmSubmit = async () => {
    setIsConfirmOpen(false)
    setIsSending(true)

    try {
      await sendBookingRequest(values)
      setValues(initialValues)
      setSubmitState('success')
    } catch (error) {
      console.error('Failed to send booking request:', error)
      setSubmitState('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="animate-fade-in space-y-5 rounded-3xl border border-border bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lg sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-brown">
              {t.contactForm.name}
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brown focus:ring-2 focus:ring-primary/40"
              placeholder={t.contactForm.yourName}
            />
            {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brown">
              {t.contactForm.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brown focus:ring-2 focus:ring-primary/40"
              placeholder={t.contactForm.digitsHint}
            />
            {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-brown">
              {t.contactForm.eventType}
            </label>
            <select
              id="eventType"
              name="eventType"
              value={values.eventType}
              onChange={handleChange}
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brown focus:ring-2 focus:ring-primary/40"
            >
              <option value="">{t.contactForm.selectEventType}</option>
              <option value="Marriage">{t.contactForm.eventOptions.marriage}</option>
              <option value="Reception">{t.contactForm.eventOptions.reception}</option>
              <option value="Engagement">{t.contactForm.eventOptions.engagement}</option>
              <option value="Haldi Decoration">{t.contactForm.eventOptions.haldiDecoration}</option>
              <option value="Baby Shower">{t.contactForm.eventOptions.babyShower}</option>
              <option value="Birthday">{t.contactForm.eventOptions.birthday}</option>
              <option value="Mannadu Panthal">{t.contactForm.eventOptions.mannaduPanthal}</option>
              <option value="Party Decoration">{t.contactForm.eventOptions.partyDecoration}</option>
              <option value="Panthal Setup">{t.contactForm.eventOptions.panthalSetup}</option>
              <option value="Kabbadi Stage Setup">{t.contactForm.eventOptions.kabbadiStageSetup}</option>
              <option value="Corporate Events">{t.contactForm.eventOptions.corporateEvents}</option>
              <option value="Other">{t.contactForm.eventOptions.other}</option>
            </select>
            {errors.eventType && <p className="mt-2 text-xs text-red-600">{errors.eventType}</p>}
          </div>

          <div>
            <label htmlFor="eventDate" className="mb-2 block text-sm font-medium text-brown">
              {t.contactForm.eventDate}
            </label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              value={values.eventDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brown focus:ring-2 focus:ring-primary/40"
            />
            {errors.eventDate && <p className="mt-2 text-xs text-red-600">{errors.eventDate}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-brown">
            {t.contactForm.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brown focus:ring-2 focus:ring-primary/40"
            placeholder={t.contactForm.messagePlaceholder}
          />
          {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-brown transition-all duration-200 hover:-translate-y-0.5 hover:bg-primaryHover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSending && <Loader size="sm" className="text-brown" />}
          {isSending ? t.contactForm.sending : t.contactForm.send}
        </button>

        {submitState === 'success' && (
          <p className="animate-fade-in rounded-xl bg-yellowSoft px-4 py-3 text-sm font-medium text-brown">
            {t.contactForm.success}
          </p>
        )}

        {submitState === 'error' && (
          <p className="animate-fade-in rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {t.contactForm.error}
          </p>
        )}
      </form>

      <ConfirmModal
        isOpen={isConfirmOpen}
        title={t.contactForm.confirmTitle}
        message={t.contactForm.confirmMessage}
        cancelLabel={t.contactForm.cancel}
        confirmLabel={t.contactForm.confirm}
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmSubmit}
        isLoading={isSending}
      />
    </>
  )
}

export default ContactForm

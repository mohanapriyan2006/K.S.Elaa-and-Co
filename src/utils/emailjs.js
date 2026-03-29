import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

export async function sendBookingRequest(formValues) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS environment variables are missing.')
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: formValues.name,
      phone: formValues.phone,
      event_type: formValues.eventType,
      event_date: formValues.eventDate,
      message: formValues.message,
    },
    {
      publicKey: PUBLIC_KEY,
    }
  )
}

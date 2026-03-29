import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp } from '../utils/animations'

const Motion = motion

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="absolute left-[-7rem] top-10 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-8 right-[-5rem] h-56 w-56 rounded-full bg-yellowSoft blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          <p className="inline-flex rounded-full border border-primary/30 bg-yellowSoft px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brown">
            Modern Indian Event Styling
          </p>
          <h1 className="font-heading text-4xl leading-tight text-brown sm:text-5xl lg:text-6xl">
            Crafting Beautiful Celebrations
          </h1>
          <p className="max-w-xl text-base text-textSecondary sm:text-lg">
            From weddings to grand events, we design elegant spaces with refined details,
            warm traditions, and modern luxury.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-brown shadow-soft transition hover:bg-primaryHover"
            >
              Book Your Event
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-brown transition hover:border-primary/60"
            >
              Explore Services
            </Link>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2.25rem] border border-primary/30 bg-white p-3 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
              alt="Indian wedding stage decoration"
              className="h-[26rem] w-full rounded-[1.7rem] object-cover"
              loading="eager"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { serviceItems } from '../data/services'

const Motion = motion

function Hero() {
  const heroImage = serviceItems[3]?.image || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80';

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-yellowSoft/10 to-primary/10 py-24 sm:py-32 lg:py-40">
      {/* Animated background elements */}
      <div className="absolute left-[-7rem] top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-8 right-[-5rem] h-80 w-80 rounded-full bg-yellowSoft/30 blur-3xl animate-pulse" />
      <div className="absolute right-1/3 top-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 relative z-10">
        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <Motion.p
            variants={fadeInUp}
            className="inline-flex rounded-full border border-primary/40 bg-gradient-to-r from-yellowSoft to-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brown shadow-sm"
          >
            ✨ Elegant Event Design
          </Motion.p>
          
          <Motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl leading-tight text-brown sm:text-6xl lg:text-7xl"
          >
            Crafting Beautiful
            <span className="block bg-gradient-to-r from-primary via-brown to-primary bg-clip-text text-transparent">
              Celebrations
            </span>
          </Motion.h1>
          
          <Motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg leading-relaxed text-textSecondary sm:text-xl"
          >
            From intimate weddings to grand events, we design elegant spaces filled with refined 
            details, warm traditions, and modern luxury. Let us transform your vision into an 
            unforgettable experience.
          </Motion.p>
          
          <Motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/contact"
              className="group relative rounded-xl bg-gradient-to-r from-primary to-primaryHover px-8 py-4 text-base font-semibold text-brown shadow-lg transition hover:shadow-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Book Your Event</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="rounded-xl border-2 border-primary/40 bg-white px-8 py-4 text-base font-semibold text-brown transition hover:border-primary hover:bg-yellowSoft/30 hover:shadow-md"
            >
              Explore Services
            </Link>
          </Motion.div>

          {/* Trust Indicators */}
          <Motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 pt-8 border-t border-border/50"
          >
            {[
              { number: '500+', label: 'Events' },
              { number: '98%', label: 'Happy Clients' },
              { number: '10+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-textSecondary">{stat.label}</p>
                </div>
              </div>
            ))}
          </Motion.div>
        </Motion.div>

        {/* Image Section with Premium Card Design */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-yellowSoft/20 rounded-[2.5rem] blur-2xl" />
          
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-primary/30 bg-white p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-100">
              <img
                src={heroImage}
                alt="Indian wedding stage decoration with elegant floral arrangements"
                className="h-[28rem] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Badge */}
          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -right-4 rounded-xl border-2 border-white bg-gradient-to-br from-primary to-primaryHover px-4 py-3 shadow-xl"
          >
            <p className="text-xs font-bold uppercase text-white tracking-widest">Premium</p>
            <p className="text-xs text-white/90">Event Design</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero

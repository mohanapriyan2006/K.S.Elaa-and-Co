import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  ExternalLink,
  GitBranch,
  Globe,
  Layers,
  Mail,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { developer, companySocial } from '../data/services'

const Motion = motion

const valueIcons = [BadgeCheck, Layers, ShieldCheck, Rocket, BriefcaseBusiness, Camera]

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-yellowSoft via-background to-primary/10 py-20 sm:py-28 lg:py-32">
        <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-8rem] h-80 w-80 rounded-full bg-yellowSoft/30 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <Motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl leading-tight text-brown sm:text-6xl lg:text-7xl"
            >
              Our Story
            </Motion.h1>
            <Motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-lg text-textSecondary sm:text-xl"
            >
              K.S. ELAA & CO specializes in creating unforgettable moments through thoughtfully
              designed event decorations and stage setups. We blend traditional elegance with modern
              aesthetics to celebrate your special occasions.
            </Motion.p>
            <Motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brown/80">
              <span className="rounded-full border border-primary/40 bg-white/70 px-3 py-1">Wedding Styling</span>
              <span className="rounded-full border border-primary/40 bg-white/70 px-3 py-1">Stage Concepts</span>
              <span className="rounded-full border border-primary/40 bg-white/70 px-3 py-1">Corporate Events</span>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* Left Column */}
            <Motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="font-heading text-3xl text-brown sm:text-4xl">
                Crafted with Passion
              </h2>
              <div className="space-y-4 text-textSecondary leading-relaxed">
                <p>
                  Since our inception, we have been dedicated to transforming celebrations into works of art.
                  Whether it's your dream wedding, milestone birthday, or corporate event, we bring vision to life
                  with meticulous attention to detail.
                </p>
                <p>
                  Our team combines creativity, precision, and a deep appreciation for Indian traditions with a
                  contemporary touch. Every decoration is a story, every setup is a celebration of your unique moments.
                </p>
                <p>
                  From intimate family gatherings to grand celebrations, we work with you to understand your dream
                  and deliver excellence at every stage.
                </p>
              </div>
            </Motion.div>

            {/* Right Column - Key Stats */}
            <Motion.div
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                { number: '500+', label: 'Events Decorated' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '10+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <Motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="rounded-2xl border border-primary/30 bg-gradient-to-br from-yellowSoft/50 to-primary/5 p-8 text-center"
                >
                  <h3 className="font-heading text-3xl text-brown sm:text-4xl">{stat.number}</h3>
                  <p className="mt-2 text-sm font-medium text-textSecondary">{stat.label}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl text-brown sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-textSecondary">What drives us to excellence</p>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: 'Quality First',
                description:
                  'Every detail is meticulously planned and executed with premium quality materials.',
              },
              {
                title: 'Authenticity',
                description:
                  'We honor traditions while embracing contemporary design for timeless results.',
              },
              {
                title: 'Client-Centric',
                description:
                  'Your vision, your budget, your timeline - we work around your needs completely.',
              },
              {
                title: 'Innovation',
                description:
                  'We stay ahead with fresh ideas and modern techniques in event decoration.',
              },
              {
                title: 'Reliability',
                description:
                  'Professional team with disciplined execution and punctuality across all projects.',
              },
              {
                title: 'Affordability',
                description:
                  'Premium decoration without burn-out budgets - flexible packages for everyone.',
              },
            ].map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length]
              return (
                <Motion.article
                  key={value.title}
                  variants={fadeInUp}
                  className="group rounded-xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-yellowSoft to-primary/20 text-brown">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-heading text-lg text-brown">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">{value.description}</p>
                </Motion.article>
              )
            })}
          </Motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="border-t border-border bg-white/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/30 bg-gradient-to-br from-pink-50/50 to-primary/5 p-8 text-center md:p-12"
          >
            <h2 className="font-heading text-3xl text-brown sm:text-4xl">Follow Us</h2>
            <p className="mt-3 text-textSecondary">
              Check out our latest event decorations and behind-the-scenes on Instagram
            </p>
            <a
              href={companySocial.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-105"
            >
              <Camera size={18} />
              Visit Our Instagram
            </a>
          </Motion.div>
        </div>
      </section>


      {/* Developer Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl text-brown sm:text-4xl">Crafted By</h2>
            <p className="mt-2 text-textSecondary">
              Designed and developed with care by 
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-12"
          >
            <div className="mx-auto max-w-sm rounded-2xl border border-primary/30 bg-gradient-to-br from-yellowSoft/30 to-primary/10 p-8 text-center shadow-soft">
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primaryHover flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-white">M</span>
              </div>
              <h3 className="font-heading text-2xl text-brown">{developer.name}</h3>
              <p className="mt-2 text-sm font-medium text-textSecondary">{developer.role}</p>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {[
                  { label: 'Portfolio', url: developer.portfolio, icon: Globe },
                  { label: 'GitHub', url: developer.github, icon: GitBranch },
                  { label: 'LinkedIn', url: developer.linkedin, icon: Building2 },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-brown transition hover:bg-yellowSoft hover:border-primary"
                    aria-label={link.label}
                  >
                    <link.icon size={16} strokeWidth={2.2} />
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="mt-4 inline-flex items-center gap-1 text-xs text-textSecondary">
                <Mail size={14} />
                Email:
                <a href={`mailto:${developer.email}`} className="font-medium text-primary hover:text-primaryHover">
                  {developer.email}
                </a>
              </p>
            </div>
          </Motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-yellowSoft/20 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl text-brown sm:text-4xl">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-textSecondary">
              Let's create beautiful memories together. Get in touch with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-brown shadow-soft transition hover:bg-primaryHover"
              >
                Book Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 font-semibold text-brown transition hover:border-primary/60"
              >
                View Services
                <Camera size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

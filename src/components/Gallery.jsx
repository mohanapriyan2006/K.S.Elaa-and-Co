import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const Motion = motion

function Gallery({ items, title = 'Gallery Preview' }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">Showcase</p>
            <h2 className="font-heading text-3xl text-brown sm:text-4xl">{title}</h2>
          </div>
          <Link
            to="/services"
            className="inline-flex w-fit rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-brown shadow-soft transition hover:bg-primaryHover"
          >
            View Full Gallery
          </Link>
        </div>

        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3"
        >
          {items.map((item) => (
            <Motion.figure
              key={item.id}
              variants={fadeInUp}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-brown/70 to-transparent p-4 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {item.title}
              </figcaption>
            </Motion.figure>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default Gallery

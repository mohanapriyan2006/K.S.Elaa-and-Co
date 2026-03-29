import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { staggerContainer, fadeInUp } from '../utils/animations'

const Motion = motion

function CategoryGrid({ items, title, subtitle }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">Categories</p>
          <h2 className="font-heading text-3xl text-brown sm:text-4xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-textSecondary">{subtitle}</p>
        </div>

        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <Motion.div key={item.id} variants={fadeInUp}>
              <ServiceCard item={item} />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default CategoryGrid

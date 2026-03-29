import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hoverLift } from '../utils/animations'
import { useLanguage } from '../context/useLanguage'

const Motion = motion

function ServiceCard({ item }) {
  const { language } = useLanguage()
  const linkLabel =
    language === 'ta'
      ? `தஞ்சாவூர் மற்றும் திருச்சியில் ${item.title} சேவை`
      : `${item.title} in Thanjavur and Trichy`
  const altLabel =
    language === 'ta'
      ? `K.S. ELAA & CO வழங்கும் தஞ்சாவூர் மற்றும் திருச்சியில் ${item.title} அலங்காரம்`
      : `${item.title} setup in Thanjavur and Trichy by K.S. ELAA & CO`

  return (
    <Motion.article
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-soft"
    >
      <div className="mx-3 mt-3 overflow-hidden rounded-t-[999px]">
        <Link to={`/${item.slug}`} aria-label={linkLabel}>
          <img
            src={item.image}
            alt={altLabel}
            loading="lazy"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="translate-y-5 rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold text-brown opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {item.title}
        </p>
      </div>
      <div className="px-5 pb-5 pt-4">
        <h3 className="font-heading text-xl text-brown">
          <Link to={`/${item.slug}`} className="hover:underline">
            {item.title}
          </Link>
        </h3>
      </div>
    </Motion.article>
  )
}

export default ServiceCard

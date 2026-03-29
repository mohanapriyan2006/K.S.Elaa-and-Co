import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FilterTabs from '../components/FilterTabs'
import { filterTabs, serviceItems } from '../data/services'

const Motion = motion

function Services() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredItems = useMemo(() => {
    if (activeTab === 'All') return serviceItems
    return serviceItems.filter((item) => item.group === activeTab)
  }, [activeTab])

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumBrown">Portfolio</p>
          <h1 className="font-heading text-4xl text-brown sm:text-5xl">Services & Decor Gallery</h1>
          <p className="max-w-3xl text-textSecondary">
            Explore hand-crafted setups across weddings, celebrations, panthal work, stage designs, and corporate experiences.
          </p>
        </div>

        <FilterTabs tabs={filterTabs} activeTab={activeTab} onChange={setActiveTab} />

        <Motion.div layout className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <Motion.figure
                layout
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-brown/75 to-transparent p-4 text-base font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {item.title}
                </figcaption>
              </Motion.figure>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  )
}

export default Services

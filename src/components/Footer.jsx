import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-border bg-white/90 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="font-heading text-2xl text-brown">K.S. ELAA & CO</p>
          <p className="max-w-md text-sm text-textSecondary">
            Event Planning | Decoration | Panthal
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-medium text-textSecondary">
          <Link to="/" className="transition hover:text-brown">
            Home
          </Link>
          <Link to="/services" className="transition hover:text-brown">
            Services
          </Link>
          <Link to="/contact" className="transition hover:text-brown">
            Contact
          </Link>
        </div>

        <p className="text-sm text-textSecondary">Designed for elegant celebrations across Tamil Nadu.</p>
      </div>
    </footer>
  )
}

export default Footer

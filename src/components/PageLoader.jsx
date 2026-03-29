function PageLoader({ show }) {
  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_top,_#fff9df,_#faf9f6_60%)] transition-opacity duration-300 ${
        show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!show}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <div className="relative">
          <span className="absolute inset-[-10px] rounded-full border-2 border-primary/55 animate-loader-ring" />
          <img
            src="/K-S-Elaa&co-logo.png"
            alt="K.S. ELAA & CO"
            className="h-20 w-20 rounded-full border border-primary/40 object-cover shadow-soft animate-loader-breathe"
          />
        </div>
        <p className="text-sm font-semibold tracking-[0.16em] text-brown/90 sm:text-base">LOADING</p>
      </div>
    </div>
  )
}

export default PageLoader

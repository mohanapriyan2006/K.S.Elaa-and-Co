function Loader({ size = 'md', className = '' }) {
  const sizeClass = size === 'sm' ? 'h-4 w-4 border-2' : 'h-5 w-5 border-[2.5px]'

  return (
    <span
      className={`inline-block animate-spin rounded-full border-current border-r-transparent ${sizeClass} ${className}`}
      aria-hidden="true"
    />
  )
}

export default Loader

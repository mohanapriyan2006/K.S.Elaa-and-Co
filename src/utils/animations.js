export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.3, ease: 'easeIn' } },
}

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } },
}

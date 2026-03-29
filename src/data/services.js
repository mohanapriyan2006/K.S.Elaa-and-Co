// Local image mapping for all 24 gallery images
const images = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });
const galleryImages = Object.values(images).map(img => img.default);

export const serviceItems = [
  {
    id: 'haldi-decoration',
    title: 'Haldi Decoration',
    slug: 'haldi',
    group: 'Wedding',
    image: galleryImages[0] || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    slug: 'engagement',
    group: 'Wedding',
    image: galleryImages[1] || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  },
  {
    id: 'reception',
    title: 'Reception',
    slug: 'reception',
    group: 'Wedding',
    image: galleryImages[20] || 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
  },
  {
    id: 'marriage',
    title: 'Marriage',
    slug: 'marriage',
    group: 'Wedding',
    image: galleryImages[24] || 'https://images.unsplash.com/photo-1519741497674-611481863552',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    slug: 'baby-shower',
    group: 'Celebrations',
    image: galleryImages[13] || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'birthday',
    title: 'Birthday',
    slug: 'birthday',
    group: 'Celebrations',
    image: galleryImages[12] || 'https://images.unsplash.com/photo-1530103862676-fa8c91bbe17d',
  },
  {
    id: 'mannadu-panthal',
    title: 'Mannadu Panthal',
    slug: 'mannadu-panthal',
    group: 'Panthal & Stage',
    image: galleryImages[17] || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'party-decoration',
    title: 'Party Decoration',
    slug: 'party-decoration',
    group: 'Celebrations',
    image: galleryImages[15] || 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
  },
  {
    id: 'panthal-setup',
    title: 'Panthal Setup',
    slug: 'panthal',
    group: 'Panthal & Stage',
    image: galleryImages[16] || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'sports-stage-setup',
    title: 'Sports Stage Setup',
    slug: 'sports-stage',
    group: 'Panthal & Stage',
    image: galleryImages[18] || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    slug: 'corporate-events',
    group: 'Corporate',
    image: galleryImages[19] || 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
  },
]

export const filterTabs = [
  'All',
  'Wedding',
  'Celebrations',
  'Panthal & Stage',
  'Corporate',
]

export const whyChooseUs = [
  {
    title: 'Premium Design',
    description: 'Clean, elegant decoration layouts built to elevate every celebration.',
  },
  {
    title: 'Custom Themes',
    description: 'Every setup is styled to match your story, venue, and event rituals.',
  },
  {
    title: 'Affordable Pricing',
    description: 'Flexible packages that keep quality high while respecting your budget.',
  },
  {
    title: 'Quick Setup',
    description: 'Disciplined planning and on-time execution for stress-free event days.',
  },
]

export const testimonials = [
  {
    name: 'Priya & Arjun',
    quote:
      'They transformed our wedding venue into something timeless. Every detail felt premium and personal.',
  },
  {
    name: 'Nivetha S.',
    quote:
      'From baby shower florals to stage lighting, everything was done with beautiful balance and speed.',
  },
  {
    name: 'RK Industries',
    quote:
      'Their corporate stage and branding decor looked polished, modern, and very professional.',
  },
]

export const galleryPreview = galleryImages.slice(0, 8).map((img, index) => ({
  id: `gallery-${index}`,
  image: img,
  title: `Event Decoration ${index + 1}`,
}))

export const phoneNumber = '919489842773'
export const whatsappNumber = '919489842773'

// Developer Info
export const developer = {
  name: 'MOHANAPRIYAN M',
  role: 'Full Stack Developer',
  portfolio: 'https://mohanapriyan.netlify.app',
  github: 'https://github.com/mohanapriyan2006',
  linkedin: 'https://linkedin.com/in/mohanapriyan-m2006',
  email: 'mohanapriyan.m2006@gmail.com',
}

// Company Social Info
export const companySocial = {
  instagram: 'https://www.instagram.com/k.s.elaa_and__co/',
  facebook: 'https://facebook.com/kselsaa',
  whatsapp: whatsappNumber,
}

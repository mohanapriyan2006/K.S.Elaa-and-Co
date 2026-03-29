import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { routeSeo, siteConfig } from '../seo/seoConfig'

function setMetaByName(name, content) {
  if (!content) return
  let meta = document.head.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  if (!content) return
  let meta = document.head.querySelector(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function setCanonical(href) {
  if (!href) return
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function setJsonLd(id, payload) {
  if (!payload) return
  let script = document.head.querySelector(`script[data-schema-id="${id}"]`)
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.schemaId = id
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(payload)
}

function SeoManager() {
  const location = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const currentPath = location.pathname
    const routeEntry = routeSeo[currentPath]
    const pageSeo = routeEntry?.[language] || routeEntry?.en || {
      title: siteConfig.defaultTitle[language] || siteConfig.defaultTitle.en,
      description: siteConfig.defaultDescription[language] || siteConfig.defaultDescription.en,
      keywords: 'event decorators in Tamil Nadu, wedding decoration near me',
    }
    const serviceName =
      routeEntry?.serviceName?.[language] || routeEntry?.serviceName?.en || routeEntry?.serviceName

    const currentUrl = `${siteConfig.siteUrl}${currentPath}`

    document.title = pageSeo.title
    document.documentElement.setAttribute('lang', language)

    setMetaByName('description', pageSeo.description)
    setMetaByName('keywords', pageSeo.keywords)
    setMetaByName('robots', 'index, follow, max-image-preview:large')
    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', pageSeo.title)
    setMetaByName('twitter:description', pageSeo.description)

    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:title', pageSeo.title)
    setMetaByProperty('og:description', pageSeo.description)
    setMetaByProperty('og:url', currentUrl)
    setMetaByProperty('og:site_name', siteConfig.brandName)

    setCanonical(currentUrl)

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.brandName,
      image: `${siteConfig.siteUrl}/K-S-Elaa&co-logo.png`,
      telephone: siteConfig.phone,
      url: siteConfig.siteUrl,
      areaServed: siteConfig.areaServed,
      openingHours: siteConfig.openingHours,
      sameAs: ['https://www.instagram.com/k.s.elaa_and__co/'],
      priceRange: '$$',
      description: siteConfig.defaultDescription[language] || siteConfig.defaultDescription.en,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    }

    setJsonLd('local-business', localBusinessSchema)

    if (serviceName) {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: serviceName,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.brandName,
        },
        areaServed: siteConfig.areaServed,
      }
      setJsonLd('service-page', serviceSchema)
    }
  }, [language, location.pathname])

  return null
}

export default SeoManager

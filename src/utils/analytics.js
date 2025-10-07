import ReactGA from 'react-ga4'

// Inicializar Google Analytics
export const initGA = (trackingId) => {
  if (trackingId && trackingId !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(trackingId)
  }
}

// Rastrear visualização de página
export const trackPageView = (path = window.location.pathname) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}

// Rastrear cliques em links
export const trackLinkClick = (linkName, linkUrl) => {
  ReactGA.event({
    category: 'Link',
    action: 'Click',
    label: linkName,
    value: linkUrl
  })
}

// Rastrear eventos personalizados
export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  })
}


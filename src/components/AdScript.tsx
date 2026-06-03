import { useEffect } from 'react'

export default function AdScript() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[data-ad-client]')
    if (existingScript) return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX'
    script.crossOrigin = 'anonymous'
    script.dataset.adClient = 'ca-pub-XXXXXXXXXXXXXXXX'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

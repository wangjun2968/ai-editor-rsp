import { useEffect, useRef } from 'react'

interface AdInFeedProps {
  slot: string
  className?: string
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>
  }
}

export default function AdInFeed({ slot, className = '' }: AdInFeedProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (adRef.current && typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({})
      } catch {
        // Ad already loaded or blocked
      }
    }
  }, [])

  return (
    <div className={`ad-infeed ${className}`}>
      <div className="text-xs text-gray-400 text-center mb-1">Sponsored</div>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
      />
    </div>
  )
}

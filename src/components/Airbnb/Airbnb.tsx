import React, { useEffect } from 'react'

export interface AirbnbProps {
  id: string
  reviews: boolean
  nofollow: boolean
}

const Airbnb = ({ id, reviews = true, nofollow = false }: AirbnbProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className='airbnb-embed-frame'
      data-id={id}
      data-view='home'
      data-hide-reviews={!reviews}
      style={{ width: 450, height: 300, margin: 'auto' }}>
      <a
        href={`https://www.airbnb.com/rooms/${id}?source=embed_widget`}
        rel={nofollow ? 'nofollow' : ''}>
        View On Airbnb
      </a>
      <a
        href={`https://www.airbnb.com/rooms/${id}?source=embed_widget`}
        rel={nofollow ? 'nofollow' : ''}>
        Invisible House Joshua Tree | Modern Masterpiece
      </a>
    </div>
  )
}

export default Airbnb

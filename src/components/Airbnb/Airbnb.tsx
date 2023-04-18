import React, { useEffect } from 'react'

export interface AirbnbProps {
  id: string
  name: string
  reviews: boolean
  nofollow: boolean
}

export interface LinksProps {
  id: string
  name: string
  nofollow: boolean
}

const AirbnbStyle = { width: 450, height: 300, margin: 'auto' }

const Airbnb = ({
  id,
  name,
  reviews = true,
  nofollow = false,
}: AirbnbProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      {reviews ? (
        <div
          className='airbnb-embed-frame'
          data-id={id}
          data-view='home'
          style={AirbnbStyle}>
          <Links id={id} nofollow={nofollow} name={name} />
        </div>
      ) : (
        <div
          className='airbnb-embed-frame'
          data-id={id}
          data-view='home'
          data-hide-reviews
          style={AirbnbStyle}>
          <Links id={id} nofollow={nofollow} name={name} />
        </div>
      )}
    </>
  )
}

const Links = ({ id, name, nofollow }: LinksProps) => {
  return (
    <>
      <a
        href={`https://www.airbnb.com/rooms/${id}?source=embed_widget`}
        rel={nofollow ? 'nofollow' : ''}>
        View On Airbnb
      </a>
      <a
        href={`https://www.airbnb.com/rooms/${id}?source=embed_widget`}
        rel={nofollow ? 'nofollow' : ''}>
        {name}
      </a>
    </>
  )
}

export default Airbnb

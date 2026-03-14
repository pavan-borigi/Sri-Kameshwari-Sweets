'use client'
import React from 'react'
import CircularGallery from './CircularGallery'

const ShopGallery: React.FC = () => {
  const galleryItems = [
    { image: '/gallery/kms1.jpeg', text: 'Daily Fresh' },
    { image: '/gallery/kms8.jpeg', text: 'Sweets Display' },
    { image: '/gallery/kms3.jpeg', text: 'Our Counters' },
    { image: '/gallery/kms4.jpeg', text: 'Premium Quality' },
    { image: '/gallery/kms5.jpeg', text: 'Celebration Ready' },
    { image: '/gallery/kms6.jpeg', text: 'Authentic Taste' },
    { image: '/gallery/kms7.jpeg', text: 'Palasa Tradition' },
    { image: '/gallery/kms2.jpeg', text: 'Local Heritage' },
    { image: '/gallery/kms9.jpeg', text: 'Gift Boxes' },
  ]

  return (
    <section style={{ backgroundColor: '#2A0A0A', padding: '5rem 0 3rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ color: '#E8C97B', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
          Take a look inside
        </span>
        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#FDF6E3', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem',
        }}>
          Explore Our Shop
        </h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#C9961F', margin: '0 auto' }} />
        <p style={{ color: '#D4AF7A', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Scroll or swipe through our gallery to see our beautiful storefront, bustling counters, and the wide array of fresh sweets we craft daily.
        </p>
      </div>

      {/* The 3D Interactive Gallery */}
      <div style={{ width: '100%', height: '500px', position: 'relative' }} className="gallery-container">
        <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} font="bold 30px Playfair Display, serif" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-container { height: 380px !important; }
          section { padding: 3rem 0 2rem !important; }
        }
      `}</style>
    </section>
  )
}

export default ShopGallery

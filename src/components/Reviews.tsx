import React from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Ravi Kumar',
    location: 'Palasa',
    rating: 5,
    text: 'Absolutely amazing sweets! The kaju katli melts in your mouth. The shop has a wonderful atmosphere and the staff is very warm and welcoming. Best sweets shop in Palasa!',
    date: 'Recent',
  },
  {
    name: 'Sunitha Devi',
    location: 'Srikakulam',
    rating: 5,
    text: 'I ordered a custom birthday cake and was completely blown away. It was beautiful and tasted incredible. Sri Kameswari Sweets has become my go-to for all special occasions.',
    date: 'Recent',
  },
]

const Reviews: React.FC = () => {
  return (
    <section
      id="reviews"
      style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/reviews-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(61,10,10,0.85) 0%, rgba(20,5,5,0.95) 100%)',
        zIndex: 1,
      }} />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#E8C97B', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
            What Our Customers Say
          </span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#FDF6E3', fontWeight: 700, marginTop: '0.5rem', marginBottom: '0.75rem',
          }}>
            Loved by Palasa
          </h2>
          {/* Google Rating Display */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            backgroundColor: '#fff', border: '1px solid #E5D8C0',
            borderRadius: '999px', padding: '0.5rem 1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#C9961F" color="#C9961F" />)}
            </div>
            <span style={{ fontWeight: 700, color: '#3D0A0A' }}>5.0</span>
            <span style={{ color: '#7A5A3A', fontSize: '0.85rem' }}>• Google Reviews</span>
          </div>
        </div>

        {/* Review Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#fff', borderRadius: '16px',
                padding: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                border: '1px solid #EDD9A3', position: 'relative',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.14)'
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
              }}
            >
              <Quote size={32} style={{ color: '#EDD9A3', marginBottom: '1rem' }} />
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9961F" color="#C9961F" />
                ))}
              </div>
              <p style={{ color: '#5A3A1A', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#3D0A0A', fontSize: '0.95rem' }}>{review.name}</div>
                  <div style={{ color: '#A08060', fontSize: '0.8rem' }}>{review.location}</div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt="Google" style={{ width: '24px', height: '24px', objectFit: 'contain', opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#7A5A3A', marginBottom: '1rem' }}>Join hundreds of happy customers in Palasa</p>
          <a
            href="tel:+918074054803"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: '#C9961F', color: '#fff', padding: '0.85rem 2rem',
              borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
              boxShadow: '0 4px 20px rgba(201,150,31,0.35)',
            }}
          >
            📞 Call to Order — 099635 59190 / 8074054803
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews

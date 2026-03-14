import React from 'react'

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(135deg, #3D0A0A 0%, #6B1A1A 100%)',
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div style={{
        position: 'absolute', right: '-80px', bottom: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,150,31,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
        {/* Image Side */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%', paddingBottom: '100%', position: 'relative',
            background: 'linear-gradient(135deg, rgba(201,150,31,0.15), rgba(232,114,12,0.1))',
            borderRadius: '24px', border: '2px solid rgba(201,150,31,0.3)',
          }}>
            <img
              src="/story-img.jpeg"
              alt="Sri Kameswari Sweets shop interior"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', borderRadius: '22px',
              }}
            />
          </div>
          {/* Floating stat */}
          <div style={{
            position: 'absolute', top: '1rem', right: '-1.5rem',
            backgroundColor: '#C9961F', borderRadius: '12px',
            padding: '1rem 1.25rem', textAlign: 'center',
            boxShadow: '0 8px 32px rgba(201,150,31,0.4)',
          }}>
            <div style={{ color: '#fff', fontSize: '1.75rem', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>5★</div>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>RATED</div>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <span style={{ color: '#E8C97B', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
            Our Story
          </span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: '#FDF6E3', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.25rem',
          }}>
            A Sweet Tradition in the Heart of Palasa
          </h2>
          <div style={{
            padding: '1.5rem',
            border: '1px solid rgba(201,150,31,0.25)',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(201,150,31,0.05), transparent)',
            marginBottom: '2rem',
            position: 'relative',
          }}>
            <p style={{ color: '#D4AF7A', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Sri Kameswari Sweets was born from a passion for authentic flavours and a commitment to quality. Nestled at Indhira Chowk in Palasa, we have been serving the community with the finest traditional sweets, freshly baked goods, and custom celebration cakes.
            </p>
            <p style={{ color: '#D4AF7A', lineHeight: 1.8, marginBottom: 0 }}>
              Every item we make uses the finest ingredients and time-tested recipes. Whether it's a box of mithai for a festival, a custom cake for a birthday, or fresh bakery items for breakfast — we pour our heart into everything we make.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { label: 'Fresh Ingredients', icon: '🌾' },
              { label: 'Daily Baked', icon: '🔥' },
              { label: 'Custom Orders', icon: '🎨' },
              { label: 'Trusted Quality', icon: '✅' },
            ].map((f, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,150,31,0.25)',
                borderRadius: '10px', padding: '0.85rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
                <span style={{ fontSize: '1.25rem' }}>{f.icon}</span>
                <span style={{ color: '#FDF6E3', fontSize: '0.9rem', fontWeight: 600 }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}

export default About

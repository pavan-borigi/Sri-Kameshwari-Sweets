import React from 'react'
import { Star, MapPin, Phone, ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: `linear-gradient(rgba(45, 8, 8, 0.8), rgba(10, 2, 2, 0.95)), url('/hero-bg.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Pattern Overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9961F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative Circle */}
      <div style={{
        position: 'absolute', right: '-150px', top: '10%',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,150,31,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main Content */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        padding: '8rem 1.5rem 4rem',
        gap: '3rem',
      }}
        className="hero-flex"
      >
        {/* Left: Text */}
        <div style={{ flex: 1, minWidth: 0 }} className="hero-content">
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            backgroundColor: 'rgba(201,150,31,0.15)', border: '1px solid rgba(201,150,31,0.4)',
            borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.5rem',
            color: '#E8C97B', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            <Star size={12} fill="#E8C97B" /> Palasa's Favourite Sweets Shop
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            color: '#FDF6E3',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Sri Kameswari<br />
            <span style={{ color: '#C9961F' }}>Sweets</span>
          </h1>

          <p style={{
            color: '#D4AF7A', fontSize: '1.15rem', lineHeight: 1.7,
            fontFamily: 'Lato, sans-serif', marginBottom: '2rem', maxWidth: '480px',
          }}>
            Traditional Indian sweets, freshly baked delights & celebration cakes — crafted daily with love in the heart of Palasa.
          </p>

          <div 
            className="rating-badge"
            style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '12px',
            padding: '0.75rem 1.25rem', marginBottom: '2rem',
            border: '1px solid rgba(201,150,31,0.25)',
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#C9961F" color="#C9961F" />)}
            </div>
            <span style={{ color: '#FDF6E3', fontWeight: 700, fontSize: '1.1rem' }}>5.0</span>
            <span style={{ color: '#A08060', fontSize: '0.85rem' }}>on Google</span>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#menu"
              style={{
                backgroundColor: '#C9961F', color: '#fff', padding: '0.85rem 2rem',
                borderRadius: '999px', textDecoration: 'none', fontWeight: 700,
                fontSize: '0.95rem', letterSpacing: '0.03em',
                transition: 'all 0.2s', display: 'inline-block',
                boxShadow: '0 4px 20px rgba(201,150,31,0.4)',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#E8720C'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C9961F'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Explore Our Menu
            </a>
            <a
              href="tel:+918074054803"
              style={{
                backgroundColor: 'transparent', color: '#FDF6E3', padding: '0.85rem 2rem',
                borderRadius: '999px', textDecoration: 'none', fontWeight: 700,
                fontSize: '0.95rem', border: '2px solid rgba(253,246,227,0.4)',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9961F'; (e.currentTarget as HTMLElement).style.color = '#C9961F' }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(253,246,227,0.4)'; (e.currentTarget as HTMLElement).style.color = '#FDF6E3' }}
            >
              <Phone size={16} /> 099635 59190 / 8074054803
            </a>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: '#A08060' }}>
            <MapPin size={16} />
            <span style={{ fontSize: '0.9rem' }}>Indhira Chowk, Palasa, Andhra Pradesh</span>
          </div>
        </div>

        {/* Right: Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }} className="hero-img-wrap">
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
            <div style={{
              position: 'absolute', inset: '-16px',
              border: '2px solid rgba(201,150,31,0.3)',
              borderRadius: '24px',
              background: 'radial-gradient(ellipse, rgba(201,150,31,0.05) 0%, transparent 70%)',
            }} />
            <img
              src="/newshopfront.jpeg"
              alt="Sri Kameswari Sweets - Storefront"
              style={{
                width: '100%', borderRadius: '20px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                display: 'block',
              }}
            />
            {/* Floating card */}
            <div 
              className="floating-card"
              style={{
              position: 'absolute', bottom: '1.5rem', left: '-1.5rem',
              backgroundColor: 'rgba(75,14,14,0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(201,150,31,0.4)',
              borderRadius: '12px', padding: '0.75rem 1.25rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              <div style={{ color: '#C9961F', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'Playfair Display, serif' }}>Fresh Daily</div>
              <div style={{ color: '#D4AF7A', fontSize: '0.8rem', marginTop: '2px' }}>Made with love & tradition</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', animation: 'bounce 2s infinite' }}>
        <a href="#trust" style={{ color: 'rgba(201,150,31,0.6)', textDecoration: 'none' }}>
          <ChevronDown size={28} />
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 768px) {
          .hero-flex { flex-direction: column !important; padding-top: 6rem !important; gap: 2.5rem !important; }
          .hero-content { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .hero-content h1 { font-size: 2.8rem !important; margin-bottom: 0.5rem !important; }
          .hero-content p { margin-left: auto !important; margin-right: auto !important; font-size: 1rem !important; margin-bottom: 1.5rem !important; }
          .hero-content div { justify-content: center !important; }
          .hero-content .rating-badge { margin-bottom: 1.5rem !important; padding: 0.6rem 1rem !important; }
          .hero-img-wrap .floating-card { left: 50% !important; transform: translateX(-50%) !important; bottom: 1rem !important; width: 80% !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero

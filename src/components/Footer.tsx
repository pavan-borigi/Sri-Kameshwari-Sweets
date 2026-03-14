'use client'
import React from 'react'
import { MapPin, Phone, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  const year = 2026

  return (
    <footer style={{ backgroundColor: '#0A0202', color: '#D4AF7A', fontFamily: 'Lato, sans-serif' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
        {/* Brand & Owner */}
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#C9961F', marginBottom: '0.25rem' }}>Sri Kameswari</div>
          <div style={{ fontSize: '0.7rem', color: '#E8C97B', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem' }}>Sweets & Bakery</div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#A08060', maxWidth: '260px' }}>
            Traditional Indian sweets, celebration cakes, and fresh bakery items — made with love daily in Palasa.
          </p>
          <div style={{ display: 'flex', gap: '2px', marginTop: '1rem', marginBottom: '2rem' }}>
            {[1,2,3,4,5].map(i => (
              <span key={i} style={{ color: '#C9961F', fontSize: '16px' }}>★</span>
            ))}
            <span style={{ color: '#A08060', fontSize: '0.85rem', marginLeft: '0.5rem' }}>5.0 on Google</span>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#FDF6E3', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', letterSpacing: '0.05em' }}>Quick Links</h4>
          {['Home', 'Our Menu', 'About Us', 'Reviews', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, '')}`}
              style={{ display: 'block', color: '#A08060', textDecoration: 'none', marginBottom: '0.6rem', fontSize: '0.9rem', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#C9961F')}
              onMouseOut={e => (e.currentTarget.style.color = '#A08060')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Owner Profile */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <img
            src="/owner-img.jpeg"
            alt="Borigi Rajesh"
            className="owner-portrait"
            style={{
              width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover',
              border: '5px solid rgba(201,150,31,0.6)', padding: '6px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)', marginBottom: '1.25rem'
            }}
          />

      <style>{`
        @media (max-width: 768px) {
          .owner-portrait { width: 160px !important; height: 160px !important; }
          footer > div:first-child { 
            gap: 1.5rem !important; 
            padding-top: 2.5rem !important; 
            padding-bottom: 2rem !important;
          }
          footer h4 { margin-top: 0.5rem !important; margin-bottom: 0.75rem !important; }
          footer p { margin-bottom: 0.75rem !important; }
        }
      `}</style>
          <div style={{ color: '#E8C97B', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>Founder</div>
          <div style={{ color: '#FDF6E3', fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700 }}>Borigi Rajesh</div>
        </div>

        {/* Offerings */}
        <div>
          <h4 style={{ color: '#FDF6E3', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', letterSpacing: '0.05em' }}>What We Offer</h4>
          {['Traditional Sweets', 'Celebration Cakes', 'Fresh Bakery Items', 'Custom Orders', 'Festival Specials'].map(item => (
            <div key={item} style={{ color: '#A08060', marginBottom: '0.6rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#C9961F', fontSize: '0.6rem' }}>✦</span> {item}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#FDF6E3', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', letterSpacing: '0.05em' }}>Contact Us</h4>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem', alignItems: 'flex-start' }}>
            <MapPin size={16} style={{ color: '#C9961F', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.9rem', color: '#A08060', lineHeight: 1.6 }}>
              Indhira Chowk, Palasa,<br />Andhra Pradesh 532221
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Phone size={16} style={{ color: '#C9961F', flexShrink: 0 }} />
            <a href="tel:+918074054803" style={{ color: '#FDF6E3', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
              99635 59190 / 8074054803
            </a>
          </div>
          <a
            href="tel:+918074054803"
            style={{
              display: 'inline-block', backgroundColor: '#C9961F',
              color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '999px',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
            }}
          >
            📞 Call to Order
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(201,150,31,0.15)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ color: '#5A3A1A', fontSize: '0.82rem', margin: 0 }}>
          © {year} Sri Kameswari Sweets, Palasa. All rights reserved.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#A08060', fontSize: '0.82rem' }}>Developed By Pavan Borigi</span>
          <a
            href="https://www.instagram.com/acc_pavan?igsh=MWFueG11YjRlM3JscA=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#C9961F', display: 'inline-flex', alignItems: 'center', transition: 'transform 0.2s', textDecoration: 'none' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Developer Instagram"
          >
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

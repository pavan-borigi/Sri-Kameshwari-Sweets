import React, { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Menu', 'About', 'Reviews', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(75,14,14,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(201,150,31,0.3)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Moving Banner */}
      <div style={{ width: '100%', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.35rem 0', borderBottom: '1px solid rgba(201,150,31,0.2)' }}>
        <div className="marquee-container" style={{ whiteSpace: 'nowrap' }}>
          <span style={{ 
            color: '#FDF6E3', 
            textShadow: '0 0 8px rgba(201,150,31,0.8), 0 0 15px rgba(201,150,31,0.5)', 
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            display: 'inline-block'
          }}>
            Welcome! to Sri Kameshwari Sweets & Bakery.................Bringing sweetness to every celebration!
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', width: '100%' }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none' }}>
           <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', fontWeight: 700, color: '#C9961F', letterSpacing: '0.02em' }}>Sri Kameswari</span>
            <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', color: '#E8C97B', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Sweets & Bakery</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              style={{ color: '#FDF6E3', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em', fontFamily: 'Lato, sans-serif', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#C9961F')}
              onMouseOut={e => (e.currentTarget.style.color = '#FDF6E3')}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+918074054803"
            style={{
              backgroundColor: '#C9961F', color: '#fff', padding: '0.5rem 1.2rem',
              borderRadius: '999px', textDecoration: 'none', fontSize: '0.85rem',
              fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#E8720C')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#C9961F')}
          >
            <Phone size={14} /> Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FDF6E3', display: 'none' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ 
          backgroundColor: 'rgba(75,14,14,0.98)', 
          padding: '1rem 1.5rem 1.5rem',
          animation: 'slideDown 0.3s ease-out forwards',
          transformOrigin: 'top',
        }}>
          {links.map(link => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', color: '#FDF6E3', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid rgba(201,150,31,0.2)', fontFamily: 'Lato, sans-serif' }}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+918074054803"
            style={{ display: 'block', marginTop: '1rem', backgroundColor: '#C9961F', color: '#fff', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', fontWeight: 700 }}
          >
            📞 099635 59190 / 8074054803
          </a>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: scaleY(0.95); }
          to { opacity: 1; transform: scaleY(1); }
        }
        .marquee-container {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar

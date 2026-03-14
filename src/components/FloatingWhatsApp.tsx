import React, { useState } from 'react'

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (!isOpen) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <a
      href="https://wa.me/919963559190"
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp ${isOpen ? 'is-open' : 'is-closed'}`}
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '999px',
        padding: isOpen ? '0.75rem 1.5rem' : '0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: isOpen ? '0.75rem' : '0',
        textDecoration: 'none',
        boxShadow: isOpen ? '0 8px 32px rgba(37, 211, 102, 0.4)' : '0 0 15px rgba(37, 211, 102, 0.6)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        animation: !isOpen ? 'pulseGlow 2s infinite' : 'bounceIn 0.8s ease-out',
        maxWidth: isOpen ? '300px' : '50px',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      <div 
        className="whatsapp-icon-wrap"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#fff', 
          borderRadius: '50%', 
          width: '34px', 
          height: '34px',
          flexShrink: 0,
          transition: 'transform 0.3s'
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#25D366"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </div>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          opacity: isOpen ? 1 : 0,
          transform: `translateX(${isOpen ? '0' : '-10px'})`,
          transition: 'all 0.3s 0.1s'
        }} 
        className="whatsapp-text"
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          Contact for bulk orders
        </span>
        <span style={{ fontSize: '1rem', fontWeight: 700 }}>
          WhatsApp Us
        </span>
      </div>

      <style>{`
        @keyframes bounceIn {
          0% { transform: scale(0.8) translateY(20px); opacity: 0; }
          60% { transform: scale(1.05) translateY(-5px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 10px rgba(37, 211, 102, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 25px rgba(37, 211, 102, 0.8); transform: scale(1.05); }
          100% { box-shadow: 0 0 10px rgba(37, 211, 102, 0.4); transform: scale(1); }
        }
        @media (max-width: 768px) {
          .floating-whatsapp { 
            bottom: 1.5rem !important; 
            right: 1.5rem !important;
          }
          .floating-whatsapp.is-open {
            padding: 0.6rem 1.2rem !important;
            max-width: 240px !important;
          }
          .floating-whatsapp.is-open .whatsapp-text span:first-child {
            font-size: 0.65rem !important;
          }
          .floating-whatsapp.is-open .whatsapp-text span:last-child {
            font-size: 0.85rem !important;
          }
          .whatsapp-icon-wrap {
            width: 30px !important;
            height: 30px !important;
          }
          .whatsapp-icon-wrap svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </a>
  )
}

export default FloatingWhatsApp

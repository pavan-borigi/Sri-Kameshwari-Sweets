'use client'
import React, { useState, useRef } from 'react'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const clickCount = useRef(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    clickCount.current += 1

    if (clickCount.current === 1) {
      timer.current = setTimeout(() => {
        if (clickCount.current === 1) {
          // Single Click Logic
          if (!isOpen) {
            setIsOpen(true)
          } else {
            // If already open, single click navigates
            window.open("https://wa.me/919963559190", "_blank")
          }
        }
        clickCount.current = 0
      }, 250) // 250ms delay to distinguish from double click
    } else if (clickCount.current === 2) {
      if (timer.current) clearTimeout(timer.current)
      // Double Click Logic
      setIsOpen(false)
      clickCount.current = 0
    }
  }

  return (
    <div
      className={`floating-whatsapp-container ${isOpen ? 'is-open' : 'is-closed'}`}
      onClick={handleAction}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        backgroundColor: '#25D366',
        borderRadius: '99px',
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        cursor: 'pointer',
        boxShadow: isOpen ? '0 12px 40px rgba(37, 211, 102, 0.4)' : '0 10px 25px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        animation: !isOpen ? 'pulseGlow 2s infinite' : 'none',
        height: '64px',
        maxWidth: isOpen ? '320px' : '64px',
        overflow: 'hidden',
        border: 'none',
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#ffffff', 
          borderRadius: '50%', 
          width: '48px', 
          height: '48px',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}>
        <MessageCircle size={30} color="#25D366" fill="#25D366" />
      </div>
      
      {isOpen && (
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            marginLeft: '12px',
            marginRight: '12px',
            color: '#fff',
            whiteSpace: 'nowrap',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Contact for bulk orders
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 700 }}>
            WhatsApp Us
          </span>
        </div>
      )}

      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 10px rgba(37, 211, 102, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 25px rgba(37, 211, 102, 0.8); transform: scale(1.03); }
          100% { box-shadow: 0 0 10px rgba(37, 211, 102, 0.4); transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .floating-whatsapp-container { 
            bottom: 1.5rem !important; 
            right: 1.5rem !important;
            height: 56px !important;
            maxWidth: isOpen ? '280px' : '56px' !important;
          }
          .floating-whatsapp-container div:first-child {
            width: 40px !important;
            height: 40px !important;
          }
          .floating-whatsapp-container svg {
            width: 24px !important;
            height: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingWhatsApp


'use client'
import React from 'react'
import { Award, Clock, Heart, Users } from 'lucide-react'

const TrustBar: React.FC = () => {
  const items = [
    { icon: <Award size={28} />, value: '5.0 ★', label: 'Google Rating' },
    { icon: <Clock size={28} />, value: 'Daily Fresh', label: 'Made Every Morning' },
    { icon: <Heart size={28} />, value: 'Traditional', label: 'Family Recipes' },
    { icon: <Users size={28} />, value: 'Local Trust', label: 'Palasa\'s Favourite' },
  ]

  return (
    <section
      id="trust"
      style={{
        background: 'linear-gradient(135deg, #C9961F 0%, #E8720C 100%)',
        padding: '3rem 1.5rem',
      }}
    >
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
      }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', gap: '0.5rem', color: '#fff',
            }}
          >
            <div style={{ opacity: 0.85 }}>{item.icon}</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700 }}>{item.value}</div>
            <div style={{ fontSize: '0.85rem', opacity: 0.85, letterSpacing: '0.05em' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar

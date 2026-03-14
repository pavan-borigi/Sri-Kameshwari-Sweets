'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { categories } from '../data/products'

const Products = () => {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)
  const categoryList = Object.values(categories)

  const handleCategoryClick = (id: string) => {
    setTransitioning(true)
    setTimeout(() => {
      router.push(`/category/${id}`)
    }, 1000)
  }

  return (
    <section id="menu" style={{ backgroundColor: '#FFFDF7', position: 'relative', padding: '5rem 1.5rem', overflow: 'hidden' }}>
      {/* Blurred Background Image */}
      <div style={{
        position: 'absolute',
        inset: '-20px', // slightly larger to hide blur edges
        backgroundImage: 'url(/products-bg-3.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'blur(0px)',
        zIndex: 0,
        opacity: 0.8 // slightly higher opacity for the base image since we are adding a dark overlay
      }} />
      
      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(61,10,10,0.85) 0%, rgba(20,5,5,0.95) 100%)',
        zIndex: 1,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Transition Overlay */}
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#3D0A0A',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.8s ease-in-out',
          opacity: transitioning ? 1 : 0,
          pointerEvents: transitioning ? 'all' : 'none',
          visibility: transitioning ? 'visible' : 'hidden',
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#C9961F', fontSize: '2.5rem', marginBottom: '1rem' }}>Sri Kameswari</h2>
            <div className="loader"></div>
          </div>
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block', color: '#E8C97B', fontSize: '0.8rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
            marginBottom: '0.75rem',
          }}>
            What We Make
          </span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#FDF6E3', fontWeight: 700, marginBottom: '1rem',
          }}>
            Our Specialities
          </h2>
          <p style={{ color: '#E5D8C0', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From traditional sweets to celebration cakes and fresh bakery items — all crafted fresh, every single day.
          </p>
        </div>

        {/* Categories Grid */}
        <div 
          className="category-scroll-container"
          style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem',
        }}>
          {categoryList.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => handleCategoryClick(cat.id)} 
              style={{ textDecoration: 'none', cursor: 'pointer' }} 
              className="category-card"
            >
              <div style={{
                backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)', transition: 'transform 0.3s, box-shadow 0.3s',
                height: '100%', display: 'flex', flexDirection: 'column'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(201,150,31,0.15)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)'
              }}
              >
                {/* Image Placeholder representing the category */}
                <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#f5f0e1', overflow: 'hidden' }}>
                  <img
                    src={cat.items[0]?.image || '/hero_sweets.png'}
                    alt={cat.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(61,10,10,0.8) 0%, transparent 60%)'
                  }} />
                  <h3 style={{
                    position: 'absolute', bottom: '1.2rem', left: '1.5rem',
                    fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700,
                    color: '#FFFDF7', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {cat.title}
                  </h3>
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: '#7A5A3A', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {cat.description}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', color: '#C9961F', fontWeight: 700, fontSize: '0.9rem' }}>
                    Explore {cat.items.length} Items <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="scroll-hint" style={{ display: 'none' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600 }}>SWIPE TO EXPLORE</span>
          <ChevronRight size={18} className="glow-arrow" />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .category-scroll-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1.5rem !important;
            padding: 1rem 0 2rem !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
          }
          .category-scroll-container::-webkit-scrollbar {
            display: none !important;
          }
          .category-card {
            min-width: 85vw !important;
            scroll-snap-align: center !important;
          }
          section#menu {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          section#menu > div {
            padding: 0 1.5rem !important;
          }
          .category-scroll-container {
            margin: 0 -1.5rem !important;
            padding: 1rem 1.5rem 2rem !important;
          }
          .scroll-hint {
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: #C9961F;
            margin-top: 1rem;
            opacity: 0.8;
          }
          .glow-arrow {
            animation: glow 1.5s infinite alternate ease-in-out;
          }
          @keyframes glow {
            from { transform: translateX(0); filter: drop-shadow(0 0 2px rgba(201,150,31,0.4)); }
            to { transform: translateX(8px); filter: drop-shadow(0 0 10px rgba(201,150,31,0.8)); }
          }
          .loader {
            width: 48px;
            height: 48px;
            border: 5px solid #C9961F;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            margin-top: 2rem;
          }

          @keyframes rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        }
        @media (min-width: 769px) {
          .scroll-hint { display: none !important; }
        }
      `}</style>
    </section>
  )
}

export default Products

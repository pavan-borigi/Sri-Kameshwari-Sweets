'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { categories, type CategoryId } from '../data/products'

interface CategoryPageProps {
  id: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ id }) => {
  const categoryId = id as CategoryId
  const category = categories[categoryId]

  // Scroll to top when loading the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!category) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFDF7' }}>
          <h2>Category not found</h2>
          <Link href="/">Return to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFDF7' }}>
      <Navbar />
      
      <main style={{ flex: 1, paddingTop: '120px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <Link href="/" style={{ color: '#C9961F', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem', fontFamily: 'Lato, sans-serif' }}>
              ← Back to Home
            </Link>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3D0A0A', fontWeight: 700, marginBottom: '1rem' }}>
              {category.title}
            </h1>
            <p style={{ color: '#7A5A3A', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontSize: '1.1rem' }}>
              {category.description}
            </p>
          </div>

          {/* Grid of Items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2.5rem',
          }}>
            {category.items.map(item => (
              <div key={item.id} style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: '#f0eada' }}>
                   <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={id === 'sweets'}
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#3D0A0A', fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CategoryPage

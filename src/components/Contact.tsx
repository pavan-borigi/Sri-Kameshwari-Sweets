import React from 'react'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #140505 0%, #2A0A0A 100%)',
        padding: '5rem 1.5rem'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#E8C97B', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
            Find Us
          </span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#FDF6E3', fontWeight: 700, marginTop: '0.5rem',
          }}>
            Visit Us in Palasa
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                icon: <MapPin size={22} />,
                label: 'Address',
                value: 'Indhira Chowk, Palasa\nAndhra Pradesh 532221',
                link: 'https://maps.google.com/?q=QCC6+H8+Palasa,+Andhra+Pradesh',
                linkText: 'Get Directions →',
              },
              {
                icon: <Phone size={22} />,
                label: 'Phone',
                value: '099635 59190 / 8074054803',
                link: 'tel:+918074054803',
                linkText: 'Call Now →',
              },
              {
                icon: <Clock size={22} />,
                label: 'Hours',
                value: 'Mon – Sat: 8 AM – 9 PM\nSunday: 9 AM – 8 PM',
                link: null,
                linkText: null,
              },
              {
                icon: <Instagram size={22} />,
                label: 'Social',
                value: 'Follow us on Instagram',
                link: 'https://www.instagram.com/rajeshdhawan123?igsh=MW94NzlkbjBya2p5Ng==',
                linkText: '@rajeshdhawan123 →',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '16px',
                  padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(201,150,31,0.2)',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(201,150,31,0.1)', borderRadius: '10px',
                  padding: '0.65rem', color: '#E8C97B', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#C9961F', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {item.label}
                  </div>
                  <div style={{ color: '#FDF6E3', fontWeight: 600, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                    {item.value}
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ color: '#E8C97B', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.4rem', display: 'inline-block' }}
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Phone Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #C9961F, #E8720C)',
              borderRadius: '16px', padding: '1.5rem 2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
              flexWrap: 'wrap',
              boxShadow: '0 8px 30px rgba(201,150,31,0.2)',
            }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>Place your order or enquiry</div>
                <div style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700 }}>099635 59190 / 8074054803</div>
              </div>
              <a
                href="tel:+918074054803"
                style={{
                  backgroundColor: '#fff', color: '#C9961F', padding: '0.75rem 1.5rem',
                  borderRadius: '999px', textDecoration: 'none', fontWeight: 700,
                  fontSize: '0.9rem', whiteSpace: 'nowrap', transition: 'transform 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Google Map Embed */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(201,150,31,0.3)' }}>
            <iframe
              title="Sri Kameswari Sweets Location"
              width="100%"
              height="450"
              className="contact-map"
              style={{ border: 0, display: 'block', filter: 'contrast(1.1) opacity(0.9)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6!2d84.411!3d18.776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c4f7e8a000001%3A0x0!2sIndhira+Chowk%2C+Palasa%2C+Andhra+Pradesh+532221!5e0!3m2!1sen!2sin!4v1234567890"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-map { height: 380px !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact

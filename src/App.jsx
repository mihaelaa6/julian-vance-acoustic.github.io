import React, { useState } from 'react';
import { gridData } from './gridData';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('portfolio');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Smooth scroll handler to jump straight to the booking form
  const scrollToBooking = () => {
    document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '0 1rem' }}>
      
      {/* FLOATING NAVIGATION / IDENTITY BAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem 0', sticky: 'top', zIndex: 10 }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.05em' }}>
            {mode === 'portfolio' ? 'JULIAN VANCE // VIRTOSO' : 'VANCE.MGMT // LOGISTICS'}
          </h1>
        </div>
        <button 
          onClick={() => setMode(mode === 'portfolio' ? 'company' : 'portfolio')}
          style={{
            padding: '0.65rem 1.25rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: mode === 'portfolio' ? '#eab308' : '#818cf8',
            color: '#0b0f19',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease'
          }}
        >
          {mode === 'portfolio' ? '💼 Open Manager Dashboard' : '🎻 View Artist Profile'}
        </button>
      </header>

      {/* DYNAMIC HERO SECTION */}
      <section style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        height: '450px',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem',
        backgroundImage: mode === 'portfolio' 
          ? 'linear-gradient(to right, rgba(11, 15, 25, 0.9) 40%, rgba(11, 15, 25, 0.2)), url("https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1600&auto=format&fit=crop&q=80")' 
          : 'linear-gradient(to right, rgba(11, 15, 25, 0.95) 40%, rgba(11, 15, 25, 0.4)), url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&auto=format&fit=crop&q=80")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        transition: 'background-image 0.8s ease'
      }}>
        <div style={{ maxWidth: '550px', textAlign: 'left', zIndex: 2 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.2em', color: mode === 'portfolio' ? '#eab308' : '#818cf8', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            {mode === 'portfolio' ? 'Live World Tour' : 'Box Office & Allocation'}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            {mode === 'portfolio' ? 'Acoustic Solo & Cinematic Orchestration' : '2026 Global Ticket Distribution Metrics'}
          </h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5, marginBottom: '2rem', fontSize: '1rem' }}>
            {mode === 'portfolio' 
              ? 'Experience Julian Vance live shifting seamlessly between the classical execution of the violin strings and the depth of the concert grand piano.'
              : 'Real-time monitoring of scaling ticket metrics, stadium block configurations, venue manifests, and local box office gross yields.'}
          </p>
          <button 
            onClick={scrollToBooking}
            style={{
              padding: '0.85rem 1.75rem',
              borderRadius: '6px',
              border: mode === 'portfolio' ? 'none' : '1px solid #818cf8',
              backgroundColor: mode === 'portfolio' ? '#eab308' : 'transparent',
              color: mode === 'portfolio' ? '#0b0f19' : '#818cf8',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {mode === 'portfolio' ? 'Secure Tickets' : 'Review Booking Terms'}
          </button>
        </div>
      </section>

     {/* DYNAMIC BENTO CANVAS */}
<main className="bento-grid-container">
  {gridData.map((card) => {
    const content = mode === 'portfolio' ? card.portfolioContent : card.companyContent;
    
    return (
      <div
        key={card.id}
        className="bento-card" // 👈 Add this line right here!
        style={{
          gridArea: card.gridArea, // The desktop layout sizing
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '20px',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = mode === 'portfolio' ? '#eab308' : '#818cf8';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              {card.layoutType === 'hero' && (
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.2em', color: mode === 'portfolio' ? '#eab308' : '#818cf8', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                    {mode === 'portfolio' ? '🎻 Virtuoso Profile' : '💼 Agency Routing'}
                  </span>
                  <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em' }}>{content.title}</h2>
                  <p style={{ opacity: 0.7, lineHeight: 1.6, fontSize: '1rem', maxWidth: '650px', marginBottom: '1.5rem' }}>{content.subtitle}</p>
                  <div style={{ fontSize: '0.85rem', opacity: 0.5, fontStyle: 'italic' }}>{content.meta}</div>
                </div>
              )}

              {card.layoutType === 'metric' && (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.5, fontWeight: '600', marginBottom: '0.5rem' }}>{content.title}</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900', color: mode === 'portfolio' ? '#eab308' : '#818cf8', letterSpacing: '-0.02em', margin: '0.5rem 0' }}>
                    {content.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.4 }}>{content.label}</div>
                </div>
              )}

              {card.layoutType === 'eventsList' && (
                <div style={{ textAlign: 'left', width: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', opacity: 0.9 }}>{content.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {content.events.map((evt, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          display: 'flex', 
                          flexDirection: 'row',
                          flexWrap: 'wrap', 
                          gap: '1rem',
                          justifyContent: 'space-between', 
                          padding: '1rem', 
                          backgroundColor: 'rgba(255,255,255,0.02)', 
                          borderRadius: '10px', 
                          border: '1px solid rgba(255,255,255,0.04)', 
                          alignItems: 'center' 
                        }}
                      >
                        <span style={{ fontWeight: 'bold', color: mode === 'portfolio' ? '#eab308' : '#818cf8', minWidth: '100px', flex: '1 1 auto' }}>{evt.date}</span>
                        <span style={{ fontWeight: '600', minWidth: '120px', flex: '1 1 auto' }}>📍 {evt.city}</span>
                        <span style={{ opacity: 0.8, minWidth: '150px', flex: '1 1 auto' }}>🏟️ {evt.stage}</span>
                        <span style={{ opacity: 0.5, minWidth: '150px', flex: '1 1 auto', textAlign: 'right', fontSize: '0.9rem' }}>{evt.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* DETACHED COMPACT GET-IN-TOUCH SUB-CANVAS */}
      <section id="booking-section" style={{ maxWidth: '1200px', width: '100%', backgroundColor: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '3rem', textAlign: 'left', marginTop: '1rem' }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.5rem' }}>
          {mode === 'portfolio' ? 'Concert Booking & Press Inquiries' : 'Acquire Performance Routing Rights'}
        </h3>
        <p style={{ opacity: 0.6, marginBottom: '2rem', fontSize: '0.95rem' }}>
          {mode === 'portfolio' 
            ? 'Reach out directly to Julian’s management office to discuss orchestra residencies, festival lineups, or private sessions.'
            : 'Submit formal corporate venue proposals, contractual riders, and guarantee offers directly to our routing director.'}
        </p>

        <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <input type="text" placeholder="Your Name / Agency" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff' }} />
          <input type="email" placeholder="Contact Email Address" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff' }} />
          <button type="submit" style={{
            padding: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: mode === 'portfolio' ? '#eab308' : '#818cf8',
            color: '#0b0f19',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {formSubmitted ? '✓ Proposal Logged' : 'Submit Inbound Request'}
          </button>
        </form>
      </section>

      {/* BRANDED CONTACT & FAN FOOTER */}
      <footer style={{
        width: '100%',
        maxWidth: '1200px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '4rem 0 3rem 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        textAlign: 'left'
      }}>
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: mode === 'portfolio' ? '#eab308' : '#818cf8' }}>
            {mode === 'portfolio' ? '📬 Fan Mail & Correspondence' : '🏢 Corporate Headquarters'}
          </h4>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>
            {mode === 'portfolio' ? (
              <>
                Julian Vance Creative Co.<br />
                Attn: Fan Mail & Gifts Division<br />
                843 N. San Vicente Blvd, Suite 200<br />
                West Hollywood, CA 90069
              </>
            ) : (
              <>
                Vance Arts Management Group LLC<br />
                Legal, Logistics & Routing Office<br />
                1024 Century Park Drive, Floor 4<br />
                Los Angeles, CA 90067
              </>
            )}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            {[
              { label: 'YT', desc: 'YouTube Live Performances' },
              { label: 'SP', desc: 'Spotify Ambient Tracks' },
              { label: 'IG', desc: 'Instagram Behind The Scenes' },
              { label: 'TW', desc: 'Twitter Updates' }
            ].map((soc, i) => (
              <a 
                key={i} 
                href="#social" 
                title={soc.desc}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(255,255,255,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = mode === 'portfolio' ? '#eab308' : '#818cf8';
                  e.currentTarget.style.backgroundColor = mode === 'portfolio' ? '#eab308' : '#818cf8';
                  e.currentTarget.style.color = '#0b0f19';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                {soc.label}
              </a>
            ))}
          </div>
          <div style={{ fontSize: '0.75rem', opacity: 0.4 }}>
             <p className="footer-metadata">
                © {new Date().getFullYear()} Julian Vance. All rights reserved. <span className="separator">|</span> Powered by zimbru.dev
             </p>
            
          </div>
        
        </div>
      </footer>

    </div>
  );
}

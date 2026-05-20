import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [guests, setGuests] = useState(6);
  const TICKET_PRICE = 45;

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Fun Shui Logo" className="logo-img" />
        <a href="tel:+19193580755" className="btn-secondary">Call Us</a>
      </header>

      <main>
        <section className="hero">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src={`${import.meta.env.BASE_URL}short.mp4`} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2>REARRANGE YOUR REALITY</h2>
            <p>Asheville's Immersive Furniture Playground</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#booking" className="btn-primary">Pick a Portal</a>
              <a href="tel:+19193580755" className="btn-secondary">Talk to a Sommelier</a>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="how-it-works">
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>The Dimension Shift</h2>
              <p style={{ color: 'var(--accent)', letterSpacing: '2px' }}>HOW TO SIP AND DESIGN</p>
            </div>
            
            <div className="bento-grid">
              <div className="bento-item span-8">
                <div className="item-number">01</div>
                <h3>The Base</h3>
                <p>Select your foundational flooring. Vintage rugs, exotic textures, and the starting point of your spatial journey.</p>
              </div>
              <div className="bento-item span-4" style={{ background: 'var(--primary)', border: 'none' }}>
                <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>"The best way to predict the future is to design it."</p>
              </div>
              
              <div className="bento-item span-4">
                <div className="item-number">02</div>
                <h3>Heavy Hitters</h3>
                <p>Hand-select the massive anchors of your room. You point, we prepare.</p>
              </div>
              <div className="bento-item span-8">
                <div className="item-number">03</div>
                <h3>Dimensional Shift</h3>
                <p>Our Fun Shui Butlers perform the heavy lifting. Stay in the flow. Stay with your wine. Watch the space evolve in real-time.</p>
              </div>

              <div className="bento-item span-12" style={{ textAlign: 'center', background: 'linear-gradient(45deg, var(--bg-darker), var(--primary))' }}>
                <div className="item-number">04</div>
                <h3 style={{ fontSize: '3rem' }}>The Finishing Glow</h3>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>Sip, walk, and accessorize. The final layer of art, lighting, and curiosities that make the space yours.</p>
              </div>
            </div>
          </section>

          <section id="booking" className="booking-section">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 900 }}>Open the Portal</h2>
            
            <div style={{ maxWidth: '600px' }}>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>Event Name / Bachelorette Group</label>
                <input type="text" placeholder="THE COSMIC DISCO" style={{ width: '100%' }} />
              </div>

              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>Number of Explorers</label>
                <input 
                  type="number" 
                  value={guests} 
                  onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                  min="1" 
                  style={{ width: '100%' }}
                />
              </div>

              <div className="price-summary" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', opacity: 0.7 }}>
                  <span>Individual Ticket</span>
                  <span>${TICKET_PRICE}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  <span>Total Contribution</span>
                  <span style={{ color: 'var(--accent)' }}>${guests * TICKET_PRICE}</span>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%', cursor: 'pointer' }}>
                Initialize Session
              </button>
              <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                $50 Deposit Required to Anchor the Dimension
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <img src={logo} alt="Fun Shui Logo" style={{ maxWidth: '100px', marginBottom: '2rem', opacity: 0.5 }} />
        <p style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>&copy; 2026 FUN SHUI | ASHEVILLE MULTIVERSE</p>
      </footer>
    </div>
  )
}

export default App

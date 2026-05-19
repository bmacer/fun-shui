import { useState } from 'react'
import './App.css'

function App() {
  const [guests, setGuests] = useState(6);
  const TICKET_PRICE = 45;

  return (
    <div className="app">
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <img src="/logo.png" alt="Fun Shui Logo" className="logo-img" />
          <a href="tel:+19193580755" className="btn-secondary" style={{ position: 'absolute', right: '1rem' }}>Call Us</a>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Ready to play with your space?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Asheville's first social furniture rearrangement experience. 
            Grab a glass, pick your pieces, and let us do the heavy lifting.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn-primary">Book Your Session</a>
            <a href="tel:+19193580755" className="btn-secondary" style={{ margin: 0 }}>Call To Discuss: (919) 358-0755</a>
          </div>
        </section>

        <section id="booking" className="booking-section">
          <div className="section-title">
            <h2>Reserve Your Room</h2>
          </div>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group">
              <label>Group / Bachelorette Name</label>
              <input type="text" placeholder="e.g. Sarah's Last Disco" />
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <input 
                type="number" 
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                min="1" 
                max="20"
              />
              <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                For groups larger than 20, please <a href="tel:+19193580755" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>call us</a>.
              </p>
            </div>

            <div className="price-summary">
              <div className="price-row">
                <span>Individual Ticket</span>
                <span>${TICKET_PRICE}</span>
              </div>
              <div className="price-row">
                <span>Guests</span>
                <span>x {guests}</span>
              </div>
              <div className="price-total">
                <span>Estimated Total</span>
                <span>${guests * TICKET_PRICE}</span>
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
              Create Group & Pay Deposit
            </button>
            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
              Pay a $50 deposit now. We'll email you a link for your guests to pay their individual tickets.
            </p>
          </div>
        </section>

        <section className="how-it-works" style={{ marginTop: '6rem' }}>
          <div className="section-title">
            <h2>How It Works</h2>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-image">Step 01: The Canvas</div>
              <div className="step-content">
                <div className="step-number">01</div>
                <h3>Choose Your Base</h3>
                <p>Start from the ground up. Select from our massive collection of vintage rugs and flooring options to set the mood for your room.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-image">Step 02: Selection</div>
              <div className="step-content">
                <div className="step-number">02</div>
                <h3>Pick the Heavy Hitters</h3>
                <p>Wander through our warehouse and hand-select the sofas, armoires, and tables that speak to you. Don't worry about the weight—just point!</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-image">Step 03: The Muscle</div>
              <div className="step-content">
                <div className="step-number">03</div>
                <h3>The Heavy Lifting</h3>
                <p>Our strapping "Fun Shui Team" takes over. They'll move your selections into place exactly where you want them, so you can keep your hands free for your wine.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-image">Step 04: The Polish</div>
              <div className="step-content">
                <div className="step-number">04</div>
                <h3>Sip and Walk</h3>
                <p>Now for the fun part. Sip your wine and browse our smaller inventory of lamps, art, and decor to put those perfect finishing touches on your masterpiece.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Fun Shui | Asheville, NC</p>
      </footer>
    </div>
  )
}

export default App

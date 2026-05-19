import './App.css'

function App() {
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
            <a href="#" className="btn-primary">Book Your Session</a>
            <a href="tel:+19193580755" className="btn-secondary" style={{ margin: 0 }}>Call To Discuss: (919) 358-0755</a>
          </div>
        </section>

        <section className="how-it-works">
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

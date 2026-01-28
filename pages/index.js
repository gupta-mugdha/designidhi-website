export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1>
          Desig<span style={{color: '#b89b5c'}}>Nidhi</span>
        </h1>
        <p>Architecture · Interior Design · Landscaping</p>
      </header>

      {/* Hero */}
      <section style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1>Natural materials, Modern Architecture</h1>
        <p>Designed for your budget</p>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </section>

      {/* Services */}
      <section className="services">
        <div>
          <h2>Architecture</h2>
          <p>Context-driven residential and small commercial architecture using honest materials and efficient planning.</p>
        </div>
        <div>
          <h2>Interior Design</h2>
          <p>Minimal, functional interiors tailored to how you actually live — not trends.</p>
        </div>
        <div>
          <h2>Landscaping</h2>
          <p>Low-maintenance, climate-aware outdoor spaces that grow beautifully over time.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{marginTop: '3rem', textAlign: 'center'}}>
        <p>
          We believe good design should feel calm, intentional, and accessible. Our work balances material integrity, modern aesthetics, and real-world budgets.
        </p>
      </section>

      {/* Contact */}
      <section style={{marginTop: '3rem', textAlign: 'center'}}>
        <h2>Start a conversation</h2>
        <p>Have a site, a sketch, or just an idea? Let’s talk.</p>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <span>WhatsApp DesigNidhi</span>
        </a>
      </section>

      {/* Footer */}
      <footer>
        © DesigNidhi<br/>
        Natural materials · Modern architecture
      </footer>
    </div>
  )
}


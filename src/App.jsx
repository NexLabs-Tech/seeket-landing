import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Aura</h2>
          </div>
          <nav className="nav">
            <a href="#home">Inicio</a>
            <a href="#features">Características</a>
            <a href="#about">Acerca de</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenido a Aura</h1>
            <p>Transforma tu experiencia digital con nuestra plataforma innovadora</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Comenzar ahora</button>
              <button className="btn btn-secondary">Saber más</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Características principales</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Rápido</h3>
              <p>Rendimiento optimizado para la mejor experiencia de usuario</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Seguro</h3>
              <p>Protección avanzada de datos y privacidad garantizada</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Eficiente</h3>
              <p>Automatización inteligente que ahorra tiempo y recursos</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Acerca de nosotros</h2>
              <p>
                Somos un equipo apasionado por crear soluciones tecnológicas 
                que mejoran la vida de las personas. Con años de experiencia 
                en desarrollo de software, nos especializamos en crear 
                productos innovadores y fáciles de usar.
              </p>
              <button className="btn btn-primary">Conoce más</button>
            </div>
            <div className="about-image">
              <div className="placeholder-image">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Aura</h3>
              <p>Transformando el futuro digital</p>
            </div>
            <div className="footer-section">
              <h4>Enlaces</h4>
              <a href="#home">Inicio</a>
              <a href="#features">Características</a>
              <a href="#about">Acerca de</a>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>email@aura.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Aura. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

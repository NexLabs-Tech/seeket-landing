import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/seeket.png" alt="Seeket" />
          </div>
          <nav className="nav">
            <a href="#marketplace">Marketplace</a>
            <a href="#about">About</a>
            <a href="#ingresar">Ingresar</a>
          </nav>
Entra a nuestro prototipo inic        </div>
      </header>

      {/* Hero Section - Inicio */}
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              El primer marketplace de marketing en LATAM,
              <span className="highlight"> impulsado por IA</span>
            </h1>
            <p className="subtitle">Conectamos agencias de marketing con negocios que quieren crecer.</p>

            <div className="hero-cta">
              <p className="cta-question">¿Eres una agencia de marketing?</p>
              <a href="#agencias-fundadoras" className="btn-primary">
                Valida nuestro prototipo y conviértete en una agencia fundadora
              </a>
              <p className="launch-info">Lanzamiento - Junio 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Negocios Section */}
      <section id="negocios" className="negocios">
        <div className="circle circle-growth circle-left">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
        </div>
        <div className="container">
          <div className="section-header">
            <h2>Para negocios buscando marketing?</h2>
            <p className="section-subtitle">Este es tu lugar</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <h3>Ingresa</h3>
              <p>Cuéntanos tus necesidades marketeras</p>
            </div>
            <div className="step-card">
              <h3>Conecta</h3>
              <p>Descubre la estrategia perfecta para tu negocio</p>
            </div>
            <div className="step-card">
              <h3>Encuentra</h3>
              <p>Encuentra tu agencia ideal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencias Section */}
      <section id="agencias" className="agencias">
        <div className="circle circle-like circle-right">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
          </svg>
        </div>
        <div className="container">
          <div className="section-header">
            <h2>Para agencias de marketing con hambre de crecer</h2>
            <p className="section-subtitle">Tu nuevo canal de clientes está aquí</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <h3>Ingresa</h3>
              <p>Crea tu usuario de agencia</p>
            </div>
            <div className="step-card">
              <h3>Diseña</h3>
              <p>Personaliza tu ficha de agencia con información relevante para tus clientes</p>
            </div>
            <div className="step-card">
              <h3>Gestiona</h3>
              <p>Recibe métricas y estadística de tu perfil</p>
            </div>
            <div className="step-card">
              <h3>Conecta</h3>
              <p>Recibe mayor cantidad de clientes instruidos e interesados en ti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencias Fundadoras Section */}
      <section id="agencias-fundadoras" className="agencias-fundadoras">
        <div className="circle circle-send circle-left">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </div>
        <div className="container">
          <div className="fundadoras-content">
            <div className="fundadoras-header">
              <h2>¿Quieres convertirte en una agencia fundadora?</h2>
              <p className="section-subtitle">Valida nuestro prototipo inicial y recibe beneficios exclusivos</p>
            </div>

            <div className="fundadoras-grid">
              <div className="benefits-box">
                <h3>Como agencia fundadora:</h3>
                <ul>
                  <li>Tendrás los primeros tres meses de suscripción gratis al lanzar la plataforma</li>
                  <li>Luego de esos tres meses, te daremos un 50% de descuento en tu suscripción por todo un año</li>
                  <li>Tendrás la etiqueta de agencia fundadora en tu ficha de agencia, la cual te dará ventaja sobre las demás agencias</li>
                  <li>Podrás acceder y usar la plataforma un mes antes del lanzamiento oficial</li>
                  <li>Podrás probar, evaluar y comentar cambios en la plataforma a lo largo de su desarrollo</li>
                </ul>
              </div>

              <div className="steps-box">
                <h3>Solo sigue estos pasos y sé parte del grupo fundador de Seeket:</h3>
                <ol>
                  <li>Entra a nuestro prototipo inicial <a href="https://seeket-platform.netlify.app/" className="link-inline">(link)</a></li>
                  <li>Abre el instructivo para guiarte por el marketplace <a href="https://drive.google.com/file/d/1NXcHSCHON-vwVGbMbsncV2J1IrCZtO6X/view?usp=sharing" className="link-inline">(Instructivo)</a></li>
                  <li>Cuando termines, danos tus comentarios y recomendaciones en este formulario <a href="#" className="link-inline">(link de formulario)</a></li>
                </ol>
                <p className="confirmation-text">Al terminar el formulario, te enviaremos un correo electrónico confirmando entrada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Negocios Section */}
      <section id="modelo" className="modelo-negocios">
        <div className="container">
          <h2>Nuestro modelo de negocio</h2>
          <div className="modelo-grid">
            <div className="modelo-card">
              <h3>Para negocios</h3>
              <p>Para negocios en busca de publicidad, la plataforma será <strong>totalmente gratis</strong></p>
            </div>
            <div className="modelo-card">
              <h3>Para agencias</h3>
              <p>Para las agencias habrá una suscripción mensual fija de al rededor de <strong>20-30 USD mensuales</strong> por publicar su información y operar en Seeket</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Visión Section */}
      <section id="vision" className="vision">
        <div className="container">
          <h2>Nuestra visión</h2>
          <div className="vision-content">
            <p>Somos un equipo joven que cree que la innovación puede acercarnos aún más a nuestro éxito empresarial.</p>
            <p>Seeket nace para crear puentes entre la creatividad y las oportunidades, entre quienes buscan y quienes pueden transformar.</p>
            <p className="vision-highlight">Este es solo el inicio.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* <div className="footer-brand">
              <img src="/seeket.png" alt="Seeket" className="footer-logo" />
              <p className="footer-tagline">¿Tienes alguna duda? Contáctanos y trabajemos juntos</p>
            </div> */}

            <div className="footer-info">
              <div className="footer-section">
                <p><strong>Email:</strong> conecta@seeket-ai.com</p>
                <p><strong>Teléfono:</strong> +502 55115386</p>
                <p><strong>Ubicación:</strong> Ciudad de Guatemala, Guatemala</p>
              </div>

              <div className="footer-social">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Seeket — Conectamos marketing</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

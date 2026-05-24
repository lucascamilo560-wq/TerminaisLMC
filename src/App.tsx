function App() {
  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <h1 className="hero-title">Terminais LMC</h1>
        <p className="hero-subtitle">Ferramentas digitais para controle real.</p>
        <p className="hero-tagline">Apps para quem não vive no improviso.</p>
        <div className="hero-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Alpha Pro Terminal
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.divideai.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Divide Aí
          </a>
        </div>
      </header>

      {/* Nossos aplicativos */}
      <section className="apps-section" id="apps">
        <h2 className="section-title">Nossos aplicativos</h2>
        <div className="cards">
          {/* Alpha Pro Terminal */}
          <div className="card">
            <div className="card-icon">📊</div>
            <h3 className="card-title">Alpha Pro Terminal</h3>
            <p className="card-description">
              Terminal para traders acompanharem operações, risco, estratégias e gestão com mais disciplina.
            </p>
            <p className="card-note">
              O foco não é promessa. É controle.
            </p>
            <ul className="card-features">
              <li>Controle operacional</li>
              <li>Gestão de risco</li>
              <li>Organização e disciplina</li>
              <li>Ferramenta de apoio ao trader</li>
            </ul>
            <a
              href="https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Baixar na Play Store
            </a>
          </div>

          {/* Divide Aí */}
          <div className="card" id="divide-ai">
            <div className="card-icon">💰</div>
            <h3 className="card-title">Divide Aí</h3>
            <p className="card-description">
              Aplicativo para organizar despesas pessoais e compartilhadas com mais clareza, controle e praticidade.
            </p>
            <ul className="card-features">
              <li>Finanças pessoais</li>
              <li>Despesas compartilhadas</li>
              <li>Grupos e organização</li>
              <li>Controle prático</li>
            </ul>
            <a
              href="https://play.google.com/store/apps/details?id=com.divideai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Baixar na Play Store
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="about-section" id="sobre">
        <h2 className="section-title">Sobre a Terminais LMC</h2>
        <p className="about-text">
          A <strong>Terminais LMC</strong> é uma marca de software voltada para aplicativos práticos, modernos e acessíveis, criados para ajudar pessoas a terem mais controle, organização e clareza no dia a dia.
        </p>
        <p className="about-text">
          Ferramenta não substitui conhecimento, mas ajuda a operar com mais disciplina.
        </p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <a
          href="https://www.instagram.com/terminaislmc/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          @terminaislmc
        </a>
        <p className="footer-copy">© {new Date().getFullYear()} Terminais LMC</p>
      </footer>
    </div>
  )
}

export default App

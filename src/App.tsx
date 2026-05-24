function App() {
  return (
    <div className="app">
      {/* Hero Premium */}
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
        <p className="hero-trust">Aplicativos publicados na Play Store.</p>
      </header>

      {/* Aplicativos */}
      <section className="apps-section" id="apps">
        <h2 className="section-title">Nossos aplicativos</h2>
        <div className="cards">
          {/* Alpha Pro Terminal */}
          <div className="card">
            <div className="card-icon">📊</div>
            <h3 className="card-title">Alpha Pro Terminal</h3>
            <p className="card-subtitle">Controle, risco e disciplina para traders.</p>
            <p className="card-description">
              Acompanhe operações, estratégias e gestão de risco com mais clareza e organização.
            </p>
            <ul className="card-features">
              <li>Controle operacional</li>
              <li>Gestão de risco</li>
              <li>Organização de estratégias</li>
              <li>Apoio à disciplina</li>
            </ul>
            <a
              href="https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Baixar Alpha Pro
            </a>
            <p className="card-disclaimer">
              Operar envolve riscos. O app não garante resultados.
            </p>
          </div>

          {/* Divide Aí */}
          <div className="card">
            <div className="card-icon">💰</div>
            <h3 className="card-title">Divide Aí</h3>
            <p className="card-subtitle">Despesas compartilhadas sem confusão.</p>
            <p className="card-description">
              Organize contas, parcelas, vencimentos e valores a pagar ou receber com mais clareza.
            </p>
            <ul className="card-features">
              <li>Contas compartilhadas</li>
              <li>Controle pessoal</li>
              <li>Parcelas e vencimentos</li>
              <li>Organização financeira</li>
            </ul>
            <a
              href="https://play.google.com/store/apps/details?id=com.divideai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Baixar Divide Aí
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto-section">
        <blockquote className="manifesto-quote">
          Não criamos apps para enfeitar tela.<br />
          Criamos ferramentas para problemas reais.
        </blockquote>
        <p className="manifesto-text">
          A Terminais LMC desenvolve soluções digitais práticas para quem busca mais clareza, organização e controle no dia a dia.
        </p>
      </section>

      {/* Confiança */}
      <section className="trust-section">
        <div className="trust-grid">
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Apps publicados na Play Store</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Tecnologia prática</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Experiência mobile-first</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Foco em controle real</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Marca brasileira de software</span>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-links">
          <a
            href="https://www.instagram.com/terminaislmc/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram @terminaislmc
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Alpha Pro Terminal
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.divideai.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Divide Aí
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Terminais LMC</p>
      </footer>
    </div>
  )
}

export default App

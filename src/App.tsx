const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const DIVIDE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const INSTAGRAM_URL = 'https://www.instagram.com/terminaislmc/'

function CandleIcon() {
  return (
    <svg className="card-svg-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="12" y1="6" x2="12" y2="58" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <rect x="8" y="18" width="8" height="22" rx="2" fill="#00d4ff" opacity="0.85"/>
      <line x1="32" y1="4" x2="32" y2="58" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <rect x="28" y="12" width="8" height="28" rx="2" fill="#0077ff" opacity="0.9"/>
      <line x1="52" y1="10" x2="52" y2="58" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <rect x="48" y="22" width="8" height="18" rx="2" fill="#00d4ff" opacity="0.85"/>
      <polyline points="8,38 20,28 36,34 56,16" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    </svg>
  )
}

function SplitIcon() {
  return (
    <svg className="card-svg-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="#00d4ff" strokeWidth="1.5" opacity="0.3"/>
      <path d="M32 10 L32 54" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M10 32 L54 32" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <rect x="14" y="14" width="16" height="16" rx="3" fill="#00d4ff" opacity="0.7"/>
      <rect x="34" y="34" width="16" height="16" rx="3" fill="#0af5a0" opacity="0.7"/>
      <text x="18" y="26" fontFamily="monospace" fontSize="10" fill="#0a0e1a" fontWeight="bold">R$</text>
      <text x="37" y="46" fontFamily="monospace" fontSize="9" fill="#0a0e1a" fontWeight="bold">÷2</text>
    </svg>
  )
}

function App() {
  return (
    <div className="app">
      {/* Circuit decoration layer */}
      <div className="circuit-bg" aria-hidden="true">
        <div className="circuit-line circuit-h1" />
        <div className="circuit-line circuit-h2" />
        <div className="circuit-line circuit-v1" />
        <div className="circuit-dot circuit-dot1" />
        <div className="circuit-dot circuit-dot2" />
        <div className="circuit-dot circuit-dot3" />
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-mark">
            <span className="brand-lmc">LMC</span>
            <span className="brand-sep" aria-hidden="true" />
            <span className="brand-name">Terminais LMC</span>
          </div>

          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            Apps publicados na Play Store
          </div>

          <h1 className="hero-title">
            Ferramentas digitais<br className="br-desktop" /> para controle real.
          </h1>

          <p className="hero-subtitle">
            Alpha Pro Terminal e Divide Aí: apps para quem não vive no improviso.
          </p>

          <div className="hero-buttons">
            <a
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span className="btn-icon" aria-hidden="true">↗</span>
              Baixar Alpha Pro
            </a>
            <a
              href={DIVIDE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span className="btn-icon" aria-hidden="true">↗</span>
              Baixar Divide Aí
            </a>
          </div>

          <p className="hero-tagline">
            Sem promessa. Sem complicação. Apenas ferramentas práticas para problemas reais.
          </p>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </header>

      {/* ══════════════ APPS ══════════════ */}
      <section className="apps-section" id="apps">
        <div className="apps-inner">
          {/* Alpha Pro Terminal */}
          <article className="card card-alpha">
            <div className="card-glow card-glow-alpha" aria-hidden="true" />
            <div className="card-header">
              <CandleIcon />
              <div className="card-badge card-badge-alpha">Trading</div>
            </div>
            <h2 className="card-title">Alpha Pro Terminal</h2>
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
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-full"
            >
              Baixar Alpha Pro
            </a>
            <p className="card-disclaimer">
              <span aria-label="Aviso">⚠</span> Operar envolve riscos. O app não garante resultados.
            </p>
          </article>

          {/* Divide Aí */}
          <article className="card card-divide">
            <div className="card-glow card-glow-divide" aria-hidden="true" />
            <div className="card-header">
              <SplitIcon />
              <div className="card-badge card-badge-divide">Finanças</div>
            </div>
            <h2 className="card-title card-title-divide">Divide Aí</h2>
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
              href={DIVIDE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-divide btn-full"
            >
              Baixar Divide Aí
            </a>
          </article>
        </div>
      </section>

      {/* ══════════════ POR QUE EXISTE? ══════════════ */}
      <section className="manifesto-section">
        <div className="manifesto-line" aria-hidden="true" />
        <p className="manifesto-label">Por que existe?</p>
        <blockquote className="manifesto-quote">
          Não criamos apps para enfeitar tela.<br />
          Criamos ferramentas para problemas reais.
        </blockquote>
        <div className="manifesto-line" aria-hidden="true" />
      </section>

      {/* ══════════════ CONVERSÃO ══════════════ */}
      <section className="conversion-section">
        <div className="conversion-inner">
          <h2 className="conversion-title">
            Escolha o app que resolve sua necessidade agora.
          </h2>
          <div className="conversion-buttons">
            <a
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Quero mais controle nas operações
            </a>
            <a
              href={DIVIDE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-divide"
            >
              Quero organizar minhas despesas
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-lmc">LMC</span>
          <span className="footer-name">Terminais LMC</span>
        </div>
        <div className="footer-links">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-ig"
          >
            <span aria-hidden="true">◎</span> @terminaislmc
          </a>
          <a
            href={ALPHA_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Alpha Pro Terminal
          </a>
          <a
            href={DIVIDE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Divide Aí
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Terminais LMC. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App

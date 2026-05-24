const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const DIVIDE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const INSTAGRAM_URL = 'https://www.instagram.com/terminaislmc/'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  return (
    <div className="app">
      {/* ══════════════ HERO ══════════════ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-mark">
            <span className="brand-lmc">LMC</span>
            <span className="brand-sep" aria-hidden="true" />
            <span className="brand-name">Terminais LMC</span>
          </div>

          <h1 className="hero-title">
            Ferramentas digitais<br className="br-desktop" /> para controle real.
          </h1>

          <p className="hero-subtitle">
            Apps para quem não vive no improviso.
          </p>

          <p className="hero-support">
            Escolha o que você precisa controlar hoje.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('section-alpha')}
              className="btn btn-primary"
            >
              Trading e operações
            </button>
            <button
              onClick={() => scrollToSection('section-divide')}
              className="btn btn-secondary"
            >
              Contas e despesas
            </button>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </header>

      {/* ══════════════ MANIFESTO ══════════════ */}
      <section className="manifesto-section">
        <div className="manifesto-line" aria-hidden="true" />
        <h2 className="manifesto-title">Nem tudo é o que parece.</h2>
        <blockquote className="manifesto-quote">
          Por trás de uma operação existe risco.<br />
          Por trás de uma conta dividida existe relação.<br />
          Por trás da desorganização existe custo.
        </blockquote>
        <p className="manifesto-text">
          A Terminais LMC cria ferramentas para transformar ruído em clareza.
        </p>
        <div className="manifesto-line" aria-hidden="true" />
      </section>

      {/* ══════════════ ALPHA PRO TERMINAL ══════════════ */}
      <section className="product-section" id="section-alpha">
        <div className="product-inner">
          <h2 className="product-title product-title--alpha">Alpha Pro Terminal</h2>
          <p className="product-call">
            Teste sua estratégia antes de colocar dinheiro real em risco.
          </p>
          <p className="product-desc">
            Para traders que querem mais controle antes, durante e depois da operação. Comece pelo simulador, teste operações, acompanhe robôs e entenda sua estratégia sem usar dinheiro real.
          </p>

          <div className="plan-blocks">
            <div className="plan-block">
              <h3 className="plan-block__title">Comece gratuitamente</h3>
              <ul className="plan-block__list">
                <li>Teste operações sem dinheiro real</li>
                <li>Use banca simulada para praticar</li>
                <li>Acompanhe posições abertas</li>
                <li>Veja histórico de operações</li>
                <li>Teste robôs e estratégias</li>
                <li>Ajuste sua disciplina antes de ir para o real</li>
              </ul>
            </div>

            <div className="plan-block">
              <h3 className="plan-block__title">Plano Avançado</h3>
              <p className="plan-block__text">Para quem quer sair do treino e operar com mais estrutura.</p>
              <ul className="plan-block__list">
                <li>Real Core: área para operações reais</li>
                <li>Conexões com corretoras compatíveis</li>
                <li>Configuração de Trading</li>
                <li>Comunidade</li>
                <li>Alpha Forge</li>
                <li>Histórico</li>
                <li>Ordens Abertas</li>
              </ul>
            </div>

            <div className="plan-block">
              <h3 className="plan-block__title">Plano Alpha Pró</h3>
              <p className="plan-block__text">Para quem quer visão mais completa do mercado.</p>
              <ul className="plan-block__list">
                <li>Tudo do plano Avançado</li>
                <li>Scanner Global</li>
                <li>Data Hub Ômega</li>
                <li>Experiência sem anúncios</li>
                <li>Bright HFT em breve</li>
              </ul>
            </div>
          </div>

          <p className="product-disclaimer">
            ⚠ Operar envolve riscos. O app não garante resultados e não substitui conhecimento, análise e responsabilidade do trader.
          </p>

          <a
            href={ALPHA_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-full"
          >
            Baixar Alpha Pro Terminal
          </a>
        </div>
      </section>

      {/* ══════════════ DIVIDE AÍ ══════════════ */}
      <section className="product-section product-section--divide" id="section-divide">
        <div className="product-inner">
          <h2 className="product-title product-title--divide">Divide Aí</h2>
          <p className="product-call">
            Conta compartilhada sem clareza vira cobrança, esquecimento e desgaste.
          </p>
          <p className="product-desc">
            Para quem divide contas e cansou da confusão. Organize valores a pagar, valores a receber, parcelas, vencimentos e despesas compartilhadas com mais clareza.
          </p>

          <div className="plan-blocks">
            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Comece organizando sua vida financeira</h3>
              <ul className="plan-block__list">
                <li>Dashboard com visão geral</li>
                <li>Controle Pessoal</li>
                <li>Valores a pagar</li>
                <li>Valores a receber</li>
                <li>Parcelas e vencimentos</li>
                <li>Organização básica da rotina financeira</li>
              </ul>
            </div>

            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Divide Aí Premium</h3>
              <p className="plan-block__text">Para quem quer organizar contas junto com outras pessoas.</p>
              <ul className="plan-block__list">
                <li>Divisões compartilhadas</li>
                <li>Blocos financeiros</li>
                <li>Conexões entre usuários</li>
                <li>Pagamentos compartilhados</li>
                <li>Agenda financeira compartilhada</li>
                <li>Exportação em PDF do Controle Pessoal</li>
                <li>Gestão completa de grupos, contas e vencimentos</li>
              </ul>
            </div>

            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Teste Premium</h3>
              <p className="plan-block__text">
                O Divide Aí Premium possui período gratuito via Google Play antes da cobrança mensal, conforme oferta disponível na Play Store.
              </p>
            </div>
          </div>

          <a
            href={DIVIDE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-divide btn-full"
          >
            Baixar Divide Aí
          </a>
        </div>
      </section>

      {/* ══════════════ QUAL APP É PARA VOCÊ? ══════════════ */}
      <section className="compare-section">
        <div className="compare-inner">
          <h2 className="compare-title">Qual app é para você?</h2>
          <div className="compare-cards">
            <div className="compare-card compare-card--alpha">
              <p className="compare-card__text">
                Se você quer testar operações, organizar robôs e acompanhar risco:
              </p>
              <p className="compare-card__app">Alpha Pro Terminal</p>
              <button onClick={() => scrollToSection('section-alpha')} className="btn btn-primary btn-sm">
                Ver mais
              </button>
            </div>
            <div className="compare-card compare-card--divide">
              <p className="compare-card__text">
                Se você quer organizar contas, divisões, parcelas e valores compartilhados:
              </p>
              <p className="compare-card__app compare-card__app--divide">Divide Aí</p>
              <button onClick={() => scrollToSection('section-divide')} className="btn btn-divide btn-sm">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA FINAL ══════════════ */}
      <section className="conversion-section">
        <div className="conversion-inner">
          <h2 className="conversion-title">
            Menos improviso. Mais controle.
          </h2>
          <p className="conversion-text">
            Escolha o app que resolve sua necessidade agora.
          </p>
          <div className="conversion-buttons">
            <a
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Quero testar o Alpha Pro
            </a>
            <a
              href={DIVIDE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-divide"
            >
              Quero conhecer o Divide Aí
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
            @terminaislmc
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

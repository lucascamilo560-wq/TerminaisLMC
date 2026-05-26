import React from 'react'

const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const DIVIDE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const INSTAGRAM_URL = 'https://www.instagram.com/terminaislmc/'

// Atualizar apenas com dados reais da Play Console.
const SOCIAL_PROOF_USERS = '+1.000'
const SOCIAL_PROOF_APPS = '2 apps'
const SOCIAL_PROOF_GOAL = '1 objetivo'
const SOCIAL_PROOF_PROMISES = '0 promessas mágicas'

// Preencher apenas com dados reais coletados na Play Store ou Play Console.
const PLAY_STORE_PROOF = {
  alpha: {
    appName: 'Alpha Pro Terminal',
    rating: '',
    reviewCount: '',
    installs: '',
    storeUrl: ALPHA_PRO_URL,
    reviews: [
      {
        text: '',
        author: 'Usuário da Play Store',
        stars: 5,
      },
    ],
  },
  divide: {
    appName: 'Divide Aí',
    rating: '',
    reviewCount: '',
    installs: '',
    storeUrl: DIVIDE_AI_URL,
    reviews: [
      {
        text: '',
        author: 'Usuário da Play Store',
        stars: 5,
      },
    ],
  },
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function hasPlayStoreData(): boolean {
  const { alpha, divide } = PLAY_STORE_PROOF
  return !!(
    alpha.rating || alpha.reviewCount || alpha.installs || alpha.reviews?.[0]?.text ||
    divide.rating || divide.reviewCount || divide.installs || divide.reviews?.[0]?.text
  )
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function App() {
  return (
    <div className="app">
      {/* ══════════════ 1. HERO ══════════════ */}
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
              className="btn btn-primary btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Trading e operações
            </button>
            <button
              onClick={() => scrollToSection('section-divide')}
              className="btn btn-secondary btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Contas e despesas
            </button>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </header>

      {/* ══════════════ 2. MANIFESTO ══════════════ */}
      <section className="manifesto-section">
        <Reveal>
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
        </Reveal>
      </section>

      {/* ══════════════ 2b. NÚMEROS ══════════════ */}
      <section className="social-proof-section">
        <div className="social-proof-inner">
          <Reveal>
            <h2 className="social-proof-title">Números que mostram a direção</h2>
          </Reveal>
          <div className="social-proof-grid">
            <Reveal className="social-proof-card">
              <span className="social-proof-number">{SOCIAL_PROOF_USERS}</span>
              <p className="social-proof-label">usuários já testaram nossos apps</p>
            </Reveal>
            <Reveal className="social-proof-card">
              <span className="social-proof-number">{SOCIAL_PROOF_APPS}</span>
              <p className="social-proof-label">publicados na Play Store</p>
            </Reveal>
            <Reveal className="social-proof-card">
              <span className="social-proof-number">{SOCIAL_PROOF_GOAL}</span>
              <p className="social-proof-label">mais controle para a vida real</p>
            </Reveal>
            <Reveal className="social-proof-card">
              <span className="social-proof-number">{SOCIAL_PROOF_PROMISES}</span>
              <p className="social-proof-label">ferramentas práticas, não ilusões</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 3. ALPHA PRO — VISÃO GERAL ══════════════ */}
      <section className="product-section" id="section-alpha">
        <Reveal className="product-inner">
          <h2 className="product-title product-title--alpha">Alpha Pro Terminal</h2>
          <p className="product-call">
            Um app para traders que querem testar operações sem dinheiro real antes de arriscar capital.
          </p>
          <div className="product-body">
            <p>
              O simulador de trading do Alpha Pro foi criado para quem quer praticar, organizar estratégias e acompanhar operações com gestão de risco real.
            </p>
            <p>
              O Alpha Pro não foi criado para oferecer atalhos.<br />
              Ele foi criado para ajudar o trader a sair do improviso.
            </p>
            <p>
              Com ele, você pode começar no simulador, testar robôs de trading, acompanhar posições, organizar estratégias, analisar histórico e, quando estiver pronto, evoluir para recursos de operação real com mais estrutura e controle.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ 3a. ALPHA PRO — ANTES E DEPOIS ══════════════ */}
      <section className="before-after-section">
        <div className="before-after-inner">
          <Reveal>
            <h2 className="before-after-title before-after-title--alpha">Antes e depois do Alpha Pro</h2>
          </Reveal>
          <div className="before-after-grid">
            <Reveal className="before-after-card before-after-card--before">
              <span className="before-after-badge">Antes</span>
              <p className="before-after-text">Ideias soltas, testes no impulso e pouca organização.</p>
            </Reveal>
            <Reveal className="before-after-card before-after-card--after before-after-card--alpha">
              <span className="before-after-badge before-after-badge--after">Depois</span>
              <p className="before-after-text">Simulação, histórico, regras, robôs e acompanhamento em um só ambiente.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 3b. ALPHA PRO — PREVIEW ══════════════ */}
      <section className="app-preview-section">
        <div className="app-preview-inner">
          <Reveal>
            <h2 className="app-preview-title app-preview-title--alpha">Veja o Alpha Pro na prática</h2>
            <p className="app-preview-subtitle">Imagens reais do app ajudam você a entender como cada área funciona antes de baixar.</p>
          </Reveal>
          <div className="app-preview-grid">
            {[
              { src: '/screenshots/alpha-pro/simulador.png', label: 'Simulador', text: 'Teste operações sem dinheiro real.' },
              { src: '/screenshots/alpha-pro/Alpha-forge.png', label: 'Alpha Forge', text: 'Crie e organize robôs e estratégias.' },
              { src: '/screenshots/alpha-pro/ordens-abertas.png', label: 'Ordens Abertas', text: 'Acompanhe posições e operações em andamento.' },
              { src: '/screenshots/alpha-pro/real-core.png', label: 'Real Core', text: 'Área de operação real para planos avançados.' },
            ].map((item) => (
              <Reveal className="app-shot-card app-shot-card--alpha" key={item.label}>
                <div className="app-shot-frame">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="app-shot-image"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).classList.add('is-missing')
                    }}
                  />
                  <div className="app-shot-placeholder">
                    <span className="app-shot-placeholder__icon" aria-hidden="true">📱</span>
                    <span className="app-shot-placeholder__text">Adicionar print real</span>
                    <span className="app-shot-placeholder__module">{item.label}</span>
                  </div>
                </div>
                <p className="app-shot-label">{item.label}</p>
                <p className="app-shot-text">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 4. ALPHA PRO — JORNADA NA PRÁTICA ══════════════ */}
      <section className="journey-section">
        <div className="journey-inner">
          <Reveal>
            <h2 className="journey-title journey-title--alpha">Como o Alpha Pro funciona na prática</h2>
          </Reveal>
          <div className="journey-steps">
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">1</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Comece no simulador</h3>
                <p className="journey-step__text">
                  Teste operações sem dinheiro real em um ambiente feito para treino, prática e disciplina.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">2</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Escolha o ativo e pratique sua leitura</h3>
                <p className="journey-step__text">
                  Acompanhe ativos, observe o comportamento do mercado e teste decisões sem expor capital real.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">3</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Teste operações e robôs</h3>
                <p className="journey-step__text">
                  Use robôs e estratégias para acompanhar entradas, saídas, posições abertas e regras operacionais.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">4</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Acompanhe posições, ordens e histórico</h3>
                <p className="journey-step__text">
                  Veja o que está aberto, o que foi executado e o que aconteceu depois da operação.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">5</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Ajuste sua estratégia no Alpha Forge</h3>
                <p className="journey-step__text">
                  Organize ideias, regras e robôs para sair do impulso e trabalhar com lógica e disciplina.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">6</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Evolua para operação real com estrutura</h3>
                <p className="journey-step__text">
                  Nos planos avançados, conecte corretoras compatíveis, configure o trading e acompanhe operações reais com mais controle.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">7</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Amplie sua visão operacional</h3>
                <p className="journey-step__text">
                  No Alpha Pró, recursos como Scanner Global e Data Hub Ômega ajudam a observar mais informações em um só ambiente.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 5. ALPHA PRO — MÓDULOS ══════════════ */}
      <section className="modules-section">
        <div className="modules-inner">
          <Reveal>
            <h2 className="modules-title modules-title--alpha">Módulos principais do Alpha Pro</h2>
          </Reveal>
          <div className="modules-grid">
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Simulador</h3>
              <p className="module-card__text">Ambiente para treinar operações sem dinheiro real.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Alpha Forge</h3>
              <p className="module-card__text">Área para criar, ajustar e organizar robôs e estratégias.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Ordens Abertas</h3>
              <p className="module-card__text">Acompanhamento de operações em andamento.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Histórico</h3>
              <p className="module-card__text">Registro para revisar operações e entender decisões anteriores.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Real Core</h3>
              <p className="module-card__text">Área de operação real para usuários avançados.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Conexões</h3>
              <p className="module-card__text">Integração com corretoras compatíveis.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Scanner Global</h3>
              <p className="module-card__text">Monitoramento ampliado de ativos e informações do mercado.</p>
            </div>
            <div className="module-card module-card--alpha">
              <h3 className="module-card__title">Data Hub Ômega</h3>
              <p className="module-card__text">Central avançada de informações e leitura operacional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 6. ALPHA PRO — PARA QUEM É ══════════════ */}
      <section className="audience-section">
        <div className="audience-inner">
          <div className="audience-box audience-box--alpha">
            <p>
              O Alpha Pro é para quem quer praticar, testar robôs de trading, acompanhar gestão de risco, organizar estratégias e operar com mais disciplina.
            </p>
            <p>
              Não é para quem procura resultados sem esforço.<br />
              É para quem entende que controle vem antes de resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 7. ALPHA PRO — PLANOS ══════════════ */}
      <section className="plans-section">
        <div className="plans-inner">
          <div className="plan-blocks">
            <div className="plan-block">
              <h3 className="plan-block__title">Essencial</h3>
              <ul className="plan-block__list">
                <li>Simulador</li>
                <li>Alpha Forge</li>
                <li>Histórico</li>
                <li>Ordens abertas</li>
                <li>Conformidade</li>
                <li>Ajustes</li>
              </ul>
            </div>
            <div className="plan-block">
              <h3 className="plan-block__title">Avançado</h3>
              <ul className="plan-block__list">
                <li>Real Core</li>
                <li>Conexões</li>
                <li>Configuração de Trading</li>
                <li>Comunidade</li>
                <li>Assistente IA</li>
                <li>Recursos de operação real</li>
              </ul>
            </div>
            <div className="plan-block">
              <h3 className="plan-block__title">Alpha Pró</h3>
              <ul className="plan-block__list">
                <li>Tudo do Avançado</li>
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
            className="btn btn-primary btn-full btn-glow btn-cta-pulse"
          >
            <span className="btn-shine" aria-hidden="true" />
            Baixar Alpha Pro Terminal
          </a>
        </div>
      </section>

      {/* ══════════════ 8. DIVIDE AÍ — VISÃO GERAL ══════════════ */}
      <section className="product-section product-section--divide" id="section-divide">
        <Reveal className="product-inner">
          <h2 className="product-title product-title--divide">Divide Aí</h2>
          <p className="product-call">
            O app para dividir contas sem transformar dinheiro em problema entre pessoas.
          </p>
          <div className="product-body">
            <p>
              Um organizador financeiro para casal, família, amigos e colegas de casa que compartilham despesas.
            </p>
            <p>
              O Divide Aí foi criado para organizar valores a pagar e receber, despesas compartilhadas e contas de casa com mais clareza.
            </p>
            <p>
              Porque uma conta mal combinada não vira só número.<br />
              Vira cobrança chata.<br />
              Vira esquecimento.<br />
              Vira desconforto.<br />
              Vira discussão.
            </p>
            <p>
              Com o Divide Aí, você pode acompanhar valores a pagar, valores a receber, parcelas, vencimentos, divisões e compromissos financeiros em um só lugar.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ 8a. DIVIDE AÍ — ANTES E DEPOIS ══════════════ */}
      <section className="before-after-section before-after-section--divide">
        <div className="before-after-inner">
          <Reveal>
            <h2 className="before-after-title before-after-title--divide">Antes e depois do Divide Aí</h2>
          </Reveal>
          <div className="before-after-grid">
            <Reveal className="before-after-card before-after-card--before">
              <span className="before-after-badge">Antes</span>
              <p className="before-after-text">Conta no WhatsApp, print perdido e cobrança esquecida.</p>
            </Reveal>
            <Reveal className="before-after-card before-after-card--after before-after-card--divide">
              <span className="before-after-badge before-after-badge--after before-after-badge--divide">Depois</span>
              <p className="before-after-text">Divisões, valores, vencimentos e participantes organizados.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 8b. DIVIDE AÍ — PREVIEW ══════════════ */}
      <section className="app-preview-section app-preview-section--divide">
        <div className="app-preview-inner">
          <Reveal>
            <h2 className="app-preview-title app-preview-title--divide">Veja o Divide Aí na prática</h2>
            <p className="app-preview-subtitle">Entenda como o app organiza contas, divisões e vencimentos.</p>
          </Reveal>
          <div className="app-preview-grid">
            {[
              { src: '/screenshots/divide-ai/dashboard.png', label: 'Dashboard', text: 'Visão geral da organização financeira.' },
              { src: '/screenshots/divide-ai/controle-pessoal.png', label: 'Controle Pessoal', text: 'Acompanhe valores, compromissos e rotina financeira.' },
              { src: '/screenshots/divide-ai/minhas-divisoes.png', label: 'Minhas Divisões', text: 'Organize contas compartilhadas com outras pessoas.' },
              { src: '/screenshots/divide-ai/agenda.png', label: 'Agenda', text: 'Acompanhe vencimentos e compromissos financeiros.' },
            ].map((item) => (
              <Reveal className="app-shot-card app-shot-card--divide" key={item.label}>
                <div className="app-shot-frame">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="app-shot-image"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).classList.add('is-missing')
                    }}
                  />
                  <div className="app-shot-placeholder">
                    <span className="app-shot-placeholder__icon" aria-hidden="true">📱</span>
                    <span className="app-shot-placeholder__text">Adicionar print real</span>
                    <span className="app-shot-placeholder__module">{item.label}</span>
                  </div>
                </div>
                <p className="app-shot-label">{item.label}</p>
                <p className="app-shot-text">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 9. DIVIDE AÍ — JORNADA NA PRÁTICA ══════════════ */}
      <section className="journey-section journey-section--divide">
        <div className="journey-inner">
          <Reveal>
            <h2 className="journey-title journey-title--divide">Como o Divide Aí funciona na prática</h2>
          </Reveal>
          <div className="journey-steps">
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">1</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Registre o que precisa controlar</h3>
                <p className="journey-step__text">
                  Adicione contas, valores, parcelas, vencimentos e compromissos financeiros.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">2</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Separe o pessoal do compartilhado</h3>
                <p className="journey-step__text">
                  Organize sua vida financeira sem misturar tudo em conversas, prints e memória.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">3</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Crie divisões com outras pessoas</h3>
                <p className="journey-step__text">
                  Controle quem participa, quem pagou, quem deve e o que ainda precisa ser resolvido.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">4</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Acompanhe valores a pagar e receber</h3>
                <p className="journey-step__text">
                  Veja pendências com clareza antes que virem cobrança desconfortável.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">5</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Use a agenda para não perder vencimentos</h3>
                <p className="journey-step__text">
                  Centralize prazos e compromissos para reduzir esquecimentos.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">6</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Conecte pessoas</h3>
                <p className="journey-step__text">
                  Organize despesas com casal, família, amigos, colegas de casa ou grupos.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--divide">
              <span className="journey-step__number">7</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Exporte e amplie o controle no Premium</h3>
                <p className="journey-step__text">
                  Use recursos colaborativos, blocos financeiros e exportação em PDF quando precisar de mais organização.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 10. DIVIDE AÍ — MÓDULOS ══════════════ */}
      <section className="modules-section modules-section--divide">
        <div className="modules-inner">
          <Reveal>
            <h2 className="modules-title modules-title--divide">Módulos principais do Divide Aí</h2>
          </Reveal>
          <div className="modules-grid">
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Dashboard</h3>
              <p className="module-card__text">Visão geral da organização financeira.</p>
            </div>
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Controle Pessoal</h3>
              <p className="module-card__text">Área para acompanhar valores, compromissos e rotina financeira individual.</p>
            </div>
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Minhas Divisões</h3>
              <p className="module-card__text">Organização de contas compartilhadas.</p>
            </div>
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Conexões</h3>
              <p className="module-card__text">Relação com pessoas que dividem despesas com você.</p>
            </div>
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Agenda</h3>
              <p className="module-card__text">Acompanhamento de vencimentos e compromissos financeiros.</p>
            </div>
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Perfil</h3>
              <p className="module-card__text">Configuração e dados do usuário.</p>
            </div>
            <div className="module-card module-card--divide">
              <h3 className="module-card__title">Premium</h3>
              <p className="module-card__text">Recursos colaborativos, blocos financeiros, agenda compartilhada e exportação em PDF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 11. DIVIDE AÍ — PARA QUEM É ══════════════ */}
      <section className="audience-section">
        <div className="audience-inner">
          <div className="audience-box audience-box--divide">
            <p>
              O Divide Aí é para casais, famílias, amigos, colegas de casa, grupos de viagem e qualquer pessoa que divide despesas e quer menos confusão.
            </p>
            <p>
              Ele ajuda a transformar conta espalhada em organização visível.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 12. DIVIDE AÍ — PLANOS ══════════════ */}
      <section className="plans-section plans-section--divide">
        <div className="plans-inner">
          <div className="plan-blocks">
            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Uso inicial</h3>
              <ul className="plan-block__list">
                <li>Dashboard</li>
                <li>Controle Pessoal</li>
                <li>Organização básica financeira</li>
                <li>Perfil</li>
              </ul>
            </div>
            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Premium</h3>
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
          </div>

          <p className="plans-note">
            O Premium libera os recursos colaborativos para quem quer organizar contas junto com outras pessoas.
          </p>

          <a
            href={DIVIDE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-divide btn-full btn-glow"
          >
            <span className="btn-shine" aria-hidden="true" />
            Baixar Divide Aí
          </a>
        </div>
      </section>

      {/* ══════════════ 13. QUAL APP É PARA VOCÊ? ══════════════ */}
      <section className="compare-section">
        <div className="compare-inner">
          <h2 className="compare-title">Qual app é para você?</h2>
          <div className="compare-cards">
            <div className="compare-card compare-card--alpha">
              <p className="compare-card__app">Alpha Pro Terminal</p>
              <p className="compare-card__text">
                Escolha o Alpha Pro se você quer testar operações, organizar estratégias, acompanhar robôs de trading, monitorar gestão de risco e operar com mais disciplina.
              </p>
              <a
                href={ALPHA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm btn-glow"
              >
                <span className="btn-shine" aria-hidden="true" />
                Baixar Alpha Pro
              </a>
            </div>
            <div className="compare-card compare-card--divide">
              <p className="compare-card__app compare-card__app--divide">Divide Aí</p>
              <p className="compare-card__text">
                Escolha o Divide Aí se você quer organizar despesas compartilhadas, valores a pagar, valores a receber, parcelas, vencimentos e contas de casa.
              </p>
              <a
                href={DIVIDE_AI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-divide btn-sm btn-glow"
              >
                <span className="btn-shine" aria-hidden="true" />
                Baixar Divide Aí
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 13b. AVALIAÇÕES PLAY STORE ══════════════ */}
      {hasPlayStoreData() && (
        <section className="play-proof-section">
          <div className="play-proof-inner">
            <Reveal>
              <h2 className="play-proof-title">Avaliações reais da Play Store</h2>
              <p className="play-proof-subtitle">Comentários e sinais reais de usuários que baixaram nossos apps.</p>
            </Reveal>
            <div className="play-proof-grid">
              {[
                { data: PLAY_STORE_PROOF.alpha, mod: 'alpha' },
                { data: PLAY_STORE_PROOF.divide, mod: 'divide' },
              ].map(({ data, mod }) => {
                const review = data.reviews?.[0]
                const hasContent = data.rating || data.reviewCount || data.installs || review?.text
                if (!hasContent) return null
                return (
                  <Reveal key={mod} className={`play-proof-card play-proof-card--${mod}`}>
                    <p className="play-proof-app-name">{data.appName}</p>
                    {(data.rating || data.reviewCount || data.installs) && (
                      <div className="play-proof-meta">
                        {data.rating && <span className="play-proof-rating">★ {data.rating}</span>}
                        {data.reviewCount && <span className="play-proof-count">{data.reviewCount} avaliações</span>}
                        {data.installs && <span className="play-proof-installs">{data.installs} instalações</span>}
                      </div>
                    )}
                    {review?.text && (
                      <p className="play-proof-review">"{review.text}"</p>
                    )}
                    <p className="play-proof-source">Fonte: Google Play</p>
                    <a
                      href={data.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`play-proof-btn play-proof-btn--${mod}`}
                    >
                      Ver na Play Store
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ 13c. FAQ ══════════════ */}
      <section className="faq-section">
        <div className="faq-inner">
          <Reveal>
            <h2 className="faq-title">Dúvidas rápidas</h2>
          </Reveal>
          <div className="faq-list">
            {[
              {
                q: 'Preciso pagar para baixar?',
                a: 'Você pode baixar e conhecer os apps. Alguns recursos avançados podem depender de assinatura.',
              },
              {
                q: 'O Alpha Pro usa dinheiro real no simulador?',
                a: 'Não. O simulador serve para prática, organização e teste em ambiente simulado.',
              },
              {
                q: 'O Divide Aí serve para casal, família e amigos?',
                a: 'Sim. Ele foi criado para organizar contas compartilhadas entre pessoas.',
              },
              {
                q: 'Os apps estão na Play Store?',
                a: 'Sim. Alpha Pro Terminal e Divide Aí estão publicados na Play Store.',
              },
              {
                q: 'A assinatura libera o quê?',
                a: 'A assinatura libera recursos avançados dentro de cada app, conforme o plano disponível.',
              },
            ].map((item) => (
              <Reveal key={item.q} className="faq-item">
                <p className="faq-question">{item.q}</p>
                <p className="faq-answer">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 14. CTA FINAL ══════════════ */}
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
              className="btn btn-primary btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Quero conhecer o Alpha Pro
            </a>
            <a
              href={DIVIDE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-divide btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Quero conhecer o Divide Aí
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ 15. FOOTER ══════════════ */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-lmc">LMC</span>
          <span className="footer-name">Terminais LMC</span>
        </div>
        <p className="footer-tagline">Ferramentas digitais para controle real.</p>
        <div className="footer-links">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-ig"
          >
            Instagram
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
          <a
            href="mailto:alphaterminallmc@hotmail.com"
            className="footer-link"
          >
            Contato
          </a>
          <a
            href="/termos-de-uso.html"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Termos de Uso
          </a>
          <a
            href="/politica-de-privacidade.html"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Política de Privacidade
          </a>
        </div>
        <p className="footer-email">alphaterminallmc@hotmail.com</p>
        <p className="footer-copy">© {new Date().getFullYear()} Terminais LMC. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App

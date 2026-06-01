import React from 'react'

const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const DIVIDE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const INSTAGRAM_URL = 'https://www.instagram.com/terminaislmc/'

// Atualizar apenas com dados reais da Play Console.
const SOCIAL_PROOF_USERS = ''
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
              Simulação e estratégias
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
            Por trás de uma decisão existe contexto.<br />
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
            {[
              { number: SOCIAL_PROOF_USERS, label: 'usuários já testaram nossos apps' },
              { number: SOCIAL_PROOF_APPS, label: 'publicados na Play Store' },
              { number: SOCIAL_PROOF_GOAL, label: 'mais controle para a vida real' },
              { number: SOCIAL_PROOF_PROMISES, label: 'ferramentas práticas, não ilusões' },
            ]
              .filter((item) => item.number.trim())
              .map((item) => (
                <Reveal className="social-proof-card" key={item.label}>
                  <span className="social-proof-number">{item.number}</span>
                  <p className="social-proof-label">{item.label}</p>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 3. ALPHA PRO — VISÃO GERAL ══════════════ */}
      <section className="product-section" id="section-alpha">
        <Reveal className="product-inner">
          <h2 className="product-title product-title--alpha">Alpha Pro Terminal</h2>
          <p className="product-call">
            Trading no celular com robôs, API e controle real.
          </p>
          <div className="product-body">
            <p>
              Conecte Binance ou Bybit, configure robôs no Alpha Forge, acompanhe ordens, posições e histórico em um terminal criado para quem quer operar com mais estrutura.
            </p>
            <p className="product-complement">
              Comece grátis pelo simulador e evolua para recursos avançados conforme sua necessidade.
            </p>
          </div>
          <div className="product-actions">
            <a
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Baixar Alpha Pro Terminal
            </a>
            <button
              onClick={() => scrollToSection('section-alpha-features')}
              className="btn btn-secondary btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Ver recursos do terminal
            </button>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ 3a. ALPHA PRO — RECURSOS DO TERMINAL ══════════════ */}
      <section className="terminal-features-section" id="section-alpha-features">
        <div className="terminal-features-inner">
          <Reveal>
            <h2 className="terminal-features-title">Recursos do terminal</h2>
            <p className="terminal-features-subtitle">
              Tudo o que você precisa para organizar, acompanhar e evoluir sua rotina operacional em um só ambiente.
            </p>
          </Reveal>
          <div className="terminal-features-grid">
            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Terminal real para centralizar sua rotina</h3>
              <p className="terminal-feature-card__text">
                O Alpha Pro reúne em uma só tela o que normalmente fica espalhado: ordens abertas, posições, histórico, conexões, robôs e configurações.
              </p>
              <p className="terminal-feature-card__text">
                A ideia é simples: menos improviso, mais estrutura para acompanhar o que está acontecendo.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Ordens abertas</li>
                <li>Posições em andamento</li>
                <li>Histórico operacional</li>
                <li>Modo real nos planos avançados</li>
                <li>Interface feita para acompanhamento rápido</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Robôs com regras, não no chute</h3>
              <p className="terminal-feature-card__text">
                No Alpha Forge, você organiza estratégias, configura regras e acompanha robôs dentro do próprio terminal.
              </p>
              <p className="terminal-feature-card__text">
                Em vez de depender só da intuição do momento, você transforma sua lógica em uma estrutura mais clara para testar, ajustar e acompanhar.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Criação de robôs</li>
                <li>Regras configuráveis</li>
                <li>Estratégias organizadas</li>
                <li>Teste no simulador</li>
                <li>Uso avançado conforme o plano</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Conexão com Binance e Bybit</h3>
              <p className="terminal-feature-card__text">
                Nos planos avançados, o Alpha Pro permite conexão por API com corretoras compatíveis, trazendo recursos reais para dentro do terminal.
              </p>
              <p className="terminal-feature-card__text">
                Você mantém sua rotina mais centralizada, com acesso a conexões, ordens, posições e ferramentas de acompanhamento em um ambiente próprio.
              </p>
              <ul className="terminal-feature-card__list">
                <li>API Binance</li>
                <li>API Bybit</li>
                <li>Conexões compatíveis</li>
                <li>Recursos de modo real</li>
                <li>Mais controle dentro do terminal</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Simulador grátis para começar sem pressão</h3>
              <p className="terminal-feature-card__text">
                O simulador não é o produto inteiro. Ele é a porta de entrada.
              </p>
              <p className="terminal-feature-card__text">
                Você usa para conhecer o terminal, testar robôs, entender a lógica da plataforma e ganhar familiaridade antes de avançar para recursos reais.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Entrada gratuita</li>
                <li>Teste de estratégias</li>
                <li>Robôs no ambiente simulado</li>
                <li>Conhecimento da plataforma</li>
                <li>Base antes do modo real</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 3b. ALPHA PRO — ANTES E DEPOIS ══════════════ */}
      <section className="before-after-section">
        <div className="before-after-inner">
          <Reveal>
            <h2 className="before-after-title before-after-title--alpha">Antes e depois do Alpha Pro</h2>
          </Reveal>
          <div className="before-after-grid">
            <Reveal className="before-after-card before-after-card--before">
              <span className="before-after-badge">Antes</span>
              <p className="before-after-text">Corretora aberta, estratégia na cabeça, histórico espalhado e decisão no improviso.</p>
            </Reveal>
            <Reveal className="before-after-card before-after-card--after before-after-card--alpha">
              <span className="before-after-badge before-after-badge--after">Depois</span>
              <p className="before-after-text">Robôs, API, ordens, posições, histórico, simulador e modo real centralizados em um terminal no celular.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 4. ALPHA PRO — PLANOS ══════════════ */}
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
                <li>Recursos avançados de acompanhamento</li>
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

          <p className="alpha-final-cta">
            Do simulador ao modo real, o Alpha Pro é um terminal para quem quer operar com estrutura.
          </p>
          <p className="product-disclaimer">
            ⚠ O app não garante desempenho e não substitui conhecimento, análise e responsabilidade do usuário.
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

      {/* ══════════════ 5. DIVIDE AÍ — VISÃO GERAL ══════════════ */}
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
                Escolha o Alpha Pro para operar no celular com estrutura profissional: robôs, API, ordens, posições, histórico e evolução do simulador ao modo real.
              </p>
              <a
                href={ALPHA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm btn-glow"
              >
                <span className="btn-shine" aria-hidden="true" />
                Baixar Alpha Pro Terminal
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
                q: 'O simulador usa dinheiro real?',
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

import React from 'react'

const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const CONTROLE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
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
    appName: 'ControleAi',
    rating: '',
    reviewCount: '',
    installs: '',
    storeUrl: CONTROLE_AI_URL,
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
            <span className="terminal-header">&gt;</span> Ferramentas digitais<br className="br-desktop" /> para controle real<span className="cursor-blink"></span>
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
              Terminal de trading
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
            Trading no celular com robôs, API e automação.
          </p>
          <div className="product-body">
            <p>
              Conecte Binance ou Bybit, configure robôs no Alpha Forge, acompanhe ordens, posições e histórico em um terminal criado para quem quer operar com mais estrutura.
            </p>
            <p className="product-complement">
              Está começando no trading? Comece pelo simulador grátis, conheça a plataforma, teste estratégias e entenda como os robôs funcionam.
            </p>
            <p className="product-complement">
              Quando estiver preparado, evolua para o Alpha Pró e libere recursos avançados para operar com automação, conexão API, modo real, Scanner, Data Hub e todos os benefícios do plano mais completo.
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
              onClick={() => scrollToSection('alpha-recursos')}
              className="btn btn-secondary btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Ver recursos do terminal
            </button>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ 3a. ALPHA PRO — RECURSOS DO TERMINAL ══════════════ */}
      <section className="terminal-features-section" id="alpha-recursos">
        <div className="terminal-features-inner">
          <Reveal>
            <h2 className="terminal-features-title">Recursos do terminal</h2>
            <p className="terminal-features-subtitle">
              Do simulador grátis ao Alpha Pró, o app foi criado para acompanhar sua evolução dentro de uma estrutura completa.
            </p>
          </Reveal>
          <div className="terminal-features-grid">
            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Terminal real no celular</h3>
              <p className="terminal-feature-card__text">
                O Alpha Pro centraliza módulos importantes para quem quer acompanhar sua rotina operacional com mais organização. Em vez de depender de várias telas soltas, o usuário encontra ordens, posições, histórico, conexões, robôs e configurações dentro de uma estrutura única.
              </p>
              <p className="terminal-feature-card__text">
                Nos planos avançados, o Real Core libera uma camada voltada ao modo real, com recursos pensados para quem precisa acompanhar mais do que uma simples simulação.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Ordens abertas</li>
                <li>Posições em andamento</li>
                <li>Histórico operacional</li>
                <li>Real Core nos planos avançados</li>
                <li>Interface criada para acompanhamento rápido</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Robôs e estratégias no Alpha Forge</h3>
              <p className="terminal-feature-card__text">
                O Alpha Forge é a área onde o usuário organiza robôs, regras e estratégias. A ideia é transformar uma lógica solta em algo mais claro, configurável e fácil de acompanhar.
              </p>
              <p className="terminal-feature-card__text">
                Antes de avançar para recursos reais, o usuário pode testar no simulador, ajustar parâmetros e entender como a estratégia se comporta dentro do terminal.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Criação e organização de robôs</li>
                <li>Regras configuráveis</li>
                <li>Estratégias por lógica operacional</li>
                <li>Testes no simulador</li>
                <li>Evolução para recursos avançados conforme o plano</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Conexão API com Binance e Bybit</h3>
              <p className="terminal-feature-card__text">
                Nos planos avançados, o Alpha Pro oferece conexão por API com corretoras compatíveis como Binance e Bybit. Essa integração permite usar recursos reais do terminal com mais centralização e controle dentro do app.
              </p>
              <p className="terminal-feature-card__text">
                A conexão por API é uma das camadas mais importantes para quem quer sair do uso básico e evoluir para uma rotina mais estruturada.
              </p>
              <ul className="terminal-feature-card__list">
                <li>API Binance</li>
                <li>API Bybit</li>
                <li>Integrações compatíveis</li>
                <li>Recursos de modo real</li>
                <li>Operação e acompanhamento dentro do terminal</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Automação para quem quer mais estrutura</h3>
              <p className="terminal-feature-card__text">
                A automação no Alpha Pro não é apresentada como promessa de resultado. Ela é uma forma de organizar regras, executar estratégias configuradas e reduzir decisões feitas no impulso.
              </p>
              <p className="terminal-feature-card__text">
                Com robôs, regras e integrações compatíveis, o usuário pode evoluir do teste no simulador para uma rotina com mais recursos no Alpha Pró.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Robôs configuráveis</li>
                <li>Estratégias organizadas</li>
                <li>Execução conforme regras</li>
                <li>Integração com recursos avançados</li>
                <li>Mais controle sobre a rotina operacional</li>
              </ul>
            </Reveal>

            <Reveal className="terminal-feature-card">
              <h3 className="terminal-feature-card__title">Simulador grátis como porta de entrada</h3>
              <p className="terminal-feature-card__text">
                O simulador é gratuito porque ele é o primeiro passo da jornada. Ele permite conhecer o terminal, testar estratégias, entender os robôs e explorar a plataforma antes de partir para recursos avançados.
              </p>
              <p className="terminal-feature-card__text">
                Para quem está começando, é o caminho ideal. Para quem quer ir além, o Alpha Pró libera a estrutura mais completa.
              </p>
              <ul className="terminal-feature-card__list">
                <li>Entrada gratuita</li>
                <li>Teste de estratégias</li>
                <li>Robôs em ambiente simulado</li>
                <li>Conhecimento inicial da plataforma</li>
                <li>Evolução para o Alpha Pró</li>
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
              <p className="before-after-text">Robôs, API, ordens, posições, histórico, simulador grátis, modo real e automação em um terminal moderno no celular.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 4. ALPHA PRO — JORNADA ══════════════ */}
      <section className="journey-section">
        <div className="journey-inner">
          <Reveal>
            <h2 className="journey-title journey-title--alpha">Jornada do Alpha</h2>
          </Reveal>
          <div className="journey-steps">
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">1</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Comece pelo simulador grátis</h3>
                <p className="journey-step__text">
                  Conheça o terminal, teste estratégias e entenda como os robôs funcionam sem começar direto pelo modo real.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">2</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Organize robôs no Alpha Forge</h3>
                <p className="journey-step__text">
                  Crie regras, ajuste parâmetros e transforme ideias em estratégias configuráveis.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">3</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Conecte Binance ou Bybit</h3>
                <p className="journey-step__text">
                  Nos planos avançados, use conexão API com corretoras compatíveis para liberar recursos reais do terminal.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">4</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Acompanhe ordens e posições</h3>
                <p className="journey-step__text">
                  Veja atividades em andamento, ordens abertas, posições e histórico em uma interface centralizada.
                </p>
              </div>
            </Reveal>
            <Reveal className="journey-step journey-step--alpha">
              <span className="journey-step__number">5</span>
              <div className="journey-step__content">
                <h3 className="journey-step__title">Evolua para o Alpha Pró</h3>
                <p className="journey-step__text">
                  Libere automação, Scanner, Data Hub, modo real, conexões avançadas e a experiência mais completa do terminal.
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
            <h2 className="modules-title modules-title--alpha">Módulos principais do Alpha</h2>
          </Reveal>
          <div className="modules-grid">
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Simulador</h3>
              <p className="module-card__text">Entrada gratuita para conhecer o terminal, testar estratégias e entender os robôs antes do modo real.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Alpha Forge</h3>
              <p className="module-card__text">Área para criar, organizar e ajustar robôs, regras e estratégias operacionais.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Real Core</h3>
              <p className="module-card__text">Camada avançada para recursos de modo real, acompanhamento e execução com mais estrutura.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Conexões</h3>
              <p className="module-card__text">Integração por API com Binance, Bybit e corretoras compatíveis.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Ordens Abertas</h3>
              <p className="module-card__text">Acompanhamento de ordens, posições e atividades em andamento.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Histórico</h3>
              <p className="module-card__text">Registro para revisar operações, decisões, ajustes e evolução da rotina.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Scanner Global</h3>
              <p className="module-card__text">Monitoramento ampliado de ativos e contexto operacional.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Data Hub Ômega</h3>
              <p className="module-card__text">Central de informações para apoiar leitura, análise e organização dentro do terminal.</p>
            </article>
            <article className="module-card module-card--alpha">
              <h3 className="module-card__title">Assistente IA</h3>
              <p className="module-card__text">Apoio inteligente para leitura, organização e orientação dentro do uso do app.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════ 6. ALPHA PRO — PLANOS ══════════════ */}
      <section className="plans-section" id="alpha-planos">
        <div className="plans-inner">
          <Reveal>
            <h2 className="plans-title plans-title--alpha">Escolha o nível do seu terminal</h2>
            <p className="plans-intro">
              Comece grátis pelo simulador. Quando quiser evoluir, escolha o plano que libera os recursos que você precisa dentro do Alpha Pro Terminal.
            </p>
          </Reveal>
          <div className="plan-blocks">
            <div className="plan-block">
              <h3 className="plan-block__title">Plano Essencial</h3>
              <p className="plan-block__subtitle">Para começar pela plataforma.</p>
              <p className="plan-block__text">
                Ideal para conhecer o terminal, usar o simulador, organizar estratégias iniciais, acessar Alpha Forge, histórico, ordens abertas e recursos básicos do app.
              </p>
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
              <h3 className="plan-block__title">Plano Avançado</h3>
              <p className="plan-block__subtitle">Para quem quer Real Core e conexões.</p>
              <p className="plan-block__text">
                Libera recursos avançados como Real Core, conexões compatíveis, configurações operacionais, comunidade, assistente IA e uma rotina mais completa dentro do terminal.
              </p>
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
              <p className="plan-block__subtitle">Para quem quer a experiência completa.</p>
              <p className="plan-block__text">
                O plano mais completo do Alpha Pro, com automação, Scanner Global, Data Hub Ômega, experiência sem anúncios e acesso aos recursos mais avançados do terminal.
              </p>
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

          <div className="alpha-plan-actions">
            <a
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-full btn-glow btn-cta-pulse"
            >
              <span className="btn-shine" aria-hidden="true" />
              Começar pelo simulador grátis
            </a>
            <button
              onClick={() => scrollToSection('alpha-planos')}
              className="btn btn-secondary btn-glow btn-full"
            >
              <span className="btn-shine" aria-hidden="true" />
              Evoluir para o Alpha Pró
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ 5. CONTROLE AI — VISÃO GERAL ══════════════ */}
      <section className="product-section product-section--divide" id="section-divide">
        <Reveal className="product-inner">
          <h2 className="product-title product-title--divide">ControleAi</h2>
          <p className="product-call">
            O app para dividir contas sem transformar dinheiro em problema entre pessoas.
          </p>
          <div className="product-body">
            <p>
              Um organizador financeiro para casal, família, amigos e colegas de casa que compartilham despesas.
            </p>
            <p>
              O ControleAi foi criado para organizar valores a pagar e receber, despesas compartilhadas e contas de casa com mais clareza.
            </p>
            <p>
              Porque uma conta mal combinada não vira só número.<br />
              Vira cobrança chata.<br />
              Vira esquecimento.<br />
              Vira desconforto.<br />
              Vira discussão.
            </p>
            <p>
              Com o ControleAi, você pode acompanhar valores a pagar, valores a receber, parcelas, vencimentos, divisões e compromissos financeiros em um só lugar.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ 8a. CONTROLE AI — ANTES E DEPOIS ══════════════ */}
      <section className="before-after-section before-after-section--divide">
        <div className="before-after-inner">
          <Reveal>
            <h2 className="before-after-title before-after-title--divide">Antes e depois do ControleAi</h2>
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

      {/* ══════════════ 9. CONTROLE AI — JORNADA NA PRÁTICA ══════════════ */}
      <section className="journey-section journey-section--divide">
        <div className="journey-inner">
          <Reveal>
            <h2 className="journey-title journey-title--divide">Como o ControleAi funciona na prática</h2>
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

      {/* ══════════════ 10. CONTROLE AI — MÓDULOS ══════════════ */}
      <section className="modules-section modules-section--divide">
        <div className="modules-inner">
          <Reveal>
            <h2 className="modules-title modules-title--divide">Módulos principais do ControleAi</h2>
          </Reveal>
          <div className="modules-grid">
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Dashboard</h3>
              <p className="module-card__text">Visão geral da organização financeira.</p>
            </article>
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Controle Pessoal</h3>
              <p className="module-card__text">Área para acompanhar valores, compromissos e rotina financeira individual.</p>
            </article>
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Minhas Divisões</h3>
              <p className="module-card__text">Organização de contas compartilhadas.</p>
            </article>
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Conexões</h3>
              <p className="module-card__text">Relação com pessoas que dividem despesas com você.</p>
            </article>
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Agenda</h3>
              <p className="module-card__text">Acompanhamento de vencimentos e compromissos financeiros.</p>
            </article>
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Perfil</h3>
              <p className="module-card__text">Configuração e dados do usuário.</p>
            </article>
            <article className="module-card module-card--divide">
              <h3 className="module-card__title">Premium</h3>
              <p className="module-card__text">Recursos colaborativos, blocos financeiros, agenda compartilhada e exportação em PDF.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════ 11. CONTROLE AI — PARA QUEM É ══════════════ */}
      <section className="audience-section">
        <div className="audience-inner">
          <div className="audience-box audience-box--divide">
            <p>
              O ControleAi é para casais, famílias, amigos, colegas de casa, grupos de viagem e qualquer pessoa que divide despesas e quer menos confusão.
            </p>
            <p>
              Ele ajuda a transformar conta espalhada em organização visível.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 12. CONTROLE AI — PLANOS ══════════════ */}
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
            href={CONTROLE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-divide btn-full btn-glow"
          >
            <span className="btn-shine" aria-hidden="true" />
            Baixar ControleAi
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
                Escolha o Alpha Pro se você quer um terminal de trading no celular com robôs, Alpha Forge, conexão API com Binance e Bybit, modo real, ordens abertas, histórico, automação e simulador grátis para começar.
              </p>
              <a
                href={ALPHA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm btn-glow"
              >
                <span className="btn-shine" aria-hidden="true" />
                Conhecer recursos avançados
              </a>
            </div>
            <div className="compare-card compare-card--divide">
              <p className="compare-card__app compare-card__app--divide">ControleAi</p>
              <p className="compare-card__text">
                Escolha o ControleAi se você quer organizar despesas compartilhadas, valores a pagar, valores a receber, parcelas, vencimentos e contas de casa.
              </p>
              <a
                href={CONTROLE_AI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-divide btn-sm btn-glow"
              >
                <span className="btn-shine" aria-hidden="true" />
                Baixar ControleAi
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
                q: 'O ControleAi serve para casal, família e amigos?',
                a: 'Sim. Ele foi criado para organizar contas compartilhadas entre pessoas.',
              },
              {
                q: 'Os apps estão na Play Store?',
                a: 'Sim. Alpha Pro Terminal e ControleAi estão publicados na Play Store.',
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
              Evoluir para o Alpha Pró
            </a>
            <a
              href={CONTROLE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-divide btn-glow"
            >
              <span className="btn-shine" aria-hidden="true" />
              Quero conhecer o ControleAi
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
            href={CONTROLE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            ControleAi
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

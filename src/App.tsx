import React from 'react'
import { SiteLayout } from './SiteLayout'

const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const CONTROLE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const SUPPORT_EMAIL = 'alphaterminallmc@hotmail.com'

type IconName = 'arrow' | 'chart' | 'wallet' | 'anchor' | 'shield' | 'phone' | 'layers' | 'users' | 'file' | 'check' | 'mail'

type Product = {
  name: string
  route: string
  category: string
  description: string
  accent: 'navy' | 'teal' | 'blue'
  icon: IconName
  status: string
}

const products: Product[] = [
  {
    name: 'Alpha Pro Terminal',
    route: '/alpha-pro',
    category: 'Trading e automação',
    description: 'Terminal móvel para organizar estratégias, simulação, robôs, conexões por API e acompanhamento operacional.',
    accent: 'navy',
    icon: 'chart',
    status: 'Disponível na Google Play',
  },
  {
    name: 'ControleAi',
    route: '/controleai',
    category: 'Finanças pessoais e compartilhadas',
    description: 'Organização de despesas, dívidas, parcelas, vencimentos e contas divididas entre pessoas.',
    accent: 'blue',
    icon: 'wallet',
    status: 'Disponível na Google Play',
  },
  {
    name: 'BordoAi',
    route: '/bordoai',
    category: 'Vida profissional marítima',
    description: 'Escala, certificados, rotina a bordo, tempo de embarque, diário, contatos e backup local.',
    accent: 'teal',
    icon: 'anchor',
    status: 'Em testes internos',
  },
]

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    chart: <><path d="M4 19V9M9 19V5M14 19v-7M19 19V3" /><path d="m3 8 5-3 5 5 7-7" /></>,
    wallet: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M16 10h5v5h-5a2.5 2.5 0 0 1 0-5Z" /><path d="M6 6V4h11" /></>,
    anchor: <><circle cx="12" cy="5" r="2" /><path d="M12 7v14M5 11H3v2a9 9 0 0 0 18 0v-2h-2M7 17l5 4 5-4" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="content-width content-width--narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card product-card--${product.accent}`}>
      <div className="product-card-topline">
        <span className="product-icon"><Icon name={product.icon} /></span>
        <span className="product-status">{product.status}</span>
      </div>
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <a href={product.route} className="text-link">Conhecer produto <Icon name="arrow" size={18} /></a>
    </article>
  )
}

function Feature({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return (
    <article className="feature-card">
      <span className="feature-icon"><Icon name={icon} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}
    </ul>
  )
}

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="content-width home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">PRODUTOS DIGITAIS INDEPENDENTES</span>
            <h1>Tecnologia prática para decisões mais organizadas.</h1>
            <p>
              A Terminais LMC desenvolve aplicativos para três rotinas diferentes: operação de trading, organização financeira e vida profissional marítima.
            </p>
            <div className="button-row">
              <a href="/aplicativos" className="button button--primary">Conhecer aplicativos <Icon name="arrow" size={18} /></a>
              <a href="/sobre" className="button button--secondary">Sobre a Terminais LMC</a>
            </div>
          </div>

          <div className="home-hero-panel" aria-label="Áreas de atuação">
            <div className="home-hero-panel-header">
              <span>Portfólio atual</span>
              <strong>3 produtos</strong>
            </div>
            {products.map((product) => (
              <a key={product.name} href={product.route} className="hero-product-row">
                <span className={`hero-product-icon hero-product-icon--${product.accent}`}><Icon name={product.icon} /></span>
                <span><strong>{product.name}</strong><small>{product.category}</small></span>
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="content-width">
          <div className="section-heading">
            <span className="eyebrow">PORTFÓLIO</span>
            <h2>Uma empresa, necessidades diferentes.</h2>
            <p>Cada produto possui identidade e finalidade próprias, sem transformar funções complexas em promessas simples.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.name} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="content-width split-section">
          <div>
            <span className="eyebrow">PRINCÍPIOS</span>
            <h2>Produtos construídos para uso real.</h2>
            <p className="lead-copy">
              O foco da Terminais LMC é transformar processos dispersos em interfaces claras, com evolução contínua e responsabilidade sobre o que é informado ao usuário.
            </p>
          </div>
          <div className="feature-grid feature-grid--compact">
            <Feature icon="layers" title="Estrutura" text="Informações, ferramentas e fluxos reunidos em uma experiência coerente." />
            <Feature icon="shield" title="Responsabilidade" text="Comunicação transparente sobre limites, riscos e natureza informativa dos recursos." />
            <Feature icon="phone" title="Uso móvel" text="Produtos desenhados para rotinas que acontecem no celular, dentro e fora do escritório." />
            <Feature icon="users" title="Evolução prática" text="Melhorias orientadas por uso, testes e problemas observados no cotidiano." />
          </div>
        </div>
      </section>

      <section className="maritime-callout">
        <div className="content-width maritime-callout-inner">
          <div className="maritime-callout-icon"><Icon name="anchor" size={30} /></div>
          <div>
            <span className="eyebrow">CENTRAL PÚBLICA</span>
            <h2>Serviços oficiais da Marinha organizados para aquaviários.</h2>
            <p>PREPOM, documentação, Capitanias, agendamento, meteorologia, marés e outros acessos oficiais reunidos em uma página atualizável.</p>
          </div>
          <a href="/bordoai/servicos-da-marinha" className="button button--light">Abrir área marítima <Icon name="arrow" size={18} /></a>
        </div>
      </section>
    </>
  )
}

function AppsPage() {
  return (
    <>
      <PageIntro eyebrow="APLICATIVOS" title="Soluções digitais da Terminais LMC" description="Conheça os produtos atuais, suas finalidades e os caminhos para acessar cada experiência." />
      <section className="section section--white section--first">
        <div className="content-width product-grid product-grid--large">
          {products.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>
      </section>
    </>
  )
}

function AlphaProPage() {
  return (
    <>
      <section className="product-hero product-hero--navy">
        <div className="content-width product-hero-grid">
          <div>
            <span className="eyebrow eyebrow--light">ALPHA PRO TERMINAL</span>
            <h1>Estrutura operacional para trading no celular.</h1>
            <p>Simulação, organização de estratégias, robôs, histórico, conexões por API e recursos de acompanhamento em uma única experiência.</p>
            <div className="button-row">
              <a href={ALPHA_PRO_URL} target="_blank" rel="noopener noreferrer" className="button button--light">Abrir na Google Play <Icon name="arrow" size={18} /></a>
              <a href="#recursos" className="button button--ghost-light">Ver recursos</a>
            </div>
          </div>
          <div className="product-hero-summary">
            <span className="product-hero-summary-icon"><Icon name="chart" size={36} /></span>
            <strong>Do simulador ao modo real</strong>
            <p>Uma jornada progressiva para conhecer a plataforma, testar estratégias e liberar recursos avançados conforme o plano.</p>
          </div>
        </div>
      </section>

      <section className="section section--white" id="recursos">
        <div className="content-width">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">RECURSOS CENTRAIS</span>
            <h2>Uma base única para organizar a rotina operacional.</h2>
          </div>
          <div className="feature-grid">
            <Feature icon="chart" title="Simulador" text="Ambiente de entrada para conhecer o terminal e testar estratégias sem começar diretamente no modo real." />
            <Feature icon="layers" title="Alpha Forge" text="Área para estruturar robôs, regras, parâmetros e estratégias configuráveis." />
            <Feature icon="shield" title="Real Core" text="Camada avançada para conexões compatíveis, acompanhamento e recursos de modo real." />
            <Feature icon="file" title="Histórico operacional" text="Registro de ordens, posições e atividades para revisão da rotina." />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="content-width split-section split-section--balanced">
          <div>
            <span className="eyebrow">POSICIONAMENTO</span>
            <h2>Automação não substitui conhecimento.</h2>
            <p className="lead-copy">O Alpha Pro organiza regras e ferramentas. Resultados dependem do mercado, da estratégia, das configurações e da responsabilidade do usuário.</p>
          </div>
          <CheckList items={['Simulador gratuito para entrada', 'Robôs e estratégias configuráveis', 'Conexões API compatíveis com Binance e Bybit', 'Planos com recursos progressivos', 'Sem promessa de desempenho']} />
        </div>
      </section>
    </>
  )
}

function ControleAiPage() {
  return (
    <>
      <section className="product-hero product-hero--blue">
        <div className="content-width product-hero-grid">
          <div>
            <span className="eyebrow eyebrow--light">CONTROLEAI</span>
            <h1>Organização financeira para a vida real e compartilhada.</h1>
            <p>Controle de despesas pessoais, valores a pagar e receber, dívidas, parcelas, vencimentos e divisões entre pessoas.</p>
            <div className="button-row">
              <a href={CONTROLE_AI_URL} target="_blank" rel="noopener noreferrer" className="button button--light">Abrir na Google Play <Icon name="arrow" size={18} /></a>
              <a href="#recursos" className="button button--ghost-light">Ver recursos</a>
            </div>
          </div>
          <div className="product-hero-summary">
            <span className="product-hero-summary-icon"><Icon name="wallet" size={36} /></span>
            <strong>Clareza entre pessoas</strong>
            <p>Menos contas espalhadas, menos cobrança esquecida e mais visibilidade sobre compromissos financeiros.</p>
          </div>
        </div>
      </section>

      <section className="section section--white" id="recursos">
        <div className="content-width">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">RECURSOS CENTRAIS</span>
            <h2>Controle pessoal e compartilhado em um só aplicativo.</h2>
          </div>
          <div className="feature-grid">
            <Feature icon="wallet" title="Controle pessoal" text="Receitas, despesas, parcelas, vencimentos e visão organizada da situação financeira." />
            <Feature icon="users" title="Despesas compartilhadas" text="Divisões entre casal, família, amigos, colegas de casa e grupos." />
            <Feature icon="file" title="Exportação em PDF" text="Geração de relatórios para registro e compartilhamento, conforme o plano disponível." />
            <Feature icon="layers" title="Blocos e agenda" text="Organização por grupos, compromissos e contextos financeiros diferentes." />
          </div>
        </div>
      </section>
    </>
  )
}

function BordoAiPage() {
  return (
    <>
      <section className="product-hero product-hero--teal">
        <div className="content-width product-hero-grid">
          <div>
            <span className="eyebrow eyebrow--light">BORDOAI</span>
            <h1>Organização profissional para quem trabalha embarcado.</h1>
            <p>Um aplicativo local-first para administrar escala, certificados, rotina, tempo de embarque, diário e informações profissionais sem depender de conexão permanente.</p>
            <div className="button-row">
              <a href="/bordoai/servicos-da-marinha" className="button button--light">Abrir área marítima <Icon name="arrow" size={18} /></a>
              <a href="#recursos" className="button button--ghost-light">Ver recursos</a>
            </div>
          </div>
          <div className="product-hero-summary">
            <span className="product-hero-summary-icon"><Icon name="anchor" size={36} /></span>
            <strong>Em testes internos</strong>
            <p>O BordoAi está sendo validado antes da distribuição mais ampla, com foco em precisão, funcionamento offline e segurança dos dados locais.</p>
          </div>
        </div>
      </section>

      <section className="section section--white" id="recursos">
        <div className="content-width">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">RECURSOS CENTRAIS</span>
            <h2>Ferramentas para acompanhar a carreira e a rotina a bordo.</h2>
          </div>
          <div className="feature-grid">
            <Feature icon="anchor" title="Escala e ciclos" text="Planejamento de embarques, desembarques, folgas e histórico de viagens." />
            <Feature icon="file" title="Certificados" text="Organização de documentos, vencimentos, cópias e exportação em PDF." />
            <Feature icon="layers" title="Tempo de embarque" text="Histórico geral e estimativas informativas para requisitos profissionais cadastrados." />
            <Feature icon="shield" title="Dados locais" text="Backup e funcionamento local-first, sem transformar recursos essenciais em dependência de nuvem." />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="content-width split-section split-section--balanced">
          <div>
            <span className="eyebrow">SERVIÇO PÚBLICO ORGANIZADO</span>
            <h2>Acessos oficiais úteis ao aquaviário.</h2>
            <p className="lead-copy">A central pública reúne links da Marinha do Brasil e pode ser atualizada sem exigir uma nova versão do aplicativo.</p>
          </div>
          <a href="/bordoai/servicos-da-marinha" className="standalone-link-card">
            <span><Icon name="anchor" /></span>
            <div><strong>Serviços da Marinha</strong><small>PREPOM, Capitanias, certificação, meteorologia e marés</small></div>
            <Icon name="arrow" size={20} />
          </a>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="SOBRE" title="Terminais LMC" description="Uma iniciativa independente de desenvolvimento de produtos digitais voltados a controle, organização e uso móvel." />
      <section className="section section--white section--first">
        <div className="content-width split-section split-section--balanced">
          <div>
            <h2>Desenvolvimento próximo do problema.</h2>
            <p className="lead-copy">Os produtos surgem de necessidades práticas e evoluem por ciclos de teste, correção e refinamento. A prioridade é manter clareza sobre o que cada aplicativo faz, seus limites e o contexto em que deve ser usado.</p>
          </div>
          <CheckList items={['Desenvolvimento independente', 'Produtos Android e web', 'Evolução contínua', 'Comunicação sem promessas irreais', 'Privacidade e funcionamento local quando aplicável']} />
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="CONTATO" title="Fale com a Terminais LMC" description="Use o canal abaixo para suporte, dúvidas sobre os aplicativos, comunicação institucional ou relato de link quebrado." />
      <section className="section section--white section--first">
        <div className="content-width content-width--narrow">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-card">
            <span className="contact-card-icon"><Icon name="mail" size={30} /></span>
            <span><small>E-mail de contato</small><strong>{SUPPORT_EMAIL}</strong></span>
            <Icon name="arrow" />
          </a>
          <p className="contact-note">Não envie senhas, chaves de API, documentos pessoais completos ou dados financeiros sensíveis por e-mail.</p>
        </div>
      </section>
    </>
  )
}

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="content-width content-width--narrow">
        <span className="eyebrow">404</span>
        <h1>Página não encontrada.</h1>
        <p>O endereço informado não corresponde a uma página ativa da Terminais LMC.</p>
        <a href="/" className="button button--primary">Voltar ao início</a>
      </div>
    </section>
  )
}

const pageByPath: Record<string, { title: string; component: React.ReactNode }> = {
  '/': { title: 'Terminais LMC | Soluções digitais independentes', component: <HomePage /> },
  '/aplicativos': { title: 'Aplicativos | Terminais LMC', component: <AppsPage /> },
  '/alpha-pro': { title: 'Alpha Pro Terminal | Terminais LMC', component: <AlphaProPage /> },
  '/controleai': { title: 'ControleAi | Terminais LMC', component: <ControleAiPage /> },
  '/bordoai': { title: 'BordoAi | Terminais LMC', component: <BordoAiPage /> },
  '/sobre': { title: 'Sobre | Terminais LMC', component: <AboutPage /> },
  '/contato': { title: 'Contato | Terminais LMC', component: <ContactPage /> },
}

export default function App() {
  const path = normalizePath(window.location.pathname)
  const page = pageByPath[path]

  React.useEffect(() => {
    document.title = page?.title ?? 'Página não encontrada | Terminais LMC'
  }, [page?.title])

  return <SiteLayout>{page?.component ?? <NotFoundPage />}</SiteLayout>
}

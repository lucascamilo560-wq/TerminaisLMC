import React from 'react'
import './MarinhaServicesPage.css'

const VERIFIED_AT = '22/07/2026'
const HOME_URL = '/'
const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const CONTROLE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const BORDO_AI_URL = 'https://play.google.com/store/apps/details?id=com.lmc.bordoai'
const SUPPORT_EMAIL = 'alphaterminallmc@hotmail.com'

type IconName =
  | 'anchor'
  | 'user'
  | 'search'
  | 'certificate'
  | 'course'
  | 'book'
  | 'building'
  | 'calendar'
  | 'health'
  | 'weather'
  | 'tide'
  | 'notice'
  | 'emergency'
  | 'external'
  | 'shield'
  | 'trading'
  | 'finance'
  | 'apps'
  | 'mail'

type Service = {
  title: string
  description: string
  url: string
  icon: IconName
  label: string
  note?: string
  priority?: boolean
}

type ServiceGroup = {
  id: string
  eyebrow: string
  title: string
  description: string
  services: Service[]
}

const serviceGroups: ServiceGroup[] = [
  {
    id: 'carreira',
    eyebrow: 'CARREIRA E CADASTRO',
    title: 'Serviços para aquaviários',
    description: 'Acessos oficiais para consultar informações profissionais, acompanhar processos e entender os procedimentos da carreira marítima.',
    services: [
      {
        title: 'Portal de Aquaviários da DPC',
        description: 'Página central da Diretoria de Portos e Costas com orientações sobre carreira, cursos, normas e serviços para aquaviários.',
        url: 'https://www.marinha.mil.br/dpc/aquaviarios-dpc',
        icon: 'user',
        label: 'Abrir portal oficial',
        priority: true,
      },
      {
        title: 'Acompanhar processos e documentação',
        description: 'Orientações oficiais sobre andamento de processos, ascensão de categoria, transferência, emissão e certificação de pessoal aquaviário.',
        url: 'https://www.marinha.mil.br/dpc/documentacao-e-certificacao-de-pessoal-aquaviario',
        icon: 'search',
        label: 'Ver orientações oficiais',
      },
      {
        title: 'Carta de Serviços da DPC',
        description: 'Catálogo oficial de serviços disponíveis, incluindo certificados, PREPOM, GRU, reconhecimento e segunda via de documentos.',
        url: 'https://www.marinha.mil.br/dpc/carta-de-servicos',
        icon: 'book',
        label: 'Consultar serviços',
      },
    ],
  },
  {
    id: 'formacao',
    eyebrow: 'FORMAÇÃO E ASCENSÃO',
    title: 'Cursos, PREPOM e normas',
    description: 'Fontes oficiais para acompanhar cursos, requisitos de carreira e regras do Ensino Profissional Marítimo.',
    services: [
      {
        title: 'PREPOM Aquaviários 2026',
        description: 'Programação anual de cursos do Ensino Profissional Marítimo, com ementas, locais, requisitos e períodos previstos.',
        url: 'https://www.marinha.mil.br/dpc/prepom-aquaviarios',
        icon: 'course',
        label: 'Consultar PREPOM',
        note: 'A programação pode receber alterações durante o ano. Confira sempre o documento mais recente.',
        priority: true,
      },
      {
        title: 'Cursos PREPOM',
        description: 'Área da DPC que reúne os programas de Aquaviários, Portuários e Atividades Correlatas.',
        url: 'https://www.marinha.mil.br/dpc/cursos-prepom',
        icon: 'course',
        label: 'Ver todos os programas',
      },
      {
        title: 'Normas e carreira de aquaviários',
        description: 'Acesso à página oficial da carreira, com referência à NORMAM-101/DPC e demais orientações profissionais.',
        url: 'https://www.marinha.mil.br/dpc/aquaviarios-dpc',
        icon: 'book',
        label: 'Consultar normas',
      },
    ],
  },
  {
    id: 'atendimento',
    eyebrow: 'ATENDIMENTO PRESENCIAL',
    title: 'Capitanias e agendamento',
    description: 'Localize a Organização Militar responsável e prepare o atendimento antes de comparecer presencialmente.',
    services: [
      {
        title: 'Localizar Capitania, Delegacia ou Agência',
        description: 'Consulte a unidade mais próxima para serviços relacionados à Marinha Mercante, segurança da navegação e atendimento ao aquaviário.',
        url: 'https://www.marinha.mil.br/dpc/node/3505',
        icon: 'building',
        label: 'Localizar atendimento',
        priority: true,
      },
      {
        title: 'Agendamento eletrônico',
        description: 'Acesse o sistema oficial para selecionar a unidade, o serviço e o horário de atendimento.',
        url: 'https://atendimento-dpc.marinha.mil.br/sisap/agendamento/',
        icon: 'calendar',
        label: 'Agendar atendimento',
        note: 'O login e os dados pessoais são informados somente no ambiente oficial da Marinha/Gov.br.',
      },
      {
        title: 'Emissão de Certificado DPC-1031',
        description: 'Exemplo de procedimento oficial com etapas, documentos e orientação de agendamento para Certificado de Competência.',
        url: 'https://www.marinha.mil.br/cpba/content/EMISSAO-DE-CERTIFICADO-DE-COMPETENCIA-MODELO-DPC-1031',
        icon: 'certificate',
        label: 'Ver procedimento',
      },
    ],
  },
  {
    id: 'saude',
    eyebrow: 'SAÚDE E CERTIFICAÇÃO',
    title: 'Documentos médicos e certificados',
    description: 'Pontos de partida oficiais para conferir médicos autorizados, procedimentos de certificação e serviços relacionados aos documentos profissionais.',
    services: [
      {
        title: 'Médicos autorizados',
        description: 'A página de Aquaviários da DPC mantém o acesso à relação oficial de médicos autorizados no Brasil.',
        url: 'https://www.marinha.mil.br/dpc/aquaviarios-dpc',
        icon: 'health',
        label: 'Consultar fonte oficial',
      },
      {
        title: 'Documentação e certificação',
        description: 'Perguntas frequentes e orientações oficiais sobre certificados, endossos, ascensão e cadastro do aquaviário.',
        url: 'https://www.marinha.mil.br/dpc/documentacao-e-certificacao-de-pessoal-aquaviario',
        icon: 'certificate',
        label: 'Abrir documentação',
      },
    ],
  },
  {
    id: 'nautica',
    eyebrow: 'INFORMAÇÃO NÁUTICA',
    title: 'Meteorologia, marés e navegação',
    description: 'Publicações do Centro de Hidrografia da Marinha para consulta operacional e planejamento.',
    services: [
      {
        title: 'Previsão meteoceanográfica',
        description: 'Boletim oficial para as 48 horas seguintes, com condições atmosféricas, vento, ondas e avisos de mau tempo na METAREA V.',
        url: 'https://www.marinha.mil.br/chm/dados-do-smm-previsao-oceanografica/previsao-meteoceanografica',
        icon: 'weather',
        label: 'Abrir previsão oficial',
        priority: true,
      },
      {
        title: 'Tábuas das Marés 2026',
        description: 'Previsões oficiais para portos, ilhas, barras, fundeadouros e atracadouros brasileiros.',
        url: 'https://www.marinha.mil.br/chm/dados-do-segnav-publicacoes/tabuas-das-mares',
        icon: 'tide',
        label: 'Consultar marés',
      },
      {
        title: 'Avisos aos Navegantes',
        description: 'Publicações periódicas para atualização de cartas e publicações náuticas brasileiras.',
        url: 'https://www.marinha.mil.br/chm/dados-do-segnav-aviso-aos-navegantes-tela',
        icon: 'notice',
        label: 'Abrir avisos',
      },
    ],
  },
]

const apps = [
  {
    name: 'BordoAi',
    category: 'Vida profissional marítima',
    description: 'Escala, certificados, rotina a bordo, tempo de embarque, diário, contatos e backup local.',
    url: BORDO_AI_URL,
    icon: 'anchor' as IconName,
    accent: 'cyan',
  },
  {
    name: 'Alpha Pro Terminal',
    category: 'Trading e automação',
    description: 'Terminal de trading com simulador, robôs, estratégias, conexão por API e recursos operacionais.',
    url: ALPHA_PRO_URL,
    icon: 'trading' as IconName,
    accent: 'green',
  },
  {
    name: 'ControleAi',
    category: 'Finanças pessoais e compartilhadas',
    description: 'Organização de despesas, dívidas, parcelas, vencimentos e contas divididas entre pessoas.',
    url: CONTROLE_AI_URL,
    icon: 'finance' as IconName,
    accent: 'blue',
  },
]

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
    anchor: <><circle cx="12" cy="5" r="2.2" /><path d="M12 7.2V21M5 11H2.8v2.5A9.2 9.2 0 0 0 12 22a9.2 9.2 0 0 0 9.2-8.5V11H19M7.5 17.5 12 22l4.5-4.5" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.2 4.2" /></>,
    certificate: <><path d="M6 3.5h12v17H6zM9 8h6M9 12h6" /><path d="m9.5 16 1.6 1.6 3.4-3.4" /></>,
    course: <><path d="m3 7.5 9-4 9 4-9 4zM6 9.5v5.2c3.5 2.4 8.5 2.4 12 0V9.5M21 8v6" /></>,
    book: <><path d="M4 4.5h6.5A2.5 2.5 0 0 1 13 7v13a3 3 0 0 0-3-3H4zM20 4.5h-6.5A2.5 2.5 0 0 0 11 7v13a3 3 0 0 1 3-3h6z" /></>,
    building: <><path d="M4 21V7l8-4 8 4v14M8 10h2M14 10h2M8 14h2M14 14h2M10 21v-3h4v3" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></>,
    health: <><path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z" /><path d="M8 12h2l1-2.5 2 5 1-2.5h2" /></>,
    weather: <><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 18Z" /><path d="M8 21h8" /></>,
    tide: <><path d="M3 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M3 13c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M3 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" /></>,
    notice: <><path d="M12 3 2.8 20h18.4zM12 9v5M12 17h.01" /></>,
    emergency: <><path d="M12 3v3M5.6 5.6l2.1 2.1M18.4 5.6l-2.1 2.1" /><path d="M6 13a6 6 0 0 1 12 0v5H6zM4 21h16" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
    trading: <><path d="M4 18V9M9 18V5M14 18v-7M19 18V3" /><path d="m3 8 5-3 5 5 7-7" /></>,
    finance: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5c-.8-.8-1.8-1.2-3-1.2-1.7 0-3 .8-3 2s1 1.8 3 2.2 3 1 3 2.4-1.3 2.4-3.2 2.4c-1.2 0-2.4-.4-3.3-1.2M12 5.5v13" /></>,
    apps: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`marine-service-card${service.priority ? ' marine-service-card--priority' : ''}`}>
      <div className="marine-service-icon"><Icon name={service.icon} /></div>
      <div className="marine-service-copy">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {service.note && <small>{service.note}</small>}
      </div>
      <a href={service.url} target="_blank" rel="noopener noreferrer" className="marine-service-link">
        <span>{service.label}</span>
        <Icon name="external" size={18} />
      </a>
    </article>
  )
}

export default function MarinhaServicesPage() {
  React.useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content') ?? ''

    document.title = 'Serviços oficiais da Marinha para aquaviários | BordoAi'
    description?.setAttribute(
      'content',
      'Central pública do BordoAi com acessos oficiais da Marinha do Brasil para aquaviários: PREPOM, certificados, Capitanias, agendamento, meteorologia, marés e avisos.',
    )

    return () => {
      document.title = previousTitle
      description?.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <div className="marine-page">
      <header className="marine-topbar">
        <a href={HOME_URL} className="marine-brand" aria-label="Voltar para Terminais LMC">
          <span className="marine-brand-mark">LMC</span>
          <span><strong>Terminais LMC</strong><small>Ferramentas digitais para controle real</small></span>
        </a>
        <a href="#apps" className="marine-topbar-link"><Icon name="apps" size={18} /> Nossos apps</a>
      </header>

      <main>
        <section className="marine-hero">
          <div className="marine-hero-glow" aria-hidden="true" />
          <div className="marine-hero-content">
            <span className="marine-kicker"><Icon name="anchor" size={18} /> BORDOAI · CENTRAL PÚBLICA</span>
            <h1>Serviços oficiais da Marinha para aquaviários</h1>
            <p className="marine-hero-lead">
              Um caminho organizado para encontrar cursos, documentos, Capitanias, agendamento e informações náuticas sem depender de buscas dispersas.
            </p>
            <div className="marine-hero-actions">
              <a href="#carreira" className="marine-button marine-button--primary">Ver serviços</a>
              <a href={BORDO_AI_URL} target="_blank" rel="noopener noreferrer" className="marine-button marine-button--secondary">Conhecer o BordoAi</a>
            </div>
            <div className="marine-trust-row">
              <span><Icon name="shield" size={18} /> Somente fontes oficiais</span>
              <span>Links conferidos em {VERIFIED_AT}</span>
            </div>
          </div>
        </section>

        <section className="marine-disclaimer" aria-label="Aviso de independência">
          <div className="marine-disclaimer-icon"><Icon name="shield" /></div>
          <div>
            <strong>Central independente de acesso</strong>
            <p>
              O Terminais LMC e o BordoAi não representam a Marinha do Brasil. Esta página apenas organiza links públicos para serviços oficiais. CPF, senha e demais dados pessoais devem ser informados somente nos domínios oficiais exibidos no navegador.
            </p>
          </div>
        </section>

        <nav className="marine-quick-nav" aria-label="Categorias de serviços">
          {serviceGroups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}
          <a href="#emergencia">Emergência</a>
        </nav>

        {serviceGroups.map((group) => (
          <section className="marine-section" id={group.id} key={group.id}>
            <header className="marine-section-header">
              <span>{group.eyebrow}</span>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </header>
            <div className="marine-services-grid">
              {group.services.map((service) => <ServiceCard key={service.title} service={service} />)}
            </div>
          </section>
        ))}

        <section className="marine-emergency" id="emergencia">
          <div className="marine-emergency-icon"><Icon name="emergency" size={32} /></div>
          <div>
            <span>EMERGÊNCIA MARÍTIMA</span>
            <h2>SALVAMAR — disque 185</h2>
            <p>Para situações envolvendo perigo à vida humana no mar, portos e vias navegáveis interiores.</p>
          </div>
          <a href="tel:185" className="marine-emergency-button">Ligar 185</a>
        </section>

        <section className="marine-apps-section" id="apps">
          <header className="marine-section-header marine-section-header--center">
            <span>ECOSSISTEMA TERMINAIS LMC</span>
            <h2>Conheça nossos aplicativos</h2>
            <p>Ferramentas independentes para áreas diferentes da vida real, reunidas pela mesma proposta de controle e organização.</p>
          </header>
          <div className="marine-apps-grid">
            {apps.map((app) => (
              <article className={`marine-app-card marine-app-card--${app.accent}`} key={app.name}>
                <div className="marine-app-icon"><Icon name={app.icon} size={28} /></div>
                <span>{app.category}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  Ver na Play Store <Icon name="external" size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="marine-maintenance">
          <div className="marine-maintenance-icon"><Icon name="mail" /></div>
          <div>
            <h2>Encontrou um link quebrado?</h2>
            <p>Informe o serviço e o endereço que apresentou problema. A central pode ser corrigida sem exigir uma nova versão do BordoAi.</p>
          </div>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Link%20quebrado%20-%20Servi%C3%A7os%20da%20Marinha`}>Informar problema</a>
        </section>
      </main>

      <footer className="marine-footer">
        <a href={HOME_URL} className="marine-footer-brand"><span>LMC</span> Terminais LMC</a>
        <p>Central pública criada para facilitar o acesso a fontes oficiais. Última conferência: {VERIFIED_AT}.</p>
        <div>
          <a href={HOME_URL}>Página inicial</a>
          <a href="https://www.instagram.com/terminaislmc/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contato</a>
          <a href="/politica-de-privacidade.html">Privacidade</a>
        </div>
        <small>© {new Date().getFullYear()} Terminais LMC. Todos os direitos reservados.</small>
      </footer>
    </div>
  )
}

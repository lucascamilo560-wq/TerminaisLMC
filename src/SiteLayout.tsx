import React from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/terminaislmc/'
const SUPPORT_EMAIL = 'alphaterminallmc@hotmail.com'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Aplicativos', href: '/aplicativos' },
  { label: 'Alpha Pro', href: '/alpha-pro' },
  { label: 'ControleAi', href: '/controleai' },
  { label: 'BordoAi', href: '/bordoai' },
  { label: 'Área marítima', href: '/bordoai/servicos-da-marinha' },
  { label: 'Sobre', href: '/sobre' },
]

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const currentPath = normalizePath(window.location.pathname)

  React.useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }, [currentPath])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="site-brand" href="/" aria-label="Terminais LMC — página inicial">
            <span className="site-brand-mark">LMC</span>
            <span className="site-brand-copy">
              <strong>Terminais LMC</strong>
              <small>Soluções digitais independentes</small>
            </span>
          </a>

          <button
            type="button"
            className="site-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Abrir menu</span>
          </button>

          <nav id="site-navigation" className={`site-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
            {navItems.map((item) => {
              const active = item.href === '/' ? currentPath === '/' : currentPath === item.href || currentPath.startsWith(`${item.href}/`)
              return (
                <a key={item.href} href={item.href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </a>
              )
            })}
            <a href="/contato" className="site-nav-contact">Contato</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer-grid">
          <div>
            <a className="site-brand site-brand--footer" href="/">
              <span className="site-brand-mark">LMC</span>
              <span className="site-brand-copy">
                <strong>Terminais LMC</strong>
                <small>Soluções digitais independentes</small>
              </span>
            </a>
            <p className="site-footer-summary">
              Produtos digitais desenvolvidos para organização, controle operacional e decisões mais estruturadas.
            </p>
          </div>

          <div className="site-footer-column">
            <strong>Produtos</strong>
            <a href="/alpha-pro">Alpha Pro Terminal</a>
            <a href="/controleai">ControleAi</a>
            <a href="/bordoai">BordoAi</a>
            <a href="/bordoai/servicos-da-marinha">Área marítima</a>
          </div>

          <div className="site-footer-column">
            <strong>Institucional</strong>
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
            <a href="/termos-de-uso.html">Termos de Uso</a>
            <a href="/politica-de-privacidade.html">Política de Privacidade</a>
          </div>

          <div className="site-footer-column">
            <strong>Contato</strong>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} Terminais LMC.</span>
          <span>Desenvolvimento independente no Brasil.</span>
        </div>
      </footer>
    </div>
  )
}

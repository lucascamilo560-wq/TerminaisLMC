import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import MarinhaServicesPage from './MarinhaServicesPage'
import {
  getOutboundTarget,
  initTerminaisAnalytics,
  redirectAfterAnalytics,
  type OutboundTarget,
} from './analytics'
import './App.css'

initTerminaisAnalytics()

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isMarinhaServicesPage = [
  '/bordoai/servicos-da-marinha',
  '/servicos-da-marinha',
].includes(normalizedPath)
const outboundTarget = getOutboundTarget(normalizedPath)

function OutboundRedirectPage({ target }: { target: OutboundTarget }) {
  React.useEffect(() => redirectAfterAnalytics(target), [target])

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
        background: '#f5f7fa',
        color: '#13263d',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 520 }}>
        <strong style={{ display: 'block', fontSize: 20, marginBottom: 8 }}>
          Abrindo {target.label}
        </strong>
        <span style={{ display: 'block', marginBottom: 18 }}>
          Você será redirecionado automaticamente.
        </span>
        <a href={target.destinationUrl}>Continuar agora</a>
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {outboundTarget ? (
      <OutboundRedirectPage target={outboundTarget} />
    ) : isMarinhaServicesPage ? (
      <MarinhaServicesPage />
    ) : (
      <App />
    )}
  </StrictMode>,
)

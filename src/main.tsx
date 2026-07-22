import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import MarinhaServicesPage from './MarinhaServicesPage'
import './App.css'

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isMarinhaServicesPage = [
  '/bordoai/servicos-da-marinha',
  '/servicos-da-marinha',
].includes(normalizedPath)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMarinhaServicesPage ? <MarinhaServicesPage /> : <App />}
  </StrictMode>,
)

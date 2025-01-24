import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/LoginPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage from './pages/MainPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/LoginPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/2025_0-4.PomodoApp-Frontend'>
      <Routes>
        <Route path='/' element={ <LoginPage/> } />
        <Route path='/main' element={ <MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

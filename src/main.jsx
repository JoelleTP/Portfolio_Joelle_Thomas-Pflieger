import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from "./components/Router/Router"
import "./assets/styles/main.scss"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)

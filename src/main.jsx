import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from "./components/Router/Router"
import "./assets/styles/main.scss"
import { LampProvider } from '../src/context/LampProvider';
import { LanguageProvider } from './context/LanguageProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LampProvider>
       <LanguageProvider>
          <Router />
       </LanguageProvider>
    </LampProvider>
  </StrictMode>,
)

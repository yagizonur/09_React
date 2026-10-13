// Akış: index.html -> main.jsx -> App.jsx -> diğer component'ler
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html'deki <div id="root"> bulunur ve App component'i onun içine çizilir.
// StrictMode: geliştirme sırasında olası hataları yakalamaya yardım eder.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateCity from './components/StateCity'
import Api from './components/Api'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Api/>

  </StrictMode>,
)

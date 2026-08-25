import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Capital from './components/Capital'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Capital/>
  </StrictMode>,
)

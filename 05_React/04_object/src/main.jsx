import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Country from './components/Country'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Country/>
  </StrictMode>,
)

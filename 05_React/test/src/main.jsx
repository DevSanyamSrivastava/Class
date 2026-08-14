import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar/>
<Footer/>
  </StrictMode>,
)

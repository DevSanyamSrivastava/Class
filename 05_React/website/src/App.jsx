import { useState } from 'react'
import { StrictMode } from 'react'
import './App.css'
import Layouts from './website/frontned/layouts/Layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './website/frontned/Home'
import AboutUs from './website/frontned/AboutUs'
import Pricing from './website/frontned/Pricing'
import Gallery from './website/frontned/Gallery'
import Details from './website/frontned/Details'
function App() {


  return (
    <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts/>}>
                <Route index element={<Home/>} />
                <Route path='/about-us' element={<AboutUs/>} />
                <Route path='/pricing' element={<Pricing/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/details/:id' element={<Details/>} />
                
          </Route>
        </Routes>
    </BrowserRouter>
    </StrictMode>
  )
}

export default App

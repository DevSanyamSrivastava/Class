import { useState } from 'react'

import './App.css'
import Layouts from './website/frontned/layouts/Layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './website/frontned/Home'
import AboutUs from './website/frontned/AboutUs'
import Pricing from './website/frontned/Pricing'
import Gallery from './website/frontned/Gallery'
import Details from './website/frontned/Details'
import Student from './website/frontned/Student'
function App() {


  return (
  
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts/>}>
                <Route index element={<Home/>} />
                <Route path='/about-us' element={<AboutUs/>} />
                <Route path='/pricing' element={<Pricing/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/student' element={<Student/>} />
                <Route path='/details/:id' element={<Details/>} />
                
          </Route>
        </Routes>
    </BrowserRouter>
  
  )
}

export default App

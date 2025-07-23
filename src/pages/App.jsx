import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'
import Services from '../components/Services'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
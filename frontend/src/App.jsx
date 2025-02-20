import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen pt-16 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Footer />
      </div>
    </Router>
  )
}

export default App
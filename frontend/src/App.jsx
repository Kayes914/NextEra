import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Services />

      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Navbar from '@/Components/Navbar'
import Home from '../Components/Home'
import About from '../Components/About'
import Projects from '@/Components/Projects'
import Contact from '@/Components/Contact'

function Apps() {
  return (
    <div>
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}

export default Apps
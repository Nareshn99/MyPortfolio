import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home

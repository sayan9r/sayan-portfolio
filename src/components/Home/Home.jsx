import React from 'react'
import { NavbarDemo } from '../Header/Navbar'
import Footer from '../Footer/Footer'
import HeroSection from '../intro/HeroSection'

function Home() {
  return (
   <>
   <div className='min-h-screen bg-gray-950'>
    <NavbarDemo/>
    <HeroSection/>
   <br /><br /><br /><br /><br /><br /><br /><br /><br />
   <Footer/>
   </div>
   </>
  )
}

export default Home
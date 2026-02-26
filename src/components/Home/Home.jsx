import React from 'react'
import { NavbarDemo } from '../Header/Navbar'
import Footer from '../Footer/Footer'
import HeroSection from '../intro/HeroSection'
import Projects from '../projects/Projects'

function Home() {
  return (
   <>
   <div className='min-h-screen bg-gray-950'>
    
    <HeroSection/>
   <br /><br /><br /><br /><br /><br /><br /><br /><br />
   <Projects/>
   <Footer/>
   </div>
   </>
  )
}

export default Home
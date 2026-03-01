import React from 'react'
import { NavbarDemo } from '../Header/Navbar'
import Footer from '../Footer/Footer'
import HeroSection from '../intro/HeroSection'
import Projects from '../projects/Projects'
import Certificate from '../certificiate/Certificate'
import Tools from '../Tech/Tools'
import About from '../AboutMe/About'
import CPDSA2 from '../DSA/CPDSA2'
import DevJourney from '../Journey/DevJourney'


function Home() {
  return (
   <>
   <div className='min-h-screen bg-gray-950'>
    
    <HeroSection/>
   <About/>
   <Projects/>
   <CPDSA2/>
   <Certificate/>
   <Tools/>
   <Footer/>
   </div>
   </>
  )
}

export default Home
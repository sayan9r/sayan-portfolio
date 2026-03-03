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
import Contact from '../Contact/Contact'
import Feedback from '../Feedback/Feedback'


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
    <div className="mx-auto mb-10 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
   <Contact/>
   <div className="mx-auto mb-10 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
   <Feedback/>
   <div className="mx-auto mb-10 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
   <Footer/>
   </div>
   </>
  )
}

export default Home
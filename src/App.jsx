import './App.css'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { NavbarDemo } from './components/Header/Navbar';
import Home from './components/Home/Home';
import Projects from './components/projects/Projects';
import Certificate from './components/certificiate/Certificate';
import About from './components/AboutMe/About';

function App() {
 

  return (
   <Router>
    <NavbarDemo/>
    <Routes>
          {/* <Route path="/" element={
            <>
            <NavbarDemo/>
               <Footer/>
            </>} 
          />  */}
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path ="/projects" element={<Projects/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
    </Routes>
   </Router>
  )
}

export default App

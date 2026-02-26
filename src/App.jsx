import './App.css'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { NavbarDemo } from './components/Header/Navbar';
import Home from './components/Home/Home';
import Projects from './components/projects/Projects';

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
      <Route path ="/projects" element={<Projects/>}/>
    </Routes>
   </Router>
  )
}

export default App

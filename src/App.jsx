import './App.css'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { NavbarDemo } from './components/Header/Navbar';
import Home from './components/Home/Home';

function App() {
 

  return (
   <Router>
    <Routes>
          {/* <Route path="/" element={
            <>
            <NavbarDemo/>
               <Footer/>
            </>} 
          />  */}
      <Route path="/" element={<Home/>} />
    </Routes>
   </Router>
  )
}

export default App

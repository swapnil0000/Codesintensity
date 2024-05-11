import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Servicess/Services';
import Technology from './pages/Technology/Technology';
import Footer from './components/Footer/Footer';
import Web from './pages/Servicess/webdevelopment/Web';
import AppDev from './pages/Servicess/appdevelopment/AppDev';
import Hosting from './pages/Servicess/Hosting/Hosting';
import Graphic from './pages/Servicess/graphic/Graphic';
import Digital from './pages/Servicess/Digital/Digital';
import Maintain from './pages/Servicess/Maintain/Maintain';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/web' element={<Web/>}/>
      <Route path='/app' element={<AppDev/>}/>
      <Route path='/hosting' element={<Hosting/>}/>
      <Route path='/graphic' element={<Graphic/>}/>
      <Route path='/digital' element={<Digital/>}/>
      <Route path='/maintain' element={<Maintain/>}/>

     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;

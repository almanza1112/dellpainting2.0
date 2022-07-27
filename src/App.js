import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Services from './pages/Services'
import ServicesContent from './components/Services/ServicesContent'
import Portfolio from './pages/Portfolio'
import PortfolioContent from "./components/Portfolio/PortfolioContent"
import Careers from './pages/Careers'
import Associates from './pages/Associates'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomeContent from "./components/Home/HomeContent"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /> <HomeContent/><Footer /></>} />
        <Route path="/services" element={<><Services /> <ServicesContent /><Footer /></>} />
        <Route path="/portfolio" element={<><Portfolio /> <PortfolioContent/><Footer /></>} />
        <Route path="/careers" element={<><Careers /> <Footer /></>} />
        <Route path="/associates" element={<><Associates /> <Footer /></>} />
        <Route path="/contact" element={<><Contact /> <Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;

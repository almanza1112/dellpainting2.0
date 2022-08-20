import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Services from './pages/Services'
import ServicesContent from './components/Services/ServicesContent'
import Portfolio from './pages/Portfolio'
import PortfolioContent from "./components/Portfolio/PortfolioContent"
import Apartments from './components/Portfolio/Apartments'
import SeniorLivings from './components/Portfolio/SeniorLivings'
import RetailStores from './components/Portfolio/RetailStores'
import Hotels from './components/Portfolio/Hotels'
import Entertainment from './components/Portfolio/Entertainment'
import Restaurants from './components/Portfolio/Restaurants'
import Banks from './components/Portfolio/Banks'
import Offices from './components/Portfolio/Offices'
import CarDealerships from './components/Portfolio/CarDealership'
import SelfStorage from './components/Portfolio/SelfStorage'

import Careers from './pages/Careers'
import Associates from './pages/Associates'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomeContent from "./components/Home/HomeContent"
import Maintenance from './components/Services/Maintenance'
import NewConstruction from './components/Services/NewConstruction'
import Wallcovering from './components/Services/Wallcovering'
import SpecialityFinishes from './components/Services/SpecialityFinishes'
import FRPPanels from './components/Services/FRPPanels'
import Spackle from './components/Services/Spackle'
import Minwax from './components/Services/Minwax'
import Skim from './components/Services/Skim'
import Walltalkers from './components/Services/Walltalkers'
import ContactContent from "./components/Contact/ContactContent"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /> <HomeContent/><Footer/></>} />
        <Route path="/services" element={<Services />} >
          <Route path='' element={<><ServicesContent /> <Footer/></>} />
          <Route path='maintenance' element={<><Maintenance /> <Footer /></>} />
          <Route path='newconstruction' element={<><NewConstruction /> <Footer /></>} />
          <Route path='wallcovering' element={<><Wallcovering /> <Footer /></>} />
          <Route path='speciality' element={<><SpecialityFinishes /> <Footer /></>} />
          <Route path='frppanels' element={<><FRPPanels /> <Footer /></>} />
          <Route path='spackle' element={<><Spackle /> <Footer /></>} />
          <Route path='minwax' element={<><Minwax /> <Footer /></>} />
          <Route path='skim' element={<><Skim /> <Footer /></>} />
          <Route path='walltalkers' element={<><Walltalkers /> <Footer /></>} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} >
          <Route path="" element={<><PortfolioContent /> <Footer /></>}/>
          <Route path="apartments" element={<><Apartments /> <Footer /></>} />
          <Route path="seniorlivings" element={<><SeniorLivings/> <Footer /></>} />
          <Route path="retailstores" element={<><RetailStores /> <Footer /></>} />
          <Route path="hotels" element={<><Hotels /> <Footer /></>} />
          <Route path="entertainment" element={<><Entertainment /> <Footer /></>} />
          <Route path="restaurants" element={<><Restaurants /> <Footer /></>} />
          <Route path="banks" element={<><Banks /> <Footer /></>} />
          <Route path="offices" element={<><Offices /> <Footer /></>} />
          <Route path="cardealerships" element={<><CarDealerships /> <Footer /></>} />
          <Route path="selfstorage" element={<><SelfStorage /> <Footer /></>} />
        </Route>
        <Route path="/careers" element={<Careers />} />
        <Route path="/associates" element={<Associates />} />
        <Route path="/contact" element={<><Contact /> <ContactContent/> <Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Services from './pages/Services'
import ServicesContent from './components/Services/ServicesContent'
import Portfolio from './pages/Portfolio'
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
import PowerWashing from "./components/Services/PowerWashing"


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
          <Route path='powerwashing' element={<><PowerWashing /> <Footer /></>} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/apartments" element={<Apartments/>} />
        <Route path="/portfolio/seniorlivings" element={<SeniorLivings />} />
        <Route path="/portfolio/retailstores" element={<RetailStores />} />
        <Route path="/portfolio/hotels" element={<Hotels />} />
        <Route path="/portfolio/entertainment" element={<Entertainment />} />
        <Route path="/portfolio/restaurants" element={<Restaurants /> } />
        <Route path="/portfolio/banks" element={<Banks /> } />
        <Route path="/portfolio/offices" element={<Offices />} />
        <Route path="/portfolio/cardealerships" element={<CarDealerships /> } />
        <Route path="/portfolio/selfstorage" element={<SelfStorage />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/associates" element={<Associates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

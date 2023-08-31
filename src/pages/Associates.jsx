import React, {useEffect} from 'react'
import AssociatesImg from '../assets/Associates/associates_main.jpg'
import Footer from '../components/Footer'

// Suppliers Imgs
import BenjaminMooreImg from '../assets/Associates/Suppliers/BenjaminMoorePaintsLogo.jpg'
import EykonImg from '../assets/Associates/Suppliers/eykon.png'
import GracoImg from '../assets/Associates/Suppliers/graco_logo.svg'
import IdeaPaintImg from '../assets/Associates/Suppliers/ideapaint.png'
import KorosealImg from '../assets/Associates/Suppliers/koroseal.png'
import MatthewsPaintImg from '../assets/Associates/Suppliers/matthews-paint.png'
import MdcImg from '../assets/Associates/Suppliers/mdc.jpg'
//import MomentumtextilesImg from '../assets/Associates/momentumtextiles.gif'
import PPGPaintsImg from '../assets/Associates/Suppliers/ppgpaints.png'
import ScuffMasterImg from '../assets/Associates/Suppliers/scuffmaster.png'
import SherwinWilliamsImg from '../assets/Associates/Suppliers/sherwinwilliams.png'
import SunBeltRentalsImg from '../assets/Associates/Suppliers/sunbeltrentals.svg'
import TkPaintingsImg from '../assets/Associates/Suppliers/tkpaintings.jpeg'
import TristateEquipmentImg from '../assets/Associates/Suppliers/tristateequipment.png'
import UnitedRentalImg from '../assets/Associates/Suppliers/unitedrental.png'
import WolfGordonImg from '../assets/Associates/Suppliers/wolfgordon.png'

// Clients Imgs
import AbeLouiesImg from '../assets/Associates/Clients/abe_louies.png'
import AMCImg from '../assets/Associates/Clients/amc.png'
import ApplebeesImg from '../assets/Associates/Clients/applebees.png'
import ArborTerraceImg from '../assets/Associates/Clients/arbor_terrace.png'
import AtlanticHealthImg from '../assets/Associates/Clients/atlantic_health_system.png'
import AtriaSeniorLivingImg from '../assets/Associates/Clients/atria-senior-living.png'
import AutozoneImg from '../assets/Associates/Clients/autozone.png'
import AxisImg from '../assets/Associates/Clients/axis_communications.png'
import B2BistroImg from '../assets/Associates/Clients/b2bistro.png'
import BJsImg from '../assets/Associates/Clients/bjs.png'
import BNYMelonImg from '../assets/Associates/Clients/bny_melon.png'
import BPImg from '../assets/Associates/Clients/bp.png'
import BrandyWineLivingImg from '../assets/Associates/Clients/brandywineliving.png'
import BrightSideImg from '../assets/Associates/Clients/brightside.webp'
import BrightViewImg from '../assets/Associates/Clients/brightview-logo.png'
import CannonImg from '../assets/Associates/Clients/cannon.png'
import CheckersImg from '../assets/Associates/Clients/checkers.png'
import ChickfilaImg from '../assets/Associates/Clients/chickfila.png'
import ChowKingImg from '../assets/Associates/Clients/chowking.png'
import CMXImg from '../assets/Associates/Clients/cmx-logo-1.png'
import CoreSiteImg from '../assets/Associates/Clients/coresite.png'
import CostcoImg from '../assets/Associates/Clients/costco.png'
import CrownCastleImg from '../assets/Associates/Clients/crowncastle.webp'
import CrunchFitnessImg from '../assets/Associates/Clients/crunchfitness.png'
import CubeSmartImg from '../assets/Associates/Clients/cubesmart.png'
import CVSImg from '../assets/Associates/Clients/cvs-pharmacy.png'
import DaveAndBustersImg from '../assets/Associates/Clients/daveandbusters.png'
import DevryUniversityImg from '../assets/Associates/Clients/devryuniversity.png'
import DorasNaturalsImg from '../assets/Associates/Clients/dorasnaturals.webp'
import DryBarImg from '../assets/Associates/Clients/drybar.png'
import EnglewoodHealthImg from '../assets/Associates/Clients/englewoodhealth.png'
import EricksonLivingImg from '../assets/Associates/Clients/erickson-living.png'
import EtradeImg from '../assets/Associates/Clients/etrade.png'
import ExtraSpaceStorageImg from '../assets/Associates/Clients/extraspacestorage.png'
import FiddlersImg from '../assets/Associates/Clients/fiddlers.jpeg'
import FidelityImg from '../assets/Associates/Clients/fidelity_investments.png'
import FiveBelowImg from '../assets/Associates/Clients/fivebelow.png'
import HalalGuysImg from '../assets/Associates/Clients/halalguys.png'
import HiltonImg from '../assets/Associates/Clients/hilton.png'
import HouseOfImg from '../assets/Associates/Clients/houseof.png'
import InsmedImg from '../assets/Associates/Clients/insmed.png'
import JaredImg from '../assets/Associates/Clients/jared.png'
import KayImg from '../assets/Associates/Clients/kay.png'
import KearnyBankImg from '../assets/Associates/Clients/kearnybank.png'
import KesslerImg from '../assets/Associates/Clients/kessler.png'
import KmartImg from '../assets/Associates/Clients/kmart.png'
import KohlerImg from '../assets/Associates/Clients/kohler.png'
import KohlsImg from '../assets/Associates/Clients/kohls.png'
import L3Img from '../assets/Associates/Clients/l3.png'
import LanvinImg from '../assets/Associates/Clients/lanvin.png'
import LifestanceImg from '../assets/Associates/Clients/lifestance.png'
import MasonicVillagesImg from '../assets/Associates/Clients/masonic-villages.png'
import MaxMaraImg from '../assets/Associates/Clients/maxmara.png'
import MeadowLakesImg from '../assets/Associates/Clients/meadow_lakes.png'
import MercedesBenzImg from '../assets/Associates/Clients/mercedesbenz.png'
import MoesImg from '../assets/Associates/Clients/moes.png'
import MoltonBrownImg from '../assets/Associates/Clients/moltonbrown.png'
import MonarchCoopersCornerImg from '../assets/Associates/Clients/monarch_coopers_corner.jpeg'
import MonroeVillageImg from '../assets/Associates/Clients/monroevillage.png'
import NorthItaliaImg from '../assets/Associates/Clients/north_italia.png'
import NovelPayImg from '../assets/Associates/Clients/novelpay.png'
import NuVasiveImg from '../assets/Associates/Clients/nuVasive.jpeg'
import OakStreetHealthImg from '../assets/Associates/Clients/oakstreethealth.png'
import OldNavyImg from '../assets/Associates/Clients/oldnavy.png'
import OshKoshImg from '../assets/Associates/Clients/oshkosh_carters.png'
import PeletonImg from '../assets/Associates/Clients/peloton.png'
import PetcoImg from '../assets/Associates/Clients/petco.png'
import PetsmartImg from '../assets/Associates/Clients/petsmart.png'
import PretImg from '../assets/Associates/Clients/pret.png'
import PTCImg from '../assets/Associates/Clients/ptctherapeutics.png'
import PublicStorageImg from '../assets/Associates/Clients/publicstorage.png'
import RitasImg from '../assets/Associates/Clients/ritas.png'
import SalvatoreImg from '../assets/Associates/Clients/salvatoreferragamo.png'
import SamsungImg from '../assets/Associates/Clients/samsung.png'
import ShinolaImg from '../assets/Associates/Clients/Shinola.png'
import SignifyImg from '../assets/Associates/Clients/signify.png'
import SilverMirrorImg from '../assets/Associates/Clients/silver_mirror.jpeg'
import SnipersImg from '../assets/Associates/Clients/snipes.png'
import SpecialtySurgeryImg from '../assets/Associates/Clients/specialtysurgery.png'
import SolvayImg from '../assets/Associates/Clients/solvay.png'
import SonoBelloImg from '../assets/Associates/Clients/sono_bello.jpeg'
import StaplesImg from '../assets/Associates/Clients/staples.png'
import SubaruImg from '../assets/Associates/Clients/subaru.png'
import SummitImg from '../assets/Associates/Clients/summithealth.png'
import SunriseSeniorLivingImg from '../assets/Associates/Clients/sunrise-senior-living.png'
import TaihoImg from '../assets/Associates/Clients/taiho.png'
import TexasRoadhouseImg from '../assets/Associates/Clients/texas_roadhouse.png'
import TheHabitBurgerGrillImg from '../assets/Associates/Clients/the_habit_burger_grill.png'
import TheResidenceImg from '../assets/Associates/Clients/theresidence.png'
import TripleFiveImg from '../assets/Associates/Clients/triplefive.png'
import TrulucksImg from '../assets/Associates/Clients/trulucks.png'
import VermellaImg from '../assets/Associates/Clients/vermella.png'
import WalmartImg from '../assets/Associates/Clients/walmart.png'

const Associates = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full flex flex-col bg-slate-50'>
      <img src={AssociatesImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>ASSOCIATES</p>
        </div>

        <div className='main-desc-section'>
          <p>
            After so many years of business, we have worked with many clients that 
            have been left nothing less than 100% satisfied as well as trusted 
            suppliers that we do daily business with and help us deliver quality 
            products to our new and recurring clients.
          </p>
        </div>
      </div>

      <div className='max-w-screen-xl w-full h-full flex flex-col mx-auto'>
        {/* Suppliers section */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 md:px-8 md:divide-x md:pb-16 md:pt-12'>
          {/* Logo section */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center'>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 p-8 justify-center items-center'>
              <img src={BenjaminMooreImg} className='assoc_logos' />
              <img src={EykonImg} className='assoc_logos' />
              <img src={GracoImg} className='assoc_logos' />
              <img src={IdeaPaintImg} className='assoc_logos' />
              <img src={KorosealImg} className='assoc_logos' />
              <img src={MatthewsPaintImg} className='assoc_logos' />
              <img src={MdcImg} className='assoc_logos' />
              <img src={PPGPaintsImg} className='assoc_logos' />
              <img src={SherwinWilliamsImg} className='assoc_logos' />
              <img src={ScuffMasterImg} className='assoc_logos' />
              <img src={SunBeltRentalsImg} className='assoc_logos' />
              <img src={TkPaintingsImg} className='assoc_logos' />
              <img src={TristateEquipmentImg} className='assoc_logos' />
              <img src={UnitedRentalImg} className='assoc_logos' />
              <img src={WolfGordonImg} className='assoc_logos' />
            </div>
          </div>
          {/* Title section */}
          <div className='flex flex-col justify-center md:justify-start items-center md:items-start pb-4 md:pl-8 order-first md:order-last'>
            <div className='main-title-top uppercase'>
              Our
            </div>
            <div className='main-title-bottom uppercase'>
              Suppliers
            </div>
          </div>
        </div>

        {/* Clients section */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4  md:divide-x py-4 md:py-16'>
          {/* Title section */}
          <div className='flex flex-col justify-center md:justify-start items-center md:items-start pb-4 md:pl-8 order-first'>
            <div className='main-title-top uppercase'>
              Our
            </div>
            <div className='main-title-bottom uppercase'>
              Clients
            </div>
          </div>
          {/* Logo section */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center'>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 p-8 justify-center items-center'>
              <img src={AbeLouiesImg} className='assoc_logos' />
              <img src={AMCImg} className='assoc_logos' />
              <img src={ApplebeesImg} className='assoc_logos' />
              <img src={ArborTerraceImg} className='assoc_logos' />
              <img src={AtlanticHealthImg} className='assoc_logos' />
              <img src={AtriaSeniorLivingImg} className='assoc_logos' />
              <img src={AutozoneImg} className='assoc_logos' />
              <img src={AxisImg} className='assoc_logos' />
              <img src={B2BistroImg} className='assoc_logos' />
              <img src={BJsImg} className='assoc_logos' />
              <img src={BNYMelonImg} className='assoc_logos' />
              <img src={BPImg} className='assoc_logos' />
              <img src={BrandyWineLivingImg} className='assoc_logos' />
              <img src={BrightSideImg} className='assoc_logos' />
              <img src={BrightViewImg} className='assoc_logos' />
              <img src={CannonImg} className='assoc_logos' />
              <img src={CheckersImg} className='assoc_logos' />
              <img src={ChickfilaImg} className='assoc_logos' />
              <img src={ChowKingImg} className='assoc_logos' />
              <img src={CMXImg} className='assoc_logos' />
              <img src={CoreSiteImg} className='assoc_logos' />
              <img src={CostcoImg} className='assoc_logos' />
              <img src={CrownCastleImg} className='assoc_logos' />
              <img src={CrunchFitnessImg} className='assoc_logos' />
              <img src={CubeSmartImg} className='assoc_logos' />
              <img src={CVSImg} className='assoc_logos' />
              <img src={DaveAndBustersImg} className='assoc_logos' />
              <img src={DevryUniversityImg} className='assoc_logos' />
              <img src={DorasNaturalsImg} className='assoc_logos' />
              <img src={DryBarImg} className='assoc_logos' />
              <img src={EnglewoodHealthImg} className='assoc_logos' />
              <img src={EricksonLivingImg} className='assoc_logos' />
              <img src={EtradeImg} className='assoc_logos' />
              <img src={ExtraSpaceStorageImg} className='assoc_logos' />
              <img src={FiddlersImg} className='assoc_logos' />
              <img src={FidelityImg} className='assoc_logos' />
              <img src={FiveBelowImg} className='assoc_logos' />
              <img src={HalalGuysImg} className='assoc_logos' />
              <img src={HiltonImg} className='assoc_logos' />
              <img src={HouseOfImg} className='assoc_logos' />
              <img src={InsmedImg} className='assoc_logos' />
              <img src={JaredImg} className='assoc_logos' />
              <img src={KayImg} className='assoc_logos' />
              <img src={KearnyBankImg} className='assoc_logos' />
              <img src={KesslerImg} className='assoc_logos' />
              <img src={KmartImg} className='assoc_logos' />
              <img src={KohlerImg} className='assoc_logos' />
              <img src={KohlsImg} className='assoc_logos' />
              <img src={L3Img} className='assoc_logos' />
              <img src={LanvinImg} className='assoc_logos' />
              <img src={LifestanceImg} className='assoc_logos' />
              <img src={MasonicVillagesImg} className='assoc_logos' />
              <img src={MaxMaraImg} className='assoc_logos' />
              <img src={MeadowLakesImg} className='assoc_logos' />
              <img src={MercedesBenzImg} className='assoc_logos' />
              <img src={MoesImg} className='assoc_logos' />
              <img src={MoltonBrownImg} className='assoc_logos' />
              <img src={MonarchCoopersCornerImg} className='assoc_logos' />
              <img src={MonroeVillageImg} className='assoc_logos' />
              <img src={NorthItaliaImg} className='assoc_logos' />
              <img src={NovelPayImg} className='assoc_logos' />
              <img src={NuVasiveImg} className='assoc_logos' />
              <img src={OakStreetHealthImg} className='assoc_logos' />
              <img src={OldNavyImg} className='assoc_logos' />
              <img src={OshKoshImg} className='assoc_logos' />
              <img src={PeletonImg} className='assoc_logos' />
              <img src={PetcoImg} className='assoc_logos' />
              <img src={PetsmartImg} className='assoc_logos' />
              <img src={PretImg} className='assoc_logos' />
              <img src={PTCImg} className='assoc_logos' />
              <img src={PublicStorageImg} className='assoc_logos' />
              <img src={RitasImg} className='assoc_logos' />
              <img src={SalvatoreImg} className='assoc_logos' />
              <img src={SamsungImg} className='assoc_logos' />
              <img src={ShinolaImg} className='assoc_logos' />
              <img src={SignifyImg} className='assoc_logos' />
              <img src={SilverMirrorImg} className='assoc_logos' />
              <img src={SnipersImg} className='assoc_logos' />
              <img src={SpecialtySurgeryImg} className='assoc_logos' />
              <img src={SolvayImg} className='assoc_logos' />
              <img src={SonoBelloImg} className='assoc_logos' />
              <img src={StaplesImg} className='assoc_logos' />
              <img src={SubaruImg} className='assoc_logos' />
              <img src={SummitImg} className='assoc_logos'/>
              <img src={SunriseSeniorLivingImg} className='assoc_logos' />
              <img src={TaihoImg} className='assoc_logos' />
              <img src={TexasRoadhouseImg} className='assoc_logos' />
              <img src={TheHabitBurgerGrillImg} className='assoc_logos' />
              <img src={TheResidenceImg} className='assoc_logos' />
              <img src={TripleFiveImg} className='assoc_logos' />
              <img src={TrulucksImg} className='assoc_logos' />
              <img src={VermellaImg} className='assoc_logos' />
              <img src={WalmartImg} className='assoc_logos' />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    )
}

export default Associates
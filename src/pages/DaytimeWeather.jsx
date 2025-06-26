import { useParams } from 'react-router-dom'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import DaytimeCard from '../components/DaytimeCard'
import CityTitle from '../components/CityTitle'

import './css/commit.css'

function DaytimeWeather() {
   const { cityName } = useParams()

   return (
      <>
         <Nav />
         <div className="background">
            <div className="wrapper">
               <CityTitle city={cityName} />
               <DaytimeCard cityName={cityName} />
            </div>
         </div>
         <Footer />
      </>
   )
}

export default DaytimeWeather

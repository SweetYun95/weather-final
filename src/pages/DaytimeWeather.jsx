import Nav from '../components/Nav'
import Footer from '../components/Footer'
import DaytimeCard from '../components/DaytimeCard'
import { useParams } from 'react-router-dom'

function DaytimeWeather() {
   const { cityName } = useParams()

   return (
      <>
         <Nav />
         <DaytimeCard cityName={cityName} />
         <Footer />
      </>
   )
}

export default DaytimeWeather

import { Route, Routes } from 'react-router-dom'
import Home from '../../tmdb-final/src/pages/Home'
import TodayWeather from './pages/TodayWeather'
import DaytimeWeather from './pages/DaytimeWeather'
import NotFound from '../../tmdb-final/src/pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/weather" element={<TodayWeather />} />
         <Route path="/forecast" element={<DaytimeWeather />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App

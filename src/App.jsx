import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TodayWeather from './pages/TodayWeather'
import DaytimeWeather from './pages/DaytimeWeather'
import Notfound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/today" element={<TodayWeather />} />
         <Route path="/daytime" element={<DaytimeWeather />} />
         <Route path="/*" element={<Notfound />} />
      </Routes>
   )
}

export default App

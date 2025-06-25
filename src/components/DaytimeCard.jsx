import { fetchDaytimes } from '../features/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'
import './css/DaytimeCard.css'

function DaytimeCard({ cityName = 'incheon' }) {
   const dispatch = useDispatch()
   const { daytime, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchDaytimes(cityName))
   }, [dispatch, cityName])

   const groupedData = useMemo(() => {
      if (!daytime) return []

      const dayMap = new Map()

      daytime.forEach((entry) => {
         const date = entry.dt_txt.split(' ')[0]
         if (!dayMap.has(date)) dayMap.set(date, [])
         dayMap.get(date).push(entry)
      })

      return Array.from(dayMap.entries())
         .slice(0, 5)
         .map(([date, entries]) => {
            const representative = entries.find((e) => e.dt_txt.includes('12:00:00')) || entries[Math.floor(entries.length / 2)]

            const temps = entries.map((e) => e.main.temp)
            const tempMins = entries.map((e) => e.main.temp_min)
            const tempMaxs = entries.map((e) => e.main.temp_max)
            const humidities = entries.map((e) => e.main.humidity)
            const clouds = entries.map((e) => e.clouds.all)
            const pops = entries.map((e) => e.pop || 0)

            return {
               date,
               icon: representative.weather[0].icon,
               temp: representative.main.temp,
               feels_like: representative.main.feels_like,
               temp_min: Math.min(...tempMins),
               temp_max: Math.max(...tempMaxs),
               humidity: Math.round(humidities.reduce((a, b) => a + b) / humidities.length),
               clouds: Math.round(clouds.reduce((a, b) => a + b) / clouds.length),
               pop: Math.max(...pops),
            }
         })
   }, [daytime])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>
   if (!groupedData.length) return <p>데이터 없음</p>

   return (
      <div className="daytime-container">
         {groupedData.map((day, idx) => (
            <div key={idx} className="daytime-card">
               <h4>{day.date.slice(5).replace('-', '/')}</h4>
               <div className="icon-wrap">
                  <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="날씨 아이콘" />
               </div>
               <hr />

               <ul className="info-box">
                  <li>현재 기온: {day.temp.toFixed(1)}℃</li>
                  <li>체감 온도: {day.feels_like.toFixed(1)}℃</li>
                  <li>최고 기온: {day.temp_max.toFixed(1)}℃</li>
                  <li>최저 기온: {day.temp_min.toFixed(1)}℃</li>
                  <li>습도: {day.humidity}%</li>
                  <li>구름량: {day.clouds}%</li>
                  <li>강수 확률: {(day.pop * 100).toFixed(0)}%</li>
               </ul>
            </div>
         ))}
      </div>
   )
}

export default DaytimeCard

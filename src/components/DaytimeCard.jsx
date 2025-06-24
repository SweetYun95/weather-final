import { fetchDaytimes } from '../features/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function DaytimeCard({ cityName }) {
   const dispatch = useDispatch()
   const { daytime, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchDaytimes(cityName))
   }, [dispatch, cityName])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>
   if (!daytime || daytime.length === 0) return <p>날씨 정보가 없습니다.</p>

   return (
      <div className="daytime-container">
         {daytime.slice(0, 5).map((day) => (
            <div className="daytime-card" key={day.date}>
               <h4>{day.date}</h4>
               <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘" />
               <ul>
                  <li>강수 확률: {day.pop}%</li>
                  <li>습도: {day.humidity}%</li>
                  <li>최고 기온: {day.temp_max}°C</li>
                  <li>최저 기온: {day.temp_min}°C</li>
                  <li>체감 온도: {day.feels_like}°C</li>
                  <li>일출 시간: {day.sunrise}</li>
                  <li>일몰 시간: {day.sunset}</li>
               </ul>
            </div>
         ))}
      </div>
   )
}

export default DaytimeCard

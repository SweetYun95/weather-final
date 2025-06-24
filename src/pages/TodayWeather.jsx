import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './css/commit.css'

import { fetchTodays } from '../features/weatherSlice'
import { StyledButton } from '../styles/styledComponents'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function TodayWeather({ cityName }) {
   const dispatch = useDispatch()
   const { today, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchTodays(cityName))
   }, [dispatch, cityName])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error:{error}</p>

   return (
      <>
         <Nav />
         <div>
            {today && (
               <div className="weather_card">
                  <div>
                     <img src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`} alt={today.weather[0].description} />
                  </div>
                  <div className="weather_info">
                     <h2>{new Date().toLocaleDateString()}</h2>
                     <h1>
                        {today.name}, {today.sys.country}
                     </h1>
                     <h3>{today.main.temp}°C</h3>

                     <div className="temp_details">
                        <p>
                           체감 온도: {today.main.feels_like}°C
                           <br />
                           최고 온도: {today.main.temp_max}°C
                           <br />
                           최저 온도: {today.main.temp_min}°C
                        </p>
                        <StyledButton to="/daytime">주간 날씨 보기</StyledButton>
                     </div>

                    
                   
                  </div>
               </div>
            )}
         </div>
         <Footer />
      </>
   )
}

export default TodayWeather

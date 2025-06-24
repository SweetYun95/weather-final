import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { fetchTodays } from '../features/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function TodayWeather(cityName) {
   const dispatch = useDispatch()
   const { today, loading, error } = useSelector((state) => state.today)

   useEffect(() => {
      dispatch(fetchTodays(cityName))
   }, [dispatch])

   return (
      <>
         <Nav />
         <div>
            <div className="weather_card">
               <div>날씨 아이콘</div>
               <div>
                  <h2>년 월 일</h2>
                  <h1>도시, 국가</h1>
                  <h3>몇도?</h3>
                  <div>
                     <p>체감 온도: </p>
                     <p>최고 온도: </p>
                     <p>최저 온도: </p>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default TodayWeather

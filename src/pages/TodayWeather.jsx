import Nav from '../components/Nav'
import Footer from '../components/Footer'

function TodayWeather() {
   return (
      <>
         <Nav />
         <div>
            <p>오늘 날씨</p>
            <div>
               <h2>년 월 일</h2>
               <h1>도시, 국가</h1>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default TodayWeather

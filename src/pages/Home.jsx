import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WeatherCardSlider from '../components/WeatherCardSlider'

import { Button, Input } from '../styles/styledComponents'
import cityMap from '../utils/cityMap'

import './css/commit.css'

function Home() {
   const [q, setQ] = useState('')
   const navigate = useNavigate()

   const handleInputChange = (e) => {
      setQ(e.target.value)
   }

   const handleSearch = (e) => {
      e.preventDefault()
      const trimmed = q.trim()
      if (!trimmed) {
         alert('도시를 입력해주세요.')
         return
      }
      const englishName = cityMap[trimmed] || trimmed
      navigate(`/today/${englishName}`)
   }

   const handleQuickMove = (city) => (e) => {
      e.preventDefault()
      navigate(`/today/${city}`)
   }

   return (
      <>
         <Nav />
         <div className="background">
            <div className="home-container">
               <form className="search_form" onSubmit={handleSearch}>
                  <Input $height="40px" $fontSize="1.1rem" value={q} onChange={handleInputChange} placeholder="도시를 입력하세요" />
                  <Button $width="100px" type="submit">
                     검색
                  </Button>
               </form>

               <div className="link_to_move_btn">
                  <form className="search_form" onSubmit={handleQuickMove('Seoul')}>
                     <Button $width="200px" type="submit">
                        서울 날씨 보기
                     </Button>
                  </form>
                  <form className="search_form" onSubmit={handleQuickMove('Incheon')}>
                     <Button $width="200px" type="submit">
                        인천 날씨 보기
                     </Button>
                  </form>
                  <form className="search_form" onSubmit={handleQuickMove('Busan')}>
                     <Button $width="200px" type="submit">
                        부산 날씨 보기
                     </Button>
                  </form>
               </div>

               <div className="slider-wrap">
                  <WeatherCardSlider />
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home

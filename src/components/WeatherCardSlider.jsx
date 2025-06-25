import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchTodays } from '../features/weatherSlice'
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const cities = ['Seoul', 'Incheon', 'Busan', 'Daegu', 'Daejeon', 'Gwangju', 'Jeju', 'Ulsan']

function WeatherCardSlider() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [weatherData, setWeatherData] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchAll = async () => {
         const result = {}
         for (const city of cities) {
            const data = await dispatch(fetchTodays(city)).unwrap()
            result[city] = data
         }
         setWeatherData(result)
         setLoading(false)
      }

      fetchAll()
   }, [dispatch])

   if (loading)
      return (
         <Box textAlign="center">
            <CircularProgress />
         </Box>
      )

   return (
      <Box sx={{ width: '90%', margin: '0 auto', mt: 4 }}>
         <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
               1024: { slidesPerView: 3 },
               768: { slidesPerView: 2 },
               0: { slidesPerView: 1 },
            }}
         >
            {cities.map((city) => {
               const data = weatherData[city]
               if (!data) return null
               return (
                  <SwiperSlide key={city}>
                     <Card
                        sx={{
                           p: 2,
                           textAlign: 'center',
                           height: '100%',
                           cursor: 'pointer',
                           transition: 'transform 0.2s',
                           '&:hover': {
                              transform: 'scale(1.05)',
                           },
                        }}
                        onClick={() => navigate(`/today/${city}`)}
                     >
                        <CardContent>
                           <Typography variant="h6">{data.name}</Typography>
                           <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} width={80} />
                           <Typography variant="body2">{data.weather[0].description}</Typography>
                        </CardContent>
                     </Card>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </Box>
   )
}

export default WeatherCardSlider

import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const AUTH_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
})

// 오늘의 날씨
export const getTodayWeather = async (cityName = 'incheon') => {
   const response = await weatherApi.get(`/weather`, {
      // https://api.openweathermap.org/data/2.5/weather?q=incheon&appid=AUTH_KEY&units=metric&lang=kr
      params: {
         q: cityName,
         appid: AUTH_KEY,
         units: 'metric',
         lang: 'kr',
      },
   })

   return response.data
}

// 주간날씨
export const getDaytimeWeather = async (cityName = 'incheon') => {
   const response = await weatherApi.get(`/forecast`, {
      //api.openweathermap.org/data/2.5/forecast?q=incheon&appid=7067b6f59b09b2ad1c8f49bfa1f8ad49&units=metric&lang=kr
      params: {
         q: cityName,
         appid: AUTH_KEY,
         units: 'metric',
         lang: 'kr',
      },
   })

   return response.data
}

export default weatherApi

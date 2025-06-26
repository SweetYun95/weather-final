import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const AUTH_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
})

// 오늘의 날씨
export const getTodayWeather = async (cityName = 'incheon') => {
   const response = await weatherApi.get(`/weather`, {
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

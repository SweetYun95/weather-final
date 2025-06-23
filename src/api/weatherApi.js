import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const AUTH_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `${AUTH_KEY}`,
   },
})

export const getTodayWeather = async () => {
   const response = await weatherApi.get(`/weather`, {
      // https://api.openweathermap.org/data/2.5/weather?q=incheon&appid=AUTH_KEY&units=metric&lang=kr
      params: {
         q,
         appid: AUTH_KEY,
         units: metric,
         lang: kr,
      },
   })
    
   return response
}

export default weatherApi

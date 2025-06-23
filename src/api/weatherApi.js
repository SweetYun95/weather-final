import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
// const AUTH_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

export const getTodayWeather = async (cityName = 'incheon') => {
   const response = await weatherApi.get(`/weather`, {
      // https://api.openweathermap.org/data/2.5/weather?q=incheon&appid=AUTH_KEY&units=metric&lang=kr
      params: {
         q: cityName,
         appid: import.meta.env.VITE_WEATHER_API_KEY,
         units: 'metric',
         lang: 'kr',
      },
   })

   return response.data
}

export default weatherApi

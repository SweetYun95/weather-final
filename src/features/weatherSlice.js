import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodayWeather, getDaytimeWeather } from '../api/weatherApi'

export const fetchTodays = createAsyncThunk('weather/fetchTodays', async (cityName) => {
   const data = await getTodayWeather(cityName)
   return data
})

export const fetchDaytimes = createAsyncThunk('weather/fetchDaytimes', async (cityName) => {
   const data = await getDaytimeWeather(cityName)
   return data.list
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      today: null,
      daytime: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // Today (현재 날씨)
         .addCase(fetchTodays.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchTodays.fulfilled, (state, action) => {
            state.loading = false
            state.today = action.payload
         })
         .addCase(fetchTodays.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         // Forecast (주간 날씨)
         .addCase(fetchDaytimes.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchDaytimes.fulfilled, (state, action) => {
            state.loading = false
            state.daytime = action.payload
         })
         .addCase(fetchDaytimes.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer

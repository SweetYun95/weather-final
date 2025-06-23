import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodayWeather } from '../api/weatherApi'

export const fetchTodays = createAsyncThunk('weather/fetchTodays', async () => {
   const response = await getTodayWeather()
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      today: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
   },
})

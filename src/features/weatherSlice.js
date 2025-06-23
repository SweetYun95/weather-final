import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodayWeather } from '../api/weatherApi'

export const fetchTodays = createAsyncThunk('weather/fetchTodays', async ({ cityName }) => {
   const data = await getTodayWeather({ cityName })
   console.log(data)
   return data
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      today: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
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
   },
})

export default weatherSlice.reducer

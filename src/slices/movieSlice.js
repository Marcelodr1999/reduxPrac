import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
  duration: "",
//   movies,
}

export const movieSlice = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload
    },
    addDuration: (state, action) => {
      state.duration = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTitle, addDuration } = movieSlice.actions

export default movieSlice.reducer
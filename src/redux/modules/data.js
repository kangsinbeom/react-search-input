import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state = action.payload;
    }
  }
})
export default dataSlice.reducer;
export const {setData} = dataSlice.actions;

//  밑에 export 하는 애들은 어디다 쓰이는고??? 
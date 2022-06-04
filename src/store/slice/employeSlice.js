import { createSlice } from "@reduxjs/toolkit";

const employSlice = createSlice({
  name: "Employe",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    remove: (state, action) => {},
    update: (state, action) => {},
  },
});

export const { add, remove, update } = employSlice.actions;
export default employSlice.reducer;

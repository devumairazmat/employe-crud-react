import { createSlice } from "@reduxjs/toolkit";

const employSlice = createSlice({
  name: "Employe",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    remove: (state, action) => {
      //   state.value.splice(action.payload, 1);
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    update: (state, action) => {},
  },
});

export const { add, remove, update } = employSlice.actions;
export default employSlice.reducer;

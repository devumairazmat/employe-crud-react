import { createSlice } from "@reduxjs/toolkit";

const employSlice = createSlice({
  name: "Employe",
  initialState: { value: [], updateData: [] },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      //   state.value.splice(action.payload, 1);
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    load: (state, action) => {
      state.updateData = [action.payload];
    },
    update: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.updateData = [];
    },
  },
});

export const { add, remove, load, update } = employSlice.actions;
export default employSlice.reducer;

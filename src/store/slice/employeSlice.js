import { createSlice } from "@reduxjs/toolkit";

const employSlice = createSlice({
  name: "employe",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {},
    remove: (state, action) => {},
    update: (state, action) => {},
  },
});

export const { add, remove, update } = employSlice.actions;
export default employSlice;

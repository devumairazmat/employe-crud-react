import { configureStore } from "@reduxjs/toolkit";
import employSlice from "./slice/employeSlice";
const Store = configureStore({
  reducer: {
    employe: employSlice,
  },
});

export default Store;

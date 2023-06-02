import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./context/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

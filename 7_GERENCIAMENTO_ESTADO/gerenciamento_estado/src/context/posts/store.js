import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const postStore = configureStore({
  reducer: rootReducer,
});

export default postStore;

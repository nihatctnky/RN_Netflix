import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/moviesSlice"
import downloadReducer from "./slice/downloadSlice";

export const store = configureStore({
  reducer:{
    movies:moviesReducer,
    download: downloadReducer,
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
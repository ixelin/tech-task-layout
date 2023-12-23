// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import storiesSlice from "features/stories/storiesSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    storiesSlice: storiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
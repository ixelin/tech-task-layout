import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "../features/navbar/navbarSlice";
import storiesSlice from "features/stories/storiesSlice";
import categoriesSlice from "features/categories/categoriesSlice";
import topSalesSlice from "features/topSales/topSalesSlice";
import auctionSlice from './../features/auction/auctionSlice';
export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    stories: storiesSlice,
    categories: categoriesSlice,
    topSales: topSalesSlice,
    auctions: auctionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
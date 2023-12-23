import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  profileNotifications: Number | String,
  cartNotifications: Number | String,
  numOfGoods: Number,  
}

const initialState: NavbarState = {
  profileNotifications: 0,
  cartNotifications: 2,
  numOfGoods: 43903,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {},
});

export default navbarSlice.reducer;

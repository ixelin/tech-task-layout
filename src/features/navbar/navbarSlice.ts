import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  profileNotifications: number | string,
  cartNotifications: number | string,
  numOfGoods: number,  
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

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTopSales } from "types";

interface topSalesState {
  topSales: Array<TTopSales>;
}

const initialState: topSalesState = {
  topSales: [
    {
      name: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605 testing ellipsis",
      price: 1294,
      isSet: true,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmQvRH~DswdfTVfvbMq~aE6mgyjpzZTUyzk1pHssvMfUxeimYiOQZqcm~9k4JwhHzSxFisz1lzaV60-ytSB27pOtghcXYaY8TPkYWrs8GCbF25vsouvlXuRgHVy4K5bB-j-yI5DeaPUb9N0EiNWfgFOqTnaGjAHJVVX7YbOFCbVhLr3VsjiK~ElhJ-9UR6WQHW4ZnqUEtfgb8cqQjjm8qGgCFnVfA0PkaS2rhpEr~IoCwJPwFvJsLK175jLayJN7KFKAd0Ckx4LhwX1tZjiDqaNmmQtWXhIUQruwjyxDVLRC-6BQ~XvvLAA6jfFhxl3NQvSzA-PlQWLGENaBYRyk~g__",
      id: 1,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      isSet: true,
      inStock: true,
      inCart: 0,
      isLiked: true,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmQvRH~DswdfTVfvbMq~aE6mgyjpzZTUyzk1pHssvMfUxeimYiOQZqcm~9k4JwhHzSxFisz1lzaV60-ytSB27pOtghcXYaY8TPkYWrs8GCbF25vsouvlXuRgHVy4K5bB-j-yI5DeaPUb9N0EiNWfgFOqTnaGjAHJVVX7YbOFCbVhLr3VsjiK~ElhJ-9UR6WQHW4ZnqUEtfgb8cqQjjm8qGgCFnVfA0PkaS2rhpEr~IoCwJPwFvJsLK175jLayJN7KFKAd0Ckx4LhwX1tZjiDqaNmmQtWXhIUQruwjyxDVLRC-6BQ~XvvLAA6jfFhxl3NQvSzA-PlQWLGENaBYRyk~g__",
      id: 2,
    },
    {
      name: "Держатель для лейки",
      price: 1294,
      isSet: true,
      inStock: true,
      inCart: 1,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmQvRH~DswdfTVfvbMq~aE6mgyjpzZTUyzk1pHssvMfUxeimYiOQZqcm~9k4JwhHzSxFisz1lzaV60-ytSB27pOtghcXYaY8TPkYWrs8GCbF25vsouvlXuRgHVy4K5bB-j-yI5DeaPUb9N0EiNWfgFOqTnaGjAHJVVX7YbOFCbVhLr3VsjiK~ElhJ-9UR6WQHW4ZnqUEtfgb8cqQjjm8qGgCFnVfA0PkaS2rhpEr~IoCwJPwFvJsLK175jLayJN7KFKAd0Ckx4LhwX1tZjiDqaNmmQtWXhIUQruwjyxDVLRC-6BQ~XvvLAA6jfFhxl3NQvSzA-PlQWLGENaBYRyk~g__",
      id: 3,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      isSet: true,
      inStock: true,
      inCart: 1,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmQvRH~DswdfTVfvbMq~aE6mgyjpzZTUyzk1pHssvMfUxeimYiOQZqcm~9k4JwhHzSxFisz1lzaV60-ytSB27pOtghcXYaY8TPkYWrs8GCbF25vsouvlXuRgHVy4K5bB-j-yI5DeaPUb9N0EiNWfgFOqTnaGjAHJVVX7YbOFCbVhLr3VsjiK~ElhJ-9UR6WQHW4ZnqUEtfgb8cqQjjm8qGgCFnVfA0PkaS2rhpEr~IoCwJPwFvJsLK175jLayJN7KFKAd0Ckx4LhwX1tZjiDqaNmmQtWXhIUQruwjyxDVLRC-6BQ~XvvLAA6jfFhxl3NQvSzA-PlQWLGENaBYRyk~g__",
      id: 4,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      isSet: false,
      inStock: true,
      inCart: 1,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmQvRH~DswdfTVfvbMq~aE6mgyjpzZTUyzk1pHssvMfUxeimYiOQZqcm~9k4JwhHzSxFisz1lzaV60-ytSB27pOtghcXYaY8TPkYWrs8GCbF25vsouvlXuRgHVy4K5bB-j-yI5DeaPUb9N0EiNWfgFOqTnaGjAHJVVX7YbOFCbVhLr3VsjiK~ElhJ-9UR6WQHW4ZnqUEtfgb8cqQjjm8qGgCFnVfA0PkaS2rhpEr~IoCwJPwFvJsLK175jLayJN7KFKAd0Ckx4LhwX1tZjiDqaNmmQtWXhIUQruwjyxDVLRC-6BQ~XvvLAA6jfFhxl3NQvSzA-PlQWLGENaBYRyk~g__",
      id: 5,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      isSet: true,
      inStock: true,
      inCart: 1,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmQvRH~DswdfTVfvbMq~aE6mgyjpzZTUyzk1pHssvMfUxeimYiOQZqcm~9k4JwhHzSxFisz1lzaV60-ytSB27pOtghcXYaY8TPkYWrs8GCbF25vsouvlXuRgHVy4K5bB-j-yI5DeaPUb9N0EiNWfgFOqTnaGjAHJVVX7YbOFCbVhLr3VsjiK~ElhJ-9UR6WQHW4ZnqUEtfgb8cqQjjm8qGgCFnVfA0PkaS2rhpEr~IoCwJPwFvJsLK175jLayJN7KFKAd0Ckx4LhwX1tZjiDqaNmmQtWXhIUQruwjyxDVLRC-6BQ~XvvLAA6jfFhxl3NQvSzA-PlQWLGENaBYRyk~g__",
      id: 6,
    },
  ],
};

export const topSalesSlice = createSlice({
  name: "topSales",
  initialState,
  reducers: {
    incrementInCart: (state, action: PayloadAction<number>) => {
      const item = state.topSales.find((item) => item.id === action.payload);
      if (item && item.inCart < 999) {
        item.inCart++;
      }
    },
    decrementInCart: (state, action: PayloadAction<number>) => {
      const item = state.topSales.find((item) => item.id === action.payload);
      if (item && item.inCart > 0) {
        item.inCart--;
      }
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const item = state.topSales.find((item) => item.id === action.payload);
      if (item) {
        item.isLiked = !item.isLiked;
      }
    },
  },
});
export const { incrementInCart, decrementInCart, toggleLike } = topSalesSlice.actions;
export default topSalesSlice.reducer;

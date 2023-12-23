import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAuctionSales } from "types";

interface auctionSalesState {
  auctions: Array<TAuctionSales>;
}

const initialState: auctionSalesState = {
  auctions: [
    {
      name: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605 testing ellipsis",
      price: 1294,
      oldPrice:1294,
      isSet: true,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1704067200&Signature=bBssFAidYP3GJS5Ww~tqLYlCs-sZt7J7hIYRsf0VYASHC8NH5QbKkILOxXnNEOr1M31KCEPMFDbSO5AKL7YhmMG34TrhA8FcpdxTQ3pm5lZoa4xpngugnqUymAC60PkEu13Ug1dN9ROmHTdiCyzLAJgbTiTssDAK6WqwPf5x9i46DkXE94QHv4wEHaq69FwgTqamSd2Www83uWRZ3mp4xZdi9joMrdaICb-edOG6UXQwrKB9bfeFwLrOXL6qPYNFj6Dsfbf9pv7XJiS55beW0vQ02poN67SmhY0oIGT3dI9CiDm4IzdHoJBWyP3SBxRPoctcmg7qaBwHZjVwFjb21w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 1,
    },
    {
      name: "Держатель для лейки",
      price: 1294,
      oldPrice:1294,
      isSet: true,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1704067200&Signature=bBssFAidYP3GJS5Ww~tqLYlCs-sZt7J7hIYRsf0VYASHC8NH5QbKkILOxXnNEOr1M31KCEPMFDbSO5AKL7YhmMG34TrhA8FcpdxTQ3pm5lZoa4xpngugnqUymAC60PkEu13Ug1dN9ROmHTdiCyzLAJgbTiTssDAK6WqwPf5x9i46DkXE94QHv4wEHaq69FwgTqamSd2Www83uWRZ3mp4xZdi9joMrdaICb-edOG6UXQwrKB9bfeFwLrOXL6qPYNFj6Dsfbf9pv7XJiS55beW0vQ02poN67SmhY0oIGT3dI9CiDm4IzdHoJBWyP3SBxRPoctcmg7qaBwHZjVwFjb21w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 2,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      oldPrice:1294,
      isSet: false,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1704067200&Signature=bBssFAidYP3GJS5Ww~tqLYlCs-sZt7J7hIYRsf0VYASHC8NH5QbKkILOxXnNEOr1M31KCEPMFDbSO5AKL7YhmMG34TrhA8FcpdxTQ3pm5lZoa4xpngugnqUymAC60PkEu13Ug1dN9ROmHTdiCyzLAJgbTiTssDAK6WqwPf5x9i46DkXE94QHv4wEHaq69FwgTqamSd2Www83uWRZ3mp4xZdi9joMrdaICb-edOG6UXQwrKB9bfeFwLrOXL6qPYNFj6Dsfbf9pv7XJiS55beW0vQ02poN67SmhY0oIGT3dI9CiDm4IzdHoJBWyP3SBxRPoctcmg7qaBwHZjVwFjb21w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 3,
    },
    {
      name: "Держатель для лейки",
      price: 1294,
      oldPrice:1294,
      isSet: true,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1704067200&Signature=bBssFAidYP3GJS5Ww~tqLYlCs-sZt7J7hIYRsf0VYASHC8NH5QbKkILOxXnNEOr1M31KCEPMFDbSO5AKL7YhmMG34TrhA8FcpdxTQ3pm5lZoa4xpngugnqUymAC60PkEu13Ug1dN9ROmHTdiCyzLAJgbTiTssDAK6WqwPf5x9i46DkXE94QHv4wEHaq69FwgTqamSd2Www83uWRZ3mp4xZdi9joMrdaICb-edOG6UXQwrKB9bfeFwLrOXL6qPYNFj6Dsfbf9pv7XJiS55beW0vQ02poN67SmhY0oIGT3dI9CiDm4IzdHoJBWyP3SBxRPoctcmg7qaBwHZjVwFjb21w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 4,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      oldPrice:1294,
      isSet: true,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1704067200&Signature=bBssFAidYP3GJS5Ww~tqLYlCs-sZt7J7hIYRsf0VYASHC8NH5QbKkILOxXnNEOr1M31KCEPMFDbSO5AKL7YhmMG34TrhA8FcpdxTQ3pm5lZoa4xpngugnqUymAC60PkEu13Ug1dN9ROmHTdiCyzLAJgbTiTssDAK6WqwPf5x9i46DkXE94QHv4wEHaq69FwgTqamSd2Www83uWRZ3mp4xZdi9joMrdaICb-edOG6UXQwrKB9bfeFwLrOXL6qPYNFj6Dsfbf9pv7XJiS55beW0vQ02poN67SmhY0oIGT3dI9CiDm4IzdHoJBWyP3SBxRPoctcmg7qaBwHZjVwFjb21w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 5,
    },
    {
      name: "Держатель для лейки BOOU PG605",
      price: 1294,
      oldPrice:1294,
      isSet: true,
      inStock: true,
      inCart: 999,
      isLiked: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1704067200&Signature=bBssFAidYP3GJS5Ww~tqLYlCs-sZt7J7hIYRsf0VYASHC8NH5QbKkILOxXnNEOr1M31KCEPMFDbSO5AKL7YhmMG34TrhA8FcpdxTQ3pm5lZoa4xpngugnqUymAC60PkEu13Ug1dN9ROmHTdiCyzLAJgbTiTssDAK6WqwPf5x9i46DkXE94QHv4wEHaq69FwgTqamSd2Www83uWRZ3mp4xZdi9joMrdaICb-edOG6UXQwrKB9bfeFwLrOXL6qPYNFj6Dsfbf9pv7XJiS55beW0vQ02poN67SmhY0oIGT3dI9CiDm4IzdHoJBWyP3SBxRPoctcmg7qaBwHZjVwFjb21w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 6,
    },
  ],
};

export const auction = createSlice({
  name: "auction",
  initialState,
  reducers: {
    incrementInAuctionCart: (state, action: PayloadAction<number>) => {
      const item = state.auctions.find((item) => item.id === action.payload);
      if (item && item.inCart < 999) {
        item.inCart++;
      }
    },
    decrementInAuctionCart: (state, action: PayloadAction<number>) => {
      const item = state.auctions.find((item) => item.id === action.payload);
      if (item && item.inCart > 0) {
        item.inCart--;
      }
    },
  },
});
export const { incrementInAuctionCart, decrementInAuctionCart } = auction.actions;
export default auction.reducer;

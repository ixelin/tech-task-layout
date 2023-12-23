export type TStory = {
  name: string;
  image: string;
  id: number,
};
export type TCategory = {
  name: string;
  image: string;
  goodsAmount: number;
  id: number;
};
export type TTopSales = {
  name: string;
  image: string;
  inCart: number;
  price: number;
  inStock:boolean;
  isSet: boolean;
  isLiked: boolean;
  id: number;
};
export type TAuctionSales = {
  name: string;
  image: string;
  inCart: number;
  price: number;
  oldPrice: number;
  inStock: boolean;
  isSet: boolean;
  isLiked: boolean;
  id: number;
};
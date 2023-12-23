import React from "react";
import { TAuctionSales } from "types";
import style from "./Auction.module.css";
import { useAppDispatch } from "app/hooks";
import Heart from "assets/Heart.svg";
import HeartFilled from "assets/HeartFilled.svg";
import { decrementInAuctionCart, incrementInAuctionCart } from "features/auction/auctionSlice";
const Auction: React.FC<{ item: TAuctionSales }> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(incrementInAuctionCart(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementInAuctionCart(item.id));
  };
  return (
    <div className={style.top}>
      {item.isLiked ? (
        <div className={style.top_like_button}>
          <img src={HeartFilled} alt="liked" />
        </div>
      ) : (
        <div className={style.top_like_button}>
          <img src={Heart} alt="not liked" />
        </div>
      )}
      <div className={style["top-head"]}>
        <div
          className={style["top-image"]}
          style={{
            background: `url(${item.image})`,
          }}
        ></div>
        <p className={style["top-name"]}>{item.name}</p>
      </div>
      <div className={style["top-footer"]}>
        <p className={style["top-price"]}>{item.price} c<span>{item.oldPrice} c</span></p>
        {item.inStock ? (
          <p className={style["top-inStock"]}>В наличии</p>
        ) : (
          <p className={style["top-notInStock"]}>Не в наличии</p>
        )}
        {item.isSet ? (
          <div className={style["top-isSet"]}>
            <div></div>
            <p>Комплект</p>
          </div>
        ) : (
          <div className={style["top-notSet"]}>
            <div></div>
            <p>Не Комплект</p>
          </div>
        )}
        <div className={style["top-cart"]}>
          <button
            onClick={handleDecrement}
            className={style["top-cart-button"]}
          >
            -
          </button>
          <p className={style["top-inCart"]}>{item.inCart}</p>
          <button
            onClick={handleIncrement}
            className={style["top-cart-button"]}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction;

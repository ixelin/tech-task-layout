import React from 'react'
import { TCategory } from 'types'
import style from "./Category.module.css"
const Category: React.FC<{item: TCategory}> = ({item}) => {
  return (
    <div className={style.category}>
      <p className={style["category-name"]}>{item.name}</p>
      <p className={style["category-amount"]}>{item.goodsAmount} товаров</p>
      <div
        className={style["category-image"]}
        style={{
          background: `url(${item.image})`,
        }}
      ></div>
    </div>
  );
}

export default Category
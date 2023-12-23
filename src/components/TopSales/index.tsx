import { useAppSelector } from "app/hooks";
import TopSale from "./TopSale";
import style from "./TopSales.module.css";

import Pagination from "components/Pagination";
import Arrows from "components/Arrows";
import Header from "components/Header";
const TopSales = () => {
  const topSales = useAppSelector((state) => state.topSales.topSales);
  return (
    <div className={style["topSales-container"]}>
      <Arrows />
      <Header header="Хиты продаж" link="перейти в каталог"/>
      <div className={style.topSales}>
        {topSales.map((topSales) => (
          <TopSale key={topSales.id} item={topSales} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default TopSales;

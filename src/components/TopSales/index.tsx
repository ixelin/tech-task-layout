import { useAppSelector } from "app/hooks";
import TopSale from "./TopSale";
import style from "./TopSales.module.css";

import Pagination from "components/Pagination";
import Arrows from "components/Arrows";
const TopSales = () => {
  const topSales = useAppSelector((state) => state.topSales.topSales);
  return (
    <div className={style["topSales-container"]}>
      <Arrows/>
      <h1 className={style["topSales-header"]}>Хиты продаж</h1>
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

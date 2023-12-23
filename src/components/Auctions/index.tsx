import { useAppSelector } from "app/hooks";
import Auction from "./Auction";
import style from "./Auctions.module.css";

import Pagination from "components/Pagination";
import Arrows from "components/Arrows";
import Header from "components/Header";
const Auctions = () => {
  const auctions = useAppSelector((state) => state.auctions.auctions);
  return (
    <div className={style["topSales-container"]}>
      <Arrows />
      <Header header="Аукционные товары" link="перейти в каталог" />
      <div className={style.topSales}>
        {auctions.map((auctions) => (
          <Auction key={auctions.id} item={auctions} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Auctions;

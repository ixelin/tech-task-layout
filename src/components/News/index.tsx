import style from "./News.module.css";
import Pagination from "components/Pagination";
import Arrows from "components/Arrows";
import Header from "components/Header";
import NewsPic from "assets/Illustration.svg"
const News = () => {
  return (
    <div className={style["news-container"]}>
      <Arrows />
      <Header header="Новости" link="все" />
      <div className={style.news}>
        <div className={style["news-item"]}>
          <div className={style["news-item_content"]}>
            <h2>-50%</h2>
            <p>На кухонную мебель</p>
            <button>Подробнее</button>
          </div>
          <img src={NewsPic} alt="News Illustration" />
          <div className={style.circle_top}></div>
          <div className={style.circle_bottom}></div>
        </div>
        <div className={style["news-item"]}>
          <div className={style["news-item_content"]}>
            <h2>-50%</h2>
            <p>На кухонную мебель</p>
            <button>Подробнее</button>
          </div>
          <img src={NewsPic} alt="News Illustration" />
          <div className={style.circle_top}></div>
          <div className={style.circle_bottom}></div>
        </div>
        <div
          className={style["news-item"]}
          style={{ background: "#ECEDF2" }}
        ></div>
      </div>
      <Pagination />
    </div>
  );
};

export default News;

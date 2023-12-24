import style from "./Addresses.module.css";
import Pagination from "components/Pagination";
import Arrows from "components/Arrows";
import Header from "components/Header";
import Iskender from "assets/Iskender.svg";
import Clock from "assets/ClockSquare.svg";
import Location from "assets/Location.svg";
import Phone from "assets/Phone.svg";
import Arrow from "assets/ArrowRightAddress.svg";
const Addresses = () => {
  return (
    <div className={style["addresses-container"]}>
      <Arrows />
      <Header header="Адреса магазинов" link="все" />
      <div className={style.addresses}>
        <div className={style["addresses-item"]}>
          <div className={style["addresses-item_content"]}>
            <div className={style["addresses-item_content-top"]}>
              <img src={Iskender} alt="iskender logo" />
              <div>
                <h2>Iskender home</h2>
                <a href="#">открыть в карте</a>
              </div>
            </div>
            <img src={Arrow} alt="arrow right" />
          </div>
          <div className={style.line}></div>
          <div className={style.addresses_bottom}>
            <div className={style.location}>
              <img src={Location} alt="location icon" />
              <p>Кыргызстан, г. Бишкек ул. Турусбекова A167</p>
            </div>
            <div className={style.time_phone}>
              <div className={style.clock}>
                <img src={Clock} alt="clock icon" />
                <p>08:00 - 22:00</p>
              </div>
              <div className={style.phone}>
                <img src={Phone} alt="phone icon" />
                <p>+996 500 345 345</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["addresses-item"]}>
          <div className={style["addresses-item_content"]}>
            <div className={style["addresses-item_content-top"]}>
              <img src={Iskender} alt="iskender logo" />
              <div>
                <h2>Iskender home</h2>
                <a href="#">открыть в карте</a>
              </div>
            </div>
            <img src={Arrow} alt="arrow right" />
          </div>
          <div className={style.line}></div>
          <div className={style.addresses_bottom}>
            <div className={style.location}>
              <img src={Location} alt="location icon" />
              <p>Кыргызстан, г. Бишкек ул. Турусбекова A167</p>
            </div>
            <div className={style.time_phone}>
              <div className={style.clock}>
                <img src={Clock} alt="clock icon" />
                <p>08:00 - 22:00</p>
              </div>
              <div className={style.phone}>
                <img src={Phone} alt="phone icon" />
                <p>+996 500 345 345</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["addresses-item"]}>
          <div className={style["addresses-item_content"]}>
            <div className={style["addresses-item_content-top"]}>
              <img src={Iskender} alt="iskender logo" />
              <div>
                <h2>Iskender home</h2>
                <a href="#">открыть в карте</a>
              </div>
            </div>
            <img src={Arrow} alt="arrow right" />
          </div>
          <div className={style.line}></div>
          <div className={style.addresses_bottom}>
            <div className={style.location}>
              <img src={Location} alt="location icon" />
              <p>Кыргызстан, г. Бишкек ул. Турусбекова A167</p>
            </div>
            <div className={style.time_phone}>
              <div className={style.clock}>
                <img src={Clock} alt="clock icon" />
                <p>08:00 - 22:00</p>
              </div>
              <div className={style.phone}>
                <img src={Phone} alt="phone icon" />
                <p>+996 500 345 345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Addresses;

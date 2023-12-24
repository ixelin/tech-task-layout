import Logo from "components/Navbar/components/Logo";
import style from "./Footer.module.css"
import AppStore from "assets/AppStore.svg"
import GooglePlay from "assets/GooglePlay.svg"
import WhatsApp from "assets/WhatsApp.svg"
import Instagram from "assets/Instagram.svg"
import Facebook from "assets/Facebook.svg"
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_column}>
          <div className={style.logo}>
            <Logo />
            <span>
              Первый отечественный бренд Iskender на рынке сантехники от
              компании OcOO «Стройдом.кг»
            </span>
          </div>
          <div className={style.buttons}>
            <button className={style.appStore}>
              <img src={AppStore} alt="Apple store" />
            </button>
            <button className={style.googlePlay}>
              <img src={GooglePlay} alt="Google Play market" />
            </button>
          </div>
        </div>
        <div className={style.footer_column}>
          <h2>Адреса</h2>
          <div>
            <p>ЭлитСтрой</p>
            <span>ул. Ден-Сяопина 18/1</span>
          </div>
          <div>
            <p>Баткен</p>
            <span>ул. Льва-Толстого 19</span>
          </div>
          <div>
            <p>ТааТан</p>
            <span>ул. Лермонтова 6</span>
          </div>
        </div>
        <div className={style.footer_column}>
          <h2>Компания</h2>
          <p style={{ marginBottom: "0" }}>Каталог</p>
          <p style={{ marginBottom: "0" }}>Избранное</p>
          <p style={{ marginBottom: "0" }}>Личный Кабинет</p>
        </div>
        <div className={style.footer_column}>
          <h2>Контакты</h2>
          <div>
            <p>Email</p>
            <span>iskender.kg@gmail.com</span>
          </div>
          <div className={style.phone_numbers}>
            <p>Телефон:</p>
            <span>+996 (500) 000-104</span>
            <span>+996 (997) 000-104</span>
            <span>+996 (222) 000-104</span>
          </div>
          <button className={style.whatsApp}>
            <img src={WhatsApp} alt="Whats app" />
            WhatsApp
          </button>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <h3>© 2023 Iskender.kg - Отечественный бренд сантехники</h3>
        <div className={style['footer_bottom-icons']}>
          <img src={Instagram} alt="Instagram icon" />
          <img src={Facebook} alt="Facebook icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer
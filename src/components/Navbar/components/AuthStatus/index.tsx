import React from "react";
import styles from "./AuthStatus.module.css";
import ProfileIcon from "assets/Profile.svg";
import CartIcon from "assets/Cart.svg";
import { useAppSelector } from "app/hooks";
const AuthStatus = () => {
  const profileNotifications = useAppSelector((state) => state.navbar.profileNotifications)
  const cartNotifications = useAppSelector((state) => state.navbar.cartNotifications)
  return (
    <div className={styles.auth_container}>
      <div className={styles["auth-sign"]}>
        <p>Добро Пожаловать</p>
        <h5>Вход/Регистрация</h5>
      </div>
      <div className={styles["auth-buttons"]}>
        <button className={styles["auth-profile"]}>
          <img src={ProfileIcon} alt="Profile" />
          {+profileNotifications? <div className={styles["auth-popup"]}>{+profileNotifications > 99? "99+" : profileNotifications.toString()}</div> : null}
        </button>
        <div className={styles["auth-line"]}></div>
        <button className={styles["auth-cart"]}>
          <img src={CartIcon} alt="Cart" />
          {+cartNotifications? <div className={styles["auth-popup"]}>{+cartNotifications > 99? "99+" : cartNotifications.toString()}</div> : null}
        </button>
      </div>
    </div>
  );
};

export default AuthStatus;

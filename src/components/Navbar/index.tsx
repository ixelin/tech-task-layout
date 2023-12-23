import React from "react";
import styles from "./Navbar.module.css"
import Logo from "./components/Logo";
import Catalogue from "./components/Catalogue";
import SearchBar from "./components/SearchBar";
import AuthStatus from "./components/AuthStatus";
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <Logo />
      <Catalogue />
      <SearchBar />
      <AuthStatus />
    </div>
  );
};

export default Navbar;

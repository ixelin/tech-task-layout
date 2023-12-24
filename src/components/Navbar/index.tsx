import styles from "./Navbar.module.css"
import Logo from "./components/Logo";
import Catalogue from "./components/Catalogue";
import SearchBar from "./components/SearchBar";
import AuthStatus from "./components/AuthStatus";
const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <Logo />
      <Catalogue />
      <SearchBar />
      <AuthStatus />
    </nav>
  );
};

export default Navbar;

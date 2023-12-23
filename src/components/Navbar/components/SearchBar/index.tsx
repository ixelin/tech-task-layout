import React from 'react'
import styles from "./SearchBar.module.css"
import SearchIcon from "assets/Search.svg"
const SearchBar = () => {
  const numOfGoods = 42903
  return (
    <div className={styles.search_container}>
      <img
        src={SearchIcon}
        alt="Search icon"
        className={styles["search-icon"]}
      />
      <span className={styles['search-numOfGoods']}>{numOfGoods}</span>
      <input type="text" className={styles["search-bar"]} placeholder="Поиск" />
    </div>
  );
}

export default SearchBar
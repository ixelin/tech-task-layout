import React from 'react'
import style from "./Header.module.css"
const Header: React.FC<{header:string, link:string}> = ({header, link}) => {
  return (
    <div className={style.head}>
      <h1 className={style.header}>{header}</h1>
      <h2 className={style.link}>{link}</h2>
    </div>
  );
}

export default Header
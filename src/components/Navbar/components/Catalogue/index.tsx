import styles from "./Catalogue.module.css"
import CatalogueIcon from "assets/BurgerCatalogue.svg"
const Catalogue = () => {
  return (
    <div className={styles.catalogue_container}>
        <img src={CatalogueIcon} alt="Catalogue Menu" />
        <span className={styles.catalogue_text}>Каталог</span>
    </div>
  )
}

export default Catalogue
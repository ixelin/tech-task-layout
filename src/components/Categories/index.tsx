import { useAppSelector } from "app/hooks"
import Category from "./Category";
import style from "./Categories.module.css"
const Categories = () => {
  const categories = useAppSelector((state) => state.categories.categories)
  return (
    <div className={style['categories-container']}>
      <h1 className={style['categories-header']}>Категории</h1>
      <div className={style.categories}>
        {categories.map((category) => (
          <Category key={category.id} item={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories
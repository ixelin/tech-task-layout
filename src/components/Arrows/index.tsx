import RightArrow from "assets/ArrowRight.svg";
import LeftArrow from "assets/ArrowLeft.svg";
import style from "./Arrows.module.css"
const Arrows = () => {
  return (
    <div className={style.arrows}>
      <img src={LeftArrow} alt="Left Arrow" style={{padding:'5px'}}/>
      <img src={RightArrow} alt="Right Arrow" style={{padding:'5px'}}/>
    </div>
  );
}

export default Arrows

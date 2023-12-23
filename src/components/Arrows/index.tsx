import RightArrow from "assets/ArrowRight.svg";
import LeftArrow from "assets/ArrowLeft.svg";
const Arrows = () => {
  return (
    <div style={{position:'absolute', top:'50%',left:'-5%', margin:'0 auto', width:'110%', display:'flex', justifyContent:'space-between'}}>
      <img src={LeftArrow} alt="Left Arrow" style={{padding:'5px'}}/>
      <img src={RightArrow} alt="Right Arrow" style={{padding:'5px'}}/>
    </div>
  );
}

export default Arrows

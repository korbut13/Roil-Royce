import { motion as m} from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

import Car from '../assets/pngimg.com - rolls_royce_PNG18.png';
import verticalText from "../utils/vertical-text";

const HomePage = ({visible, onChangeVisible}:{visible:boolean, onChangeVisible:() => void}) => {

  return(
    <div
    className="home">
      <div className="home__left">
        <Link to={"/products"} className="home__left_button">{verticalText("Models")}</Link>
      </div>
      <div
      onClick={()=> {
        if(visible){
          onChangeVisible()
        }
      }}
      className="home__center">
        <div className="home__title">Black Badge
          <p className="home__subtitle">Wraith</p>
        </div>
        <div
        className={!visible ? "home__container-img" : "home__container-img container-img-map"}>
          <m.img
           initial={{width:0}}
           animate={{width:"70%"}}
           exit={{x:"400px", y:"500px",transition:{duration:0.1}}}
           transition={{duration:2}}
          src={Car} alt="" className={!visible ? "container-img__img" : "container-img__img img-map"} />
        </div>
        <Button style={{cursor:"none"}} variant="outline" color="dark" radius="xl" size="md" p="0px 40px">Discover Now</Button>
      </div>
      <div className={!visible ? "home__right" : "home__right map"}>
        <div className={!visible ? "right__info" : "right__info info-map"}>
          <p className="right__title">
              Rolls-Royce Coachbuild Presents
              La Rose Noire Droaptail
          </p>
          <p className="right__description">
          A modern interpretation of the roadster body style, Droptail represents the next chapter of<br/>
          Rolls-Royce Coachbuild.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

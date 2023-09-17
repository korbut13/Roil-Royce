import { Button } from "@mantine/core";

import Car from '../assets/pngimg.com - rolls_royce_PNG18.png';
import verticalText from "../utils/vertical-text";
import Map from "../components/Map";

const HomePage = ({visible, onChangeVisible}:{visible:boolean, onChangeVisible:() => void}) => {

  return(
    <div className="home">
      <div className="home__left">
        <div className="home__left_button">{verticalText("Models")}</div>
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
        <div className="home__container-img">
          <img src={Car} alt="" className="container-img__img" />
        </div>
        <Button style={{cursor:"none"}} variant="outline" color="dark" radius="xl" size="md" p="0px 40px">Discover Now</Button>
      </div>
      <div className={!visible ? "home__right" : "home__right map"}>
        <div
            className={!visible ? "right__info" : "right__info info-map"}>
          <div className="right__title">
              Rolls-Royce Coachbuild Presents
              La Rose Noire Droaptail
          </div>
          <p className="right__description">
          A modern interpretation of the roadster body style, Droptail represents the next chapter of<br/>
          Rolls-Royce Coachbuild. Only four expressions of the motor car will ever be made, each the result of remarkable collaborations between Coachbuild artisans and ambitious, visionary clients. The first commission, Rolls-Royce La Rose Noire Droptail, embodies the allure of the Black Baccara rose.
          </p>
        </div>
        {visible && (<div className="home__map"></div>)}
      </div>
      {visible && (<Map/>)}
    </div>
  )
}

export default HomePage;

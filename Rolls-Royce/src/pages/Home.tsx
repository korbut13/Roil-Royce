import { Button } from "@mantine/core";

import Car from '../assets/pngimg.com - rolls_royce_PNG18.png';
import verticalText from "../utils/vertical-text";

const HomePage = () => {
  return(
    <div className="home">
      <div className="home__left">
        <div className="home__left_button">{verticalText("Models")}</div>
      </div>
      <div className="home__center">
        <div className="home__title">Black Badge
          <p className="home__subtitle">Wraith</p>
        </div>
        <div className="home__container-img">
          <img src={Car} alt="" className="container-img__img" />
        </div>
        <Button variant="outline" color="dark" radius="xl" size="md" p="0px 40px">Discover Now</Button>
      </div>
      <div className="home__right"></div>
    </div>
  )
}

export default HomePage;

// import { motion as m} from "framer-motion";
// import { Link } from "react-router-dom";
// import { Button } from "@mantine/core";

// import Car from '../assets/pngimg.com - rolls_royce_PNG18.png';
// import verticalText from "../utils/vertical-text";

// const MainPage = () => {

//   return(
//     <div
//     className="home">
//       <div className="home__left">
//         <Link to={"/products"} className="home__left_button">{verticalText("Models")}</Link>
//       </div>
//       <div
//       onClick={()=> {
//         if(visible){
//           onChangeVisible()
//         }
//       }}
//       className="home__center">
//         <div className="home__title">Black Badge
//           <p className="home__subtitle">Wraith</p>
//         </div>
//         <div
//         className={!visible ? "home__container-img" : "home__container-img container-img-map"}>
//           <img
//           src={Car} alt="" className={!visible ? "container-img__img" : "container-img__img img-map"} />
//         </div>
//         <Button style={{cursor:"none"}} variant="outline" color="dark" radius="xl" size="md" p="0px 40px">Discover Now</Button>
//       </div>
//       <div className={!visible ? "home__right" : "home__right map"}>
//         <div className={!visible ? "right__info" : "right__info info-map"}>
//           <p className="right__title">
//               Rolls-Royce Coachbuild Presents
//               La Rose Noire Droaptail
//           </p>
//           <p className="right__description">
//           A modern interpretation of the roadster body style, Droptail represents the next chapter of<br/>
//           Rolls-Royce Coachbuild.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MainPage;

import { Link } from "react-router-dom";
import {motion as m} from "framer-motion";

import Car from '../assets/pngimg.com - rolls_royce_PNG18.png';
import verticalText from "../utils/vertical-text";

const MainPage = ({visibleMap}:{visibleMap:boolean}) => {

  return(
    <m.div>
      <m.div
          initial={{y:30, opacity:0}}
          animate={{y:0, opacity:1}}
          exit={{y:30, opacity:0}}
          transition={{duration:0.3, delay:0.5}}
          className="home__title">
            Black Badge
          <p className="home__subtitle">Wraith</p>
      </m.div>

      <div style={{display:"flex"}}>
        <m.div className="home__left"
          initial={{x:-100}}
          animate={{x:0}}
          exit={{x:-100}}
          transition={{duration:0.3, delay:0.5, easings:"ease-in-out"}}
        >
          <Link to={"/products"} className="home__left_button">{verticalText("Models")}</Link>
        </m.div>

        <m.div className="home__center"
          initial={{x:400, opacity:0}}
          animate={{x:0, opacity:1}}
          exit={{x:400, opacity:0}}
          transition={{duration:0.3, delay:0.5, }}
        >
          <img
              src={Car} alt="" className="center__img"
          />
        </m.div>

        <m.div className={!visibleMap ? "right__info": "right__info right__info-map"}
          initial={{x:400, opacity:0}}
          animate={{x:0, opacity:1}}
          exit={{x:400, opacity:0}}
          transition={{duration:0.3, delay:0.5, }}
        >
          <p className="right__title">
              Rolls-Royce Coachbuild Presents
              La Rose Noire Droaptail
          </p>
          <p className="right__description">
          A modern interpretation of the roadster body style, Droptail represents the next chapter of<br/>
          Rolls-Royce Coachbuild.
          </p>
        </m.div>

      </div>
      <m.button
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}
        exit={{y:20, opacity:0}}
        transition={{duration:0.3, delay:0.5}}
      style={{display:"block", margin:"500px auto 0 auto", padding:"10px 70px", borderRadius:"10px"}}>Discover Now</m.button>
    </m.div>
  )
}

export default MainPage;

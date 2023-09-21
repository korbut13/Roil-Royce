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
import {useState, useEffect} from "react";
import {motion as m} from "framer-motion";

import Car from '../assets/pngimg.com - rolls_royce_PNG18.png';
import verticalText from "../utils/vertical-text";

const MainPage = ({visibleMap,}:{visibleMap:boolean}) => {
  // const variant = {
  //   initial:{
  //     x:400,
  //     opacity:0
  //   },
  //   animate:{
  //     x:0,
  //     opacity:1
  //   },
  //   exit:{
  //     x:400,
  //     opacity:0
  //   }}
  const [direction, setDirection] = useState(false);
  useEffect(() => {
    setDirection(true);

    return ()=>{
      setDirection(false);
    }
  },[]);

  return(
    <m.div
      initial={!visibleMap ? {width:"100%"} : {width:"75%"}}
      animate={!visibleMap ? {width:"100%"} : {width:"75%", transition:{ duration:0.4, ease:"linear"}}}
    >
      <m.div

          initial={! visibleMap && {y:50, opacity:0}}
          animate={!visibleMap && {y:0, opacity:1, transition:{duration:0.7, delay:0.3}}}
          exit={{y:50, opacity:0,  transition:{duration:0.7, delay:0.3}}}

          className="home__title">
            Black Badge
          <p className="home__subtitle">Wraith</p>
      </m.div>

      <div style={{display:"flex"}}>
        <m.div className="home__left"
          initial={{x:-100}}
          animate={{x:0}}
          exit={{x:-100}}
          transition={{duration:0.7, delay:0.3, ease:"linear"}}
        >
          <Link to={"/products"} className="home__left_button">{verticalText("Models")}</Link>
        </m.div>

        <div className="home__center">
          <m.img
            initial={!direction ? {x:400, opacity:0} : visibleMap ? {x: 0} : {x:0}}
            animate={!direction ? {x:0, opacity:1, transition:{duration:0.7, delay:0.3, "ease":"linear"}}
            : visibleMap ? {x:-200, transition:{duration:0.4, "ease":"linear"}}
            : {x:0, transition:{duration:0.4, "ease":"linear"}}}
            exit={{x:400, opacity:0, transition:{duration:0.7, delay:0.4, "ease":"linear"}}}

              src={Car} alt="" className={!visibleMap ? "center__img": "center__img center__img-map"}
          />
        </div>

        <m.div className={!visibleMap ? "right__info": "right__info right__info-map"}

          initial={!direction ? {x:400, opacity:0} : visibleMap ? {x:0} :  {x:0}}
          animate={!direction ? {x:0, opacity:1, transition:{duration:0.7, delay:0.3}} :
          visibleMap ? {x:-595, transition:{duration:0.4, "ease":"easeIn"}} :
          {x:0,transition:{duration:0.4, "ease":"easeIn"}}}
          exit={{x:400, opacity:0, transition:{duration:1.3, delay:0.7}}}

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
        initial={!visibleMap && {y:50, opacity:0} }
        animate={!visibleMap && {y:0, opacity:1, transition:{duration:0.7, delay:0.3}}}
        exit={{y:50, opacity:0, transition:{duration:0.7, delay:0.3}} }

      style={{display:"block", margin:"500px auto 0 auto", padding:"10px 70px", borderRadius:"10px"}}>Discover Now</m.button>
    </m.div>
  )
}

export default MainPage;

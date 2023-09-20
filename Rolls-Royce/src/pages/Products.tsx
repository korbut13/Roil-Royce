import { motion as m} from "framer-motion";
import { carsData } from "../db";

const ProductsPage = () => {
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0}}
    // transition={{type:"spring", miss:"0.4"}}
    // initial={{y:200, opacity:0.5}}
    // animate={{y:0, opacity:1}}
    transition={{duration:0.1}}
    // exit={{y:window.innerHeight, opacity:0.5}}
    className="products__page" style={{width:"100%"}}>
     <div className="products__container" style={
      {width:"70%", margin:"10% auto 50px auto", display:"flex", flexWrap:"wrap",justifyContent:"space-between", gap:"75px"}}>
        {carsData.map(car => {
          return (
          <m.div
          // initial={{y:"100vh"}}
          // animate={{y:"0vh"}}
          // transition={{type:"spring", miss:"0.4"}}
          // initial={{y:200, opacity:0.1}}
          // animate={{y:0, opacity:1}}
          // transition={{duration:2}}
          // exit={{y:window.innerHeight, opacity:0.5}}
          style={{display:"flex", flexDirection:"column"}}>
            <div className="products__img-container">
              <img src={car.img} className="products__img" style={{width:"400px"}}></img>
            </div>
            <p style={{margin: "0 auto"}} className="products__title">{car.name}</p>
          </m.div>
          )
        })
        }
      </div>
    </m.div>
  )
};

export default ProductsPage;

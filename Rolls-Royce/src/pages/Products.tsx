import { motion as m} from "framer-motion";

import Header from "../components/Header";
import { carsData } from "../db";

const ProductsPage = () => {
  return (
    <m.div
    initial={{x:"-100%", opacity:"0"}}
    animate={{x:"0", opacity:"1"}}
    exit={{x:"-100%"}}
    transition={{duration:2}}
    className="products__page" style={{width:"100%"}}>
     <Header/>
     <div className="products__container" style={
      {width:"70%", margin:"10% auto 50px auto", display:"flex", flexWrap:"wrap",justifyContent:"space-between", gap:"75px"}}>
        {carsData.map(car => {
          return (
          <div style={{display:"flex", flexDirection:"column",}}>
          <div className="products__img-container">
            <img src={car.img} className="products__img" style={{width:"400px"}}></img>
          </div>
          <p style={{margin: "0 auto"}} className="products__title">{car.name}</p>
          </div>
          )
        })
        }
      </div>
    </m.div>
  )
};

export default ProductsPage;

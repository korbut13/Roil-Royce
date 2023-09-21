import { motion as m} from "framer-motion";
import { carsData } from "../db";

const ProductsPage = () => {
  return (
    <m.div
    initial={{opacity:0, y:30}}
    animate={{opacity:1, y:0}}
    exit={{ opacity:0, y:30}}
    transition={{duration:0.2}}
    className="products__page" style={{width:"100%"}}>
     <div className="products__container" style={
      {width:"70%", margin:"10% auto 50px auto", display:"flex", flexWrap:"wrap",justifyContent:"space-between", gap:"75px"}}>
        {carsData.map((car, id) => {
          return (
          <m.div
          key={id}
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

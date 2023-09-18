import Header from "../components/Header";
import { carsData } from "../db";

const ProductsPage = () => {
  return (
    <div className="products__page" style={{width:"100%"}}>
     <Header/>
     <div className="products__container" style={
      {width:"70%", margin:"50px auto 50px auto", display:"flex", flexWrap:"wrap",justifyContent:"space-between", gap:"75px"}}>
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
    </div>
  )
};

export default ProductsPage;

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/Products";


function AnimatedRoutes({visibleMap}:{visibleMap:boolean}){
  const location = useLocation();
  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage visibleMap={visibleMap}/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>
    </AnimatePresence>

  )
}
export default AnimatedRoutes;

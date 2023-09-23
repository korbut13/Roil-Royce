import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import MapComponent from './components/Map';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{width:"100%"}}>
        <Header visibleMap={visible} onChangeVisible={()=>{
          setVisible(!visible);
        }}/>
        <div id="content">
          <AnimatedRoutes visibleMap={visible}/>
        </div>
      </div>
        {visible && <MapComponent/>}
    </>
  )
}

export default App

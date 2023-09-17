import { useRef, useState } from 'react';

import './App.css';
import Header from './components/Header';
import HomePage from './pages/Home';

function App() {
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const positionElement = (e:MouseEvent)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    if(cursorRef.current){
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  }

  window.addEventListener('mousemove', positionElement)


  return (
    <>
    <div ref={cursorRef} style={{width: "30px", height: "30px",border: "2px solid #DCDCDC", borderRadius: "50%", position:"absolute", zIndex:"1000", boxSizing:"border-box"}}></div>
    <Header visible={visible} onChangeVisible={()=>{setVisible(!visible)}}/>
    <HomePage visible={visible} onChangeVisible={()=>{setVisible(!visible)}}/>
    </>
  )
}

export default App

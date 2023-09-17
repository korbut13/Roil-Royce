import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import HomePage from './pages/Home';

function App() {
  const [visible, setVisible] = useState(false);
  console.log("visible", visible)

  return (
    <>
    <Header visible={visible} onChangeVisible={()=>{setVisible(!visible)}}/>
    <HomePage visible={visible}/>
    </>
  )
}

export default App

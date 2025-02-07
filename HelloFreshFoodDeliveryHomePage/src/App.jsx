import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import FirstContent from './Components/FirstContent/FirstContent';
import SecondComponent from './Components/Navbar/SecondComponent/SecondComponent';
import ThirdContent from './Components/ThirdContent/ThirdContent';
import './App.css';
import FourthContent from './Components/FourthContent/FourthContent';
const App = () => {
  return (
    <div>
   
      <Navbar/>
      <FirstContent/>
      <SecondComponent/>
      <ThirdContent/>
      <FourthContent/>
     
    </div>

  )
}

export default App

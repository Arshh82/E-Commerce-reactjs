import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbarr from './Components/Navbar/Navbarr';
import { Route, Routes, } from 'react-router-dom';
import Home from './Components/Home/Home';
import Computerglass from './Components/Computerglass/Computerglass';
import Kidsglass from './Components/kidsglass/Kidsglass';
import Contactlenses from './Components/contact lenses/Contactlenses';
import Sunglass from './Components/sun glass/Sunglass';
import Storelocator from './Components/store locator/Storelocator';
import HomeC from './Components/Home/HomeC';
import Test from './Components/Test';
import CaroselProducta from './Components/Home/CaroselProducta';
function App() {
  return (
    <>
    <Navbarr/>
    <Routes>
      <Route path='/' element={<HomeC/>}></Route>
      <Route path='/computerglass' element={<Computerglass/>}></Route>
      <Route path='/kidsglass' element={<Kidsglass/>}></Route>
      <Route path='/contactlenses' element={<Contactlenses/>}></Route>
      <Route path='/sunglass' element={<Sunglass/>}></Route>
      <Route path='/storelocator' element={<Storelocator/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/caroselProducta' element={<CaroselProducta/>}></Route>
    </Routes> 
  
    </>
  );

}


export default App;
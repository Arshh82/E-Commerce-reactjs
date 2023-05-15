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

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/computerglass' element={<Computerglass/>}></Route>
      <Route path='/kidsglass' element={<Kidsglass/>}></Route>
      <Route path='/contactlenses' element={<Contactlenses/>}></Route>
      <Route path='/sunglass' element={<Sunglass/>}></Route>
      <Route path='/storelocator' element={<Storelocator/>}></Route>
    </Routes>
    <Navbarr/>
    </>
  );

}


export default App;
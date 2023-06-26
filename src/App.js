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
import Test from './Components/Test';
import CaroselProducta from './Components/Home/CaroselProducta';
import Eyeglass from './Components/Eyeglass/Eyeglass';
import Eyeglassrange from './Components/Eyeglass/Eyeglassrange';
import Singleproduct from './Components/Singleproduct';
import Cart from './Components/Cart';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Admin from './Components/Adminpanel/Admin';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbarr/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/eyeglass' element={<Eyeglass />}></Route>
        <Route path='/eyeglassrange' element={<Eyeglassrange />}></Route>
        <Route path='/computerglass' element={<Computerglass />}></Route>
        <Route path='/kidsglass' element={<Kidsglass />}></Route>
        <Route path='/contactlenses' element={<Contactlenses />}></Route>
        <Route path='/sunglass' element={<Sunglass />}></Route>
        <Route path='/storelocator' element={<Storelocator />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/caroselProducta' element={<CaroselProducta />}></Route>
        <Route path='/singleproduct/:id' element={<Singleproduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </>
  );

}


export default App;
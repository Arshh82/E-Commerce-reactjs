import React from 'react'
import './Eyeglass.css'
import Footer from '../Footer/Footer'
import Eyeglassslider from './Eyeglassslider';
import { Eyeglasssliderb,Eyeglasssliderc,Eyeglasssliderd,Eyeglassslidere,Eyeglasssliderf,Eyeglasssliderg,Eyeglasssliderh,Eyeglassslideri} from './Eyeglassslider';
import { Link } from 'react-router-dom';
const Eyeglass = () => {
  // let Api1 = new URL("/public/images/HomeCarosel/cimg (1).jpg", import.meta.url);
  return (
      <>
      <div className='eyeglassdiva'>
        <br />
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <Eyeglassslider/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivb'>
        <br />
        <center><h2>BEST SELLERS STARTING AT RS.1000</h2></center>
        <Eyeglasssliderb />
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivc'>
        <br />
        <center><h2>ENEW ARRIVALS STARTING AT RS.1000 </h2></center>
        <Eyeglasssliderc/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivd'>
        <br />
        {/* EyeglassD */}
        <center><h2>COMPUTER GLASSES STARTING AT RS.1000</h2></center>
        <Eyeglasssliderd/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdive'>
        <br />
        {/* EyeglassE */}
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <Eyeglassslidere/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivf'>
        <br />
        {/* EyeglassF */}
        <center><h2>FLOAT POP STARTING AT RS.1000</h2></center>
        <Eyeglasssliderf/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivg'>
        <br />
        {/* EyeglassG */}
        <center><h2>HIGHLIGHT STARTING AT RS.1000</h2></center>
        <Eyeglasssliderg/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivh'>
        <br />
        {/* EyeglassH */}
        <center><h2>AIR FLEX STARTING AT RS.1000</h2></center>
        <Eyeglasssliderh/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>

      <hr></hr>

      <div className='eyeglassdivi'>
        <br />
        {/* EyeglassI */}
        <center><h2>URBAN RETRO STARTING AT RS.1000</h2></center>
        <Eyeglassslideri/>
        <Link to='/eyeglassrange'><center><button className=' btna btn-primary'>VIEW RANGE</button></center></Link>
      </div>
      <br/>
      <div></div>
      <Footer/>
      </>
    
  )
}

export default Eyeglass
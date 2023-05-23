import React from 'react'
import './Eyeglass.css'
import Footer from '../Footer/Footer'
import EyeglassApi from '../../Apijson/Eyeglasshome/EyeglassA'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CaroselProducta from '../Home/CaroselProducta';
import Eyeglassslider from './Eyeglassslider';
import { Eyeglasssliderb,Eyeglasssliderc,Eyeglasssliderd,Eyeglassslidere,Eyeglasssliderf,Eyeglasssliderg,Eyeglasssliderh,Eyeglassslideri} from './Eyeglassslider';
const Eyeglass = () => {
  // let Api1 = new URL("/public/images/HomeCarosel/cimg (1).jpg", import.meta.url);
  return (
      <>
      <div className='eyeglassdiva'>
        <br />
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <Eyeglassslider/>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivb'>
        <br />
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <Eyeglasssliderb />
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivc'>
        <br />
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <Eyeglasssliderc/>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivd'>
        <br />
        EyeglassD
        <Eyeglasssliderd/>
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdive'>
        <br />
        EyeglassE
        <Eyeglassslidere/>
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivf'>
        <br />
        EyeglassF
        <Eyeglasssliderf/>
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivg'>
        <br />
        EyeglassG
        <Eyeglasssliderg/>
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivh'>
        <br />
        EyeglassH
        <Eyeglasssliderh/>
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>

      <hr></hr>

      <div className='eyeglassdivi'>
        <br />
        EyeglassI
        <Eyeglassslideri/>
        <center><h2>EXTRA 60% OFF | VOUCHER: SUMMER</h2></center>
        <center><button className=' btna btn-primary'>VIEW RANGE</button></center>
      </div>
      <br/>
      <div></div>

      <Footer/>
      </>
    
  )
}

export default Eyeglass
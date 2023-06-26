import React from 'react'
import Footer from '../Footer/Footer'
import EyeglassrangeCard from '../Eyeglass/EyeglassrangeCard'


let fi1 = new URL("/public/images/offer.JPG", import.meta.url)
const Sunglass = () => {
  return (
    <>
    <div className='eyefirstdiveyegl'>
    <img src={fi1} alt='no' className='imghg'/> <span className='banerofer'>Special Season Offer Buy Any 3 Glasses Get 25% Off</span>
      </div>
      <div className='eyeseconddiv '>
        <div className='seconddiva  '>
        </div>
        <div className='seconddivb '>
          <EyeglassrangeCard />
        </div>
      </div>
  <hr></hr>
  <Footer/>
  </>
  )
}

export default Sunglass
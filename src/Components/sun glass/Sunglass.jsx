import React from 'react'
import Footer from '../Footer/Footer'
import EyeglassrangeCard from '../Eyeglass/EyeglassrangeCard'


const Sunglass = () => {
  return (
    <>
    <div className='eyefirstdiveyegl sticky-sm-top'>
        Sunglass
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
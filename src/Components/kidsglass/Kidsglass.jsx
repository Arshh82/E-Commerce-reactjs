import React from 'react'
import Footer from '../Footer/Footer'
import EyeglassrangeCard from '../Eyeglass/EyeglassrangeCard'

const Kidsglass = () => {
  return (
    <>
     <div className='eyefirstdiveyegl sticky-sm-top'>
        Kids Glass
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

export default Kidsglass
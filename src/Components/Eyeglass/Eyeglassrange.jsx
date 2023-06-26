import React from 'react'
import './Eyeglassrange.css'
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA'
import EyeglassrangeCard from './EyeglassrangeCard'
import { useSelector } from 'react-redux'

const Eyeglassrange = () => {
  // const product = useSelector((state) => state.product)
  return (
    <>
      <div className='eyefirstdiveyegl'>
      </div>
      {/* <div>
      <center>
        
        </center>
      </div> */}
      <div className='eyeseconddiv '>
        <div className='seconddiva  '>
        <p>Price Range</p>
        <button>Rs.1000 - 1500/-</button>
        <button>Rs.1500 - 2500/-</button>
        <button>Rs.2500 - 3500/-</button>
        <button>Under 5000</button>
        <button>Under 10000</button>
        <button>Under 10000</button>
        <button>Under 10000</button>
        </div>
        <div className='seconddivb '>
          <EyeglassrangeCard />
        </div>
      </div>
      </>
  )
}

export default Eyeglassrange
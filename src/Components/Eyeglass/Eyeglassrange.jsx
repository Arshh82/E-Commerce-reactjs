import React from 'react'
import './Eyeglassrange.css'
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA'
import EyeglassrangeCard from './EyeglassrangeCard'
import { useSelector } from 'react-redux'

let fi1 = new URL("/public/images/offer.JPG", import.meta.url)
const Eyeglassrange = () => {
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
      </>
  )
}

export default Eyeglassrange
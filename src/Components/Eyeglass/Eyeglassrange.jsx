import React from 'react'
import './Eyeglassrange.css'
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA'
import EyeglassrangeCard from './EyeglassrangeCard'

const Eyeglassrange = () => {
  return (
    <>
    <div className='eyefirstdiveyegl '>
        Eyeglass
      </div>
      <div className='eyeseconddiv'>
        <div className='seconddiva'>

        </div>
        <div className='seconddivb'>
        <EyeglassrangeCard/>

        </div>
      </div>
      </>
  )
}

export default Eyeglassrange
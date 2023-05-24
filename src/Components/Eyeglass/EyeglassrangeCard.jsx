import React from 'react'
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA'

const EyeglassrangeCard = () => {
  return (
    <div>
    {Eyeglassrangeapi.map( (cc)=> {
        return(
        <div>
       <p>{cc.name}</p>
       <img src={cc.image} alt='no_img' className='eyerangeimage'/>
       <p>Size {cc.size}</p>
       <p>Rs.{cc.amount}</p>
       </div>
       )})}
     </div>
  )
}

export default EyeglassrangeCard
import React from 'react'
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA'

const EyeglassrangeCard = () => {

    
  return (
    // <div >
    // {Eyeglassrangeapi.map( (cc)=> {
    //     return(
    //    <div className='eyesglassrangecard'>
    //    <div className='cardimage'>
    //    <img src={cc.imag} alt='no_img' className=' imagen  w-100 h-50' />
    //    <img src={cc.imageho} alt='no_img' className='imagehov  w-100 h-50' />
    //    </div>
    //    {/* onMouseEnter={ ()=>{
    //     return(
    //         <img src={cc.imag} alt='no_img' className=' d-flex w-100'/>
    //             )
    //         }        
       
    // }/ */}
       
    //    <p>{cc.name}</p>
    //    <p>Size {cc.size}</p>
    //    <p>Rs.{cc.amount}</p>
    //    </div>
    //    )})}
    //  </div>
    <>
    {Eyeglassrangeapi.map( (cc)=> {
            return(
     <section  style={{backgroundColor: '#eee;'}}>
    <div class="cont">
    <div class="coloumn justify-content-start">
      <div class="col-md-8 col-lg-6 col-xl-3 carda">
        <div class="card text-black">
          <img
            src={cc.image}
            class="card-img-top"
            alt="Apple Computer"
          />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Believing is seeing</h5>
              <p class="text-muted mb-4">Apple pro display XDR</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Pro Display XDR</span><span>$5,999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            )})}
            </>
  )
}

export default EyeglassrangeCard
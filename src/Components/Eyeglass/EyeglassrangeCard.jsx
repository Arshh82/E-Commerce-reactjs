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
      {Eyeglassrangeapi.map((cc) => {
        return (
          <section style={{ backgroundColor: '#eee;' }}>
            <div class="">
              <div class="coloumn justify-content-start ">
                <div class="col-md-8 col-lg-6 col-xl-3 carda ">
                  <div class="card text-black">
                  <div className='imgcarddd'>
                    <img
                      src={cc.image}
                      class="cardd -img-top"
                      alt="Glass_image"
                    />
                    <img
                      src={cc.imagehov}
                      class="carddb -img-top"
                      alt="Glass_image"
                    />
                    </div>
                    <div class="card-body">
                      <div class="text-start">
                        <h5 class="card-title">{cc.name}</h5>
                        <h6 class="text-info mb-2">Size {cc.size}</h6>
                        <h6>Rs. {cc.amount} <span className='text-muted'>(+tax)</span></h6>
                      </div>
                      <div>
                        <div class="d-flex justify-content-center">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
            </>
  )
}

export default EyeglassrangeCard
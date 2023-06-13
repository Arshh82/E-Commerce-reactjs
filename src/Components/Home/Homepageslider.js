import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 import React from 'react'
 import Homeslider from '../../Apijson/Homeslider.';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Homepageslider.css'
const Homepageslider = (props) => {

    
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
  return (
    <div>
           <Carousel responsive={responsive}
               ssr={true}
               autoPlay={true}
               autoPlaySpeed={1500}
                infinite={true}
                customTransition="all 1"
                transitionDuration={1}
                >
               {Homeslider.map((cc) => {
                   return (
                 <div key={cc.id} className='sliderd'>
                 <img src={cc.image} alt='No_img' className='sliderimage' />
                 </div>
                   )
               })}
           </Carousel>
       </div>
  )
}

export default Homepageslider




 
 

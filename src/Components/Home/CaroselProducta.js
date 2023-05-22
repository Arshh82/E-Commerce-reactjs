import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 import React from 'react'
import ProductA from '../../Apijson/ProductA';
 
 const CaroselProducta = (props) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
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
               autoPlay={false}
               autoPlaySpeed={10500}>
               {ProductA.map((cc) => {
                   return (
                       <div className='cardA'>
                           <img src={cc.image} alt='no_img' className='cardAimg' /> <br />
                           <br/><center>
                               <p className='Pname'>{cc.name}</p><br/>
                        <button className='cardAbutn btn btn-success'>Explore More</button>
                           </center>
                       </div>
                   )
               })}
           </Carousel>
       </div>
   )
 }
 
 export default CaroselProducta
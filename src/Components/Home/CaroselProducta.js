import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 import React from 'react'
import ProductA from '../../Apijson/ProductA';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
 const CaroselProducta = (props) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
               autoPlaySpeed={500}
                infinite={true}
                customTransition="all 1"
                transitionDuration={1}
                containerClass="carousel-container">
               {ProductA.map((cc) => {
                   return (
                 <div>
                 <Card className='cardA' style={{border:'none'}}>
                   <Card.Img variant="top" className='cardAimg  mb-2' src={cc.image} />
                   <Card.Body>
                   <center >
                     <Card.Title className='mb-3'>{cc.name}</Card.Title>
                     <Button className='cardAbtn' variant="primary"><p>Explore</p></Button>
                     </center>
                   </Card.Body>
                 </Card>
                 </div>
                   )
               })}
           </Carousel>
       </div>
   )
 }
 
 export default CaroselProducta
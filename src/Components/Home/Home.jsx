import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import CaroselProducta from './CaroselProducta';

const Home = () => {
  let fi1 = new URL("/public/images/HomeCarosel/cimg (1).jpg", import.meta.url)
  let fi2 = new URL("/public/images/HomeCarosel/cimg (2).jpg", import.meta.url)
  let fi3 = new URL("/public/images/HomeCarosel/cimg (3).jpg", import.meta.url)
  let fi4 = new URL("/public/images/HomeCarosel/cimg (4).jpg", import.meta.url)
  let fi5 = new URL("/public/images/Sdiv/image-.JPG", import.meta.url)
  return (
    <>
      <div className='homecontainer'>
      <div className='firstdiv'>
</div>
       <div className='slidera'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              src={fi1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>New Upcoming  Summer Sale </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              src={fi2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>New Upcoming  Summer Sale </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              src={fi3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>New Upcoming  Summer Sale </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              src={fi4}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>New Upcoming  Summer Sale </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <div className='seconddiv'>
          <h3 className='stext'>Do More Be more</h3>
          <img src={fi5} alt='No Img' width='100%' height='100%' />
        </div>
        <div className='thirddiv'>
          <div className='ctdiva'>
            <span className='go'>Go</span><br />
            <span className='with'>with</span><br />
            <span className='trend'>The Trend</span>
          </div>
          <div className='ctdivb'>
            <CaroselProducta/>
          </div>
        </div>
      </div>
     </>
  )
}

export default Home
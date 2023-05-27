import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import CaroselProducta from './CaroselProducta';
import Footer from '../Footer/Footer'

const Home = () => {
  let fi1 = new URL("/public/images/HomeCarosel/cimg (1).jpg", import.meta.url)
  let fi2 = new URL("/public/images/HomeCarosel/cimg (2).jpg", import.meta.url)
  let fi3 = new URL("/public/images/HomeCarosel/cimg (3).jpg", import.meta.url)
  let fi4 = new URL("/public/images/HomeCarosel/cimg (4).jpg", import.meta.url)
  let fi5 = new URL("/public/images/Sdiv/image-.JPG", import.meta.url)
  let fi6 = new URL("/public/images/top glass/eyeglass.png", import.meta.url)
  let fi7 = new URL("/public/images/top glass/sunglass.png", import.meta.url)
  let fi8 = new URL("/public/images/top glass/computer glass.PNG", import.meta.url)
  let fi9 = new URL("/public/images/top glass/contact lens.png", import.meta.url)
  let fi10 = new URL("/public/images/top glass/powerglass.PNG", import.meta.url)
  let fi11 = new URL("/public/images/top glass/power sunglass.PNG", import.meta.url)
  let fi12 = new URL("/public/images/sixthdiv/footer4.png", import.meta.url)
  
 

  return (
    <>
      <div className='pcontainer'>
        <div className='homecontainer'>
          <div className='firstdiv'>
            <div className='imgdiv'>
              <div className='imageparent'><img src={fi6} alt='no-img' className='imgeyecontrol' /></div>
              <div><center className='headname'><p>Eyeglasses</p></center></div>
            </div>

            <div className='imgdiv'>
              <div className='imageparent'><img src={fi8} alt='no-img' className='imgeyecontrol' /></div>
              <div><center className='headname'><p>Computer glasses</p></center></div>
            </div>

            <div className='imgdiv'>
              <div className='imageparent'><img src={fi9} alt='no-img' className='imgeyecontrol' /></div>
              <div><center className='headname'><p>Contact lenses</p></center></div>
            </div>

            <div className='imgdiv'>
              <div className='imageparent'><img src={fi10} alt='no-img' className='imgeyecontrol' /></div>
              <div><center className='headname'><p>Power Sunglasses</p></center></div>
            </div>

            <div className='imgdiv'>
              <div className='imageparent'><img src={fi11} alt='no-img' className='imgeyecontrol' /></div>
              <div><center className='headname'><p>Progressive Lenses</p></center></div>
            </div>

            <div className='imgdiv'>
              <div className='imageparent'><img src={fi7} alt='no-img' className='imgeyecontrol' /></div>
              <div><center className='headname'><p>Sunglasses</p></center></div>
            </div>
          </div>
          <div className='slidera'>
            <Carousel className='carocontrole'>
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
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-100"
                  src={fi3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-100"
                  src={fi4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='seconddiv'>
            <center>
              <span className='seconddivtext'>Our Purpose <br />Do More, Be more</span>
            </center>
          </div>
          <div className='thirddiv'>
            <div className='ctdiva'>
              <p className='go'>Go with <br /> Trend</p><br />
            </div>
            <div className='ctdivb'>
              <CaroselProducta />
            </div>
          </div>
          <div className='fourthdiv'>
            <div className='fourthdivtext'>
              <p >Free Gold Membership<br /> for 2 Year</p>
              <button className='button btn btn-primary'>Shop Now</button>
            </div>

          </div>
          <div className='fifthdiv'>
            <div className='fifthdivtext'>
              <p>Spotlight-Worthy<br /> Sunglasses <br /> Buy 1 get 1 </p>
              <button className='buttonn btn btn-primary '>Shop Now</button>
            </div>

          </div>

          <center><hr></hr><h1>FIND THE PERFECT FIT</h1><hr></hr></center>
          <center>
            <div className='hoverbox'>

            </div>
            <div className='seventhhdiv'>
              <div className='diva'>
                <div className='a'></div>
                <div className='b'></div>
              </div>
              <div className='divb'>
                <div className='c'></div>
                <div className='d'></div>
                <div className='e'></div>
              </div>
            </div>
          </center>
          <hr></hr>
          <center>
            <div className='sixthdiv sm container'><br />
              <img src={fi12} />
              <p className='sixthdivtext'>Available All Over India </p>

            </div>
          </center>
          <Footer/>
        </div>
      </div>
     </>
  )
}

export default Home
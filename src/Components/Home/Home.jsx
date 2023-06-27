import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import CaroselProducta from './CaroselProducta';
import Footer from '../Footer/Footer'
import Homepageslider from './Homepageslider';
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'

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

  let sm1 = new URL("/public/images/SliderSM/img (34).jpg", import.meta.url)
  let sm2 = new URL("/public/images/SliderSM/img (35).jpg", import.meta.url)
  let sm3 = new URL("/public/images/SliderSM/img (38).jpg", import.meta.url)
  
 

  return (
    <>
    <div>
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
              <div className='imageparent'>
              <img src={fi9} alt='no-img' className='imgeyecontrol' />
              </div>
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

        <div className='firstdivb'>

          <div className='fa'>
            <img src={fi6} alt='no-img' className='fa-img' />
            <center><span className='fa-text'>Eyeglasses</span></center>
          </div>

          <div className='fb'>
            <img src={fi8} alt='no-img' className='fa-img' />
            <center><span className='fa-text'>Computer glasses</span></center>
          </div>

          <div className='fc'>
            <img src={fi9} alt='no-img' className='fa-img' />
            <center><span className='fa-text'>Contact lenses</span></center>
          </div>

          <div className='fd'>
            <img src={fi10} alt='no-img' className='fa-img' />
            <center><span className='fa-text'>Power Sunglasses</span></center>
          </div>

          <div className='fe'>
            <img src={fi11} alt='no-img' className='fa-img' />
            <center><span className='fa-text'>Progressive Lenses</span></center>
          </div>

          <div className='ff'>
            <img src={fi7} alt='no-img' className='fa-img' />
            <center><span className='fa-text'>Sunglasses</span></center>
          </div>

        </div>


      <div className='slidera'>
       <Homepageslider/>
      </div>


      <div className='slider-sm'>
          <CCarousel controls transition="crossfade">
            <CCarouselItem>
              <CImage className="slider-sm-img" src={sm1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="slider-sm-img" src={sm2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="slider-sm-img" src={sm3} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>

      </div>

      <div className='seconddiv '>
      <center>
              <span className='seconddivtext'>Our Purpose <br />Do More, Be more</span>
            </center>
      </div>
      <div className='thirddiv'>
      <div className='ctdiva'>
              <p className='go'>Go <br/>with <br /> Trend</p><br />
            </div>
            <div className='ctdivb'>
              <CaroselProducta />
            </div>

            
      </div>
      <div className='fourthdiv'>
      <div className='fourthdivtext'>
              <p >Free Gold <br/>Membership<br /> for 2 Year</p>
              <button className='buttonn '><span className='sm-textt'>Buy Now</span></button>
            </div>
      </div>
      <br />
      <div className='fifthdiv'>
      <div className='fifthdivtext'>
              <p>Spotlight-Worthy<br /> Sunglasses <br /> Buy 1 get 1 </p>
              <button className='buttonnn '> <span className='sm-textt'>Shop Now</span></button>
            </div>
      </div>
      <center><hr></hr><h2>FIND THE PERFECT FIT</h2><hr></hr></center>
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
              <img src={fi12} className='sixthimg' />
              <p className='sixthdivtext'>Available All Over India </p>
            </div>
          </center>
      </div>
     </>
  )
}

export default Home
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EyeglassApi from '../../Apijson/Eyeglasshome/EyeglassA';
import { EyeglassApib , EyeglassApic,EyeglassApid,EyeglassApie,EyeglassApif,EyeglassApig,EyeglassApih,EyeglassApii } from '../../Apijson/Eyeglasshome/EyeglassA';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
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
}
const Eyeglassslider = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApi.map((cc) => {  
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
const Eyeglasssliderb = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApib.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglasssliderc = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApic.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglasssliderd = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApid.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglassslidere = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApie.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglasssliderf = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApif.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglasssliderg = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApig.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglasssliderh = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApih.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}
const Eyeglassslideri = (cc) => {
    return (
        <div>
            <Carousel responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={800}
                infinite={true}
                customTransition="all .5"
                transitionDuration={1}
                containerClass="carousel-container">
                {EyeglassApii.map((cc) => {
                    return (
                        <div className='EyeglassslidercardA' key={cc.id}>
                            <img src={cc.image} alt='no_img' className='Eyeglasssliderimg' /> <br />
                            <br />
                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}

export default Eyeglassslider
export {Eyeglasssliderb,Eyeglasssliderc,Eyeglasssliderd,Eyeglassslidere,Eyeglasssliderf,Eyeglasssliderg,Eyeglasssliderh,Eyeglassslideri}
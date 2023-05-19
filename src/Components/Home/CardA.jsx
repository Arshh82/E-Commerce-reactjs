import React from 'react'
import "./Home.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';

const CardA = (props) => {
  return (
    <>
    <div className='cardA'>
    <img src={props.imag} alt='no_img' className='cardAimg' /><br/>
    <center>
    <p className='Pname'>{props.name}</p><br/>
    <button className='btn btn-success'>Explore More</button>
    </center>
    </div>
    
    </>
  )
}

export default CardA
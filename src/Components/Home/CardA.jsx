import React from 'react'
import "./Home.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CardA = (props) => {
  return (
    <>
    <div className='cardA'>
    <img src={props.image} alt='no_img' className='cardAimg' />
    <center>
    <p>hello</p>
    <button className=' btn btn-success'>Explore More</button>
    <p className='Pname'>{props.name}</p>
    
    </center>
   
    </div>
    
    </>
  )
}

export default CardA
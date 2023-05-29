import React from 'react'
import Footer from '../Footer/Footer'
import './Storelocator.css'

const Storelocator = () => {
  return (
    <center>
    
      <div className='mapa'>
      <hr></hr>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.996108493795!2d75.8496475871582!3d22.70038490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce26fe37fa3%3A0x827255faf930465a!2sTitan%20Eyeplus!5e0!3m2!1sen!2sin!4v1685400059945!5m2!1sen!2sin" 
        width="100%" 
        height="350" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <h4 className='text  mt-5'>Store In Your NearBy Location</h4>
        <h4 className='text  mt-3' >Cont. No. 45854545</h4>
        <h4 className='text  mt-3 '>Location : Near Shell Tower</h4>
        <hr></hr>
      </div>
      
    <Footer/>
    </center>
  )
}

export default Storelocator
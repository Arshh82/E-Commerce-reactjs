import React from 'react'
import { useState } from 'react';
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from '../Footer/Footer'
import { Link, useParams } from 'react-router-dom';
const Computerglass = () => {
  return (
    <>
    <div className='eyefirstdiveyegl sticky-sm-top'>
    Eyeglass
  </div>
  <div className='eyeseconddiv '>
    <div className='seconddiva  '>
    </div>
    <div className='seconddivb '>
       
    <Modal
        // show={show}
        // onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          {/* {
          const {id} = useParams();
          console.log("EyeglassrangeCard.js ~ line 12 ~ EyeglassrangeCard ~ id",id)
          } */}
          <p>
         
            
          </p>
          
        </Modal.Body>
      </Modal>
        {Eyeglassrangeapi.map((cc) => {
        return (
           


          <section style={{ backgroundColor: '#eee;' }}>
            <div class="" key={cc.id}>
              <div class="coloumn justify-content-start ">
                <div class="col-md-8 col-lg-6 col-xl-3 carda ">
                  <div class="card text-black  cccard">
                  <div className='imgcarddd'>
                    <img
                      src={cc.image}
                      class="cardd -img-top"
                      alt="Glass_image"
                    />
                    <img
                      src={cc.imagehov}
                      class="carddb -img-top"
                      alt="Glass_image"
                    />
                    </div>
                    <div class="card-body">
                      <div class="text-start">
                        <h5 class="card-title mt-2">{cc.name}</h5>
                        <h6 class="text-muted mb-2">Size {cc.size}</h6>
                        <h6 className='mb-2'>Rs. {cc.amount} <span className='text-muted'>(+tax)</span></h6>
                        <Link to={`/test/${cc.id}`}><Button variant="primary">
                        {cc.id}
                       </Button>
                       </Link>
                        {/* onClick={() => setShow(true) } */}
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}




    </div>
  </div>
  <hr></hr>
  <Footer/>
  </>
  
       
  )
 
}

export default Computerglass
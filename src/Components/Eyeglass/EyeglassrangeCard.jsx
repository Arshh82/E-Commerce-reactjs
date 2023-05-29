import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Eyeglassrangeapi } from '../../Apijson/Eyeglasshome/EyeglassA'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const EyeglassrangeCard = () => {
  const [showw, setShoww] = useState(false);
  let [data, updatedata] = useState([]);
  let [product, updateproduct] = useState({ id:'', name: '', image: '', imagehov: '', size: '',amount:'' });
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get("https://arshil-eyewear.onrender.com/Eyeglassrangeapi/");
    updatedata(res.data);
  }
  return (
    <>
    <Modal
        showw={showw}
        onHide={() => setShoww(false)}
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
          
        </Modal.Body>
      </Modal>
        {data.map((v) => {
        return (
          <section style={{ backgroundColor: '#eee;' }}>
            <div class="">
              <div class="coloumn justify-content-start ">
                <div class="col-md-8 col-lg-6 col-xl-3 carda ">
                  <div class="card text-black  cccard">
                  <div className='imgcarddd'>
                    <img
                      src={v.image}
                      class="cardd -img-top"
                      alt="Glass_image"
                    />
                    <img
                      src={v.imagehov}
                      class="carddb -img-top"
                      alt="Glass_image"
                    />
                    </div>
                    <div class="card-body">
                      <div class="text-start">
                        <h5 class="card-title mt-2">{v.name}</h5>
                        <h6 class="text-muted mb-2">Size {v.size}</h6>
                        <h6 className='mb-2'>Rs. {v.amount} <span className='text-muted'>(+tax)</span></h6>
                        <Link to={`/singleproduct/${v.id}`}>
                        <Button variant="primary">
                        {v.id}
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
            </>
  )
}

export default EyeglassrangeCard
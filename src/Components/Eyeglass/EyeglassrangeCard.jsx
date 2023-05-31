import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading'


const EyeglassrangeCard = () => {
  const [loading,setLoading]= useState(false)
  let [data, updatedata] = useState([]);
  let [product, updateproduct] = useState({ id:'', name: '', image: '', imagehov: '', size: '',amount:'' });
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get("https://arshil-eyewear.onrender.com/Eyeglassrangeapi/");
    updatedata(res.data);
    setLoading(true)
  }
  return (
    <>
      {loading?data.map((v) => {
        return (
          <Link to={`/singleproduct/${v.id}`}>
          <section style={{ backgroundColor: "white" }} key={v.id}>
            <div className="" >
              <div className="coloumn justify-content-start ">
                <div className="col-md-8 col-lg-6 col-xl-3 carda ">
                  <div className="card text-black  cccard">
                  <div className='imgcarddd' key={v.id}>
                    <img
                       
                      src={v.image}
                      className="cardd -img-top"
                      alt="Glass_image"
                    />
                    <img
                      src={v.imagehov}
                      className="carddb -img-top"
                      alt="Glass_image"
                    />
                    </div>
                    <div className="card-body">
                      <div className="text-start">
                        <h5 className="card-title mt-2">{v.name}</h5>
                        <h6 className="text-muted mb-2">Size {v.size}</h6>
                        <h6 className='mb-2'>Rs.{v.amount} <span className='text-muted'>(+GST)</span></h6>
                        
                       </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
       </Link>
        )
      }) :<div className='loadingg'>
          <Loading/>
          </div>}
            </>
  )
}

export default EyeglassrangeCard
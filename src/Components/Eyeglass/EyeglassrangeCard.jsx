import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading'
import { STATUSES } from '../../Reducers/productSlice';
import { fetchProducts } from '../../Reducers/productSlice';
import { add } from '../../Reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const EyeglassrangeCard = () => { 
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [term, setTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  
  return (
    <>
      
      <div>
      <div className='srchdiv'>
        <form onSubmit={submitHandler} className='form-primary'>
          <input className='inputform' type='text' value={term} placeholder='Search product ' style={{ textTransform: "capitalize" }} onChange={(e) => setTerm(e.target.value)} />
        </form>
        <h4 className='mt-3'>Showing Top {products.length} Glasses  </h4>
      </div>
        {products.filter((v) => {
          if (term === "") {
            return v;
          }
          else if (v.name.toLowerCase().includes(term.toLowerCase())) {
            return v;
          }
        })
          .map((v) => {
            return (
              <Link to={`/singleproduct/${v.id}`} key={v.id}>
                <section style={{ backgroundColor: "white" }} >
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
          })}
      </div>
    </>
  )
}

export default EyeglassrangeCard
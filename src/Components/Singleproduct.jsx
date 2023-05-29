import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Singleproduct.css'


const API = "https://arshil-eyewear.onrender.com/Eyeglassrangeapi/"
function Singleproduct({ match }) {
  const [product, setProduct] = useState([
    {
      "id": "",
      "name": "",
      "image": "",
      "imagehov": "",
      "size": "",
      "amount": ""
    }
  ]);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get(API);
    setProduct(res.data);
  }
  // function change(e) {
  //   setProduct({ ...product, [e.target.name]: e.target.value });
  // }
  return (
    <>
      <div>
        {
          product.map((v) => {
            return (
              <div key={v.id} >
                {v.id === id ? 
                <div className='productdetailspage'>
                    <div>
                      <img src={v.image} alt='Image-Error' className='img-a'/><br/>
                      <img src={v.imagehov} alt='Image-Error' className='img-a'/>
                      
                    </div>
                    <div className='productdetail'>
                      {/* <p>{v.id}</p> */}
                      <p className='detailname  mb-0  mt-5'>Name:{v.name}</p>
                      <p className='detailsize mb-2'>Size: {v.size}</p>
                      <p className='detailamount mb-4'>Rs. {v.amount}/-</p>
                      <button className='detailbtn mb-4'>Buy Now</button>
                      <button className='detailbtnb'>Add to Cart</button>
                    </div>
                </div>
                  : <p></p>
                }
              </div>)
          })
        }
        </div>
    </>
  )
}

export default Singleproduct
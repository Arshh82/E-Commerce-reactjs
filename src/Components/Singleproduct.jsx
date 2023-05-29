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
                      <p>Name {v.name}</p>
                      <p>Size : {v.size}</p>
                      <p>Rs. {v.amount}</p><br/>
                      <button className='btn btn-primary'>Buy Now</button>
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
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Singleproduct.css'
import Loading from '../Loading';



const API = "https://arshil-eyewear.onrender.com/Eyeglassrangeapi/"
function Singleproduct({ match }) {
  const [loading,setLoading] = useState(false);
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
    setLoading(true);
    
  }
  console.log(loading);
  // function change(e) {
  //   setProduct({ ...product, [e.target.name]: e.target.value });
  // }
  return (
    <>
      <div>
        { loading ? product.map((v) => {
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
                      <p className='detailamount mb-2'>Rs. {v.amount}/-</p>
                      <h3 className='mb-4'>Availability:{v.stock===true ? <h4 className='text-success'>In stock</h4>: <h4 className='text-danger'>Out of stock</h4>}</h3>
                      <button className='detailbtn mb-4'>Buy Now</button>
                      <button className='detailbtnb'>Add to Cart</button>
                    </div>
                </div>
                  : <p></p>
                }
              </div>)
          } ):<div className='loadingg'>
          <Loading/>
          
          </div>
        }
        </div>
    </>
  )
}

export default Singleproduct
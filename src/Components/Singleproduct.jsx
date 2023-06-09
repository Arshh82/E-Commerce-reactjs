import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './Singleproduct.css'
import Loading from '../Loading';
import { FiPlus,FiMinus } from "react-icons/fi";
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Reducers/cartSlice';



const API = "https://arshil-eyewear.onrender.com/Eyeglassrangeapi/"
function Singleproduct() {
  const dispatch = useDispatch();
  const { data: produc, status } = useSelector((state) => state.product);
  
  const [loading,setLoading] = useState(true);
  // const [product, setProduct] = useState([
  //   {
  //     "id": "",
  //     "name": "",
  //     "image": "",
  //     "imagehov": "",
  //     "size": "",
  //     "amount": "",
  //   }
  // ]);
  const { id } = useParams();
  // console.log(id)
  // useEffect(() => {
  //   show();
  // });
  // async function show() {
  //   var res = await axios.get(API);
  //   setProduct(res.data);
  //   setLoading(true);
  // }

  const handleAdd = (product) => {
    dispatch(add(product));
};
  return (
    <>
      <div>
        { products.map((v) => {
          return (
            <div key={v.id} >
              {v.id === id ?
                <div className='productdetailspage'>
                  <div>
                    <img src={v.image} alt='Image_Error' className='img-a' /><br />
                    <img src={v.imagehov} alt='Image_Error' className='img-a' />
                  </div>
                  <div className='productdetail'>
                    <p className='detailname  mb-0  mt-5'>Name:{v.name}</p>
                    <p className='detailsize mb-2'>Size: {v.size}</p>
                    <p className='detailamount mb-2'>Rs. {v.amount}/-</p>
                    <h3 className='mb-2'>Availability:{v.stockqwantity >= 1 ? <h4 className='text-success'>In stock</h4> : <h4 className='text-danger'>Out of stock</h4>}</h3>
                    <h3 className='mb-4'>{v.stockqwantity <= 10 ? <h4 className='text-danger'>Hurry Now Only {v.stockqwantity} Stocks Are Left only !</h4> : <h4 className='text-danger'></h4>}</h3>
                    <button className='detailbtn mb-4'>Buy Now</button>
                    
                    <button className='detailbtnb' onClick={() => handleAdd(v)} >Add to Cart</button>
                    
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
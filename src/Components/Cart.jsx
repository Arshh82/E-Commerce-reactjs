import React, { useState,useEffect } from 'react'
import { getNodeText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove,clearCart,toggleCartQty,getCartTotal } from '../Reducers/cartSlice';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
    const {data,totalItems,totalAmount} = useSelector((state) => state.cart);
    console.log(data);

    useEffect(() => {
      dispatch(getCartTotal());
  }, [useSelector(state => state.cart)]); 

  const handleRemove = (id) => {
        dispatch(remove(id));
     }


    
  return (
    <>   
     <div className="cartt">
      <div className='cartitems'>
      {data.map((product) => (
                    <div key={product.id} className="cartCard">
                   
                    <div className='iimgdiv'>
                    <img src={product.image} alt="Error" className='productimage' />
                    </div>

                    <div>
                    <span>Name</span>
                    <h5>{product.name}</h5>
                    
                    <span>Product Price</span>
                    <h5>{product.amount}</h5>
                    <span>Qty:</span>
                    <button className='btn' onClick={() => dispatch(toggleCartQty({id: product.id, type: "INC"}))}> 
                      <AiOutlinePlus/>
                      
                      </button>
                      { product.quantity}
                      <button className='btn' onClick={() => {dispatch(toggleCartQty({id: product.id, type: "DEC"})) }}>
                      <AiOutlineMinus/>
                      
                      </button>
                    </div>

                    <div>
                    <span>Remove Item</span><br/>
                      <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                           <RiDeleteBin2Fill/>
                        </button>
                        </div>


                    <div>
                    <span>Subtotal</span>
                    <h5>{product.amount*product.quantity}</h5>
                    </div>

                    




                    
                    
                   
                   
                        
                    </div>
                    
                ))}
                <div >
                <hr></hr>
            <button type = "button" className='btn btn-danger' onClick={() => dispatch(clearCart())}>
                                    <span className = "fs-16">Clear Cart</span> 
                                </button>     
            </div>

      </div>
      <div className='cartcalculation'>
      <div className='cart-title mt-2'>
      <h3>Order Summary</h3>
      </div>
      <div className='cart-it'>
      <ul className='no-bullets'>
        <li>
        <span>Total <span className='boldd'>{totalItems}</span> Items </span>
        </li>
        <li>
        <span>Delivery charge <span className='boldd'>350 Rs. </span> </span>
        </li>
        <li>
        <span>Discount <span className='boldd'>0 Rs.</span></span>
        </li>
        
      </ul>
      </div>
      <div className='chkout'>
      <div className='cart-total mt-2'>
      <ul className='no-bullets m-2'>
        <li>
        <span className='spn'>Grand Total Rs. </span>
        <span className='boldd'>{totalAmount} Rs.</span>
        </li>
      </ul>
     
      </div>
      <div>
      <button className='chkoutbtn btn btn-warning mt-1'>Proceed to Checkout </button>

      </div>
      </div>
      <h2></h2>
      <td>{}</td><br/>
      <td></td>
      

      </div>
      
      
     </div>
            

    </>
  )
}

export default Cart
import React, { useState,useEffect } from 'react'
import { getNodeText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove,clearCart,toggleCartQty,getCartTotal } from '../Reducers/cartSlice';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
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
                    <table className='table table-bordered text-center table-hover '>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <tbody>
                    <td>
                        <img src={product.image} alt="Error" className='productimage' /></td>
                        <td><h5>{product.name}</h5></td>
                        <td><h5>{product.amount*product.quantity}</h5></td>
                       <td> <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button></td>
                        <td></td>
                        
                        <td>
                          <div className='proqwantity'>
                      <button className='btn' onClick={() => dispatch(toggleCartQty({id: product.id, type: "INC"}))}> 
                      <AiOutlinePlus/>
                      </button>
                      { product.quantity}
                      <button className='btn' onClick={() => {dispatch(toggleCartQty({id: product.id, type: "DEC"})) }}>
                      <AiOutlineMinus/>
                      </button>
                    </div>
                        </td>

                        </tbody>
                        
                        </table>
                    </div>
                    
                ))}
                <button type = "button" className='btn-danger' onClick={() => dispatch(clearCart())}>
                                    <span className = "fs-16">Clear Cart</span> 
                                </button>

      </div>
      <div className='cartcalculation'>
      <h2>Order Summary</h2>
      <h2>Total Items</h2>
      <td>{totalAmount}</td><br/>
      <td>{totalItems}</td>

      </div>
     </div>
            <div >
                
            </div>

    </>
  )
}

export default Cart
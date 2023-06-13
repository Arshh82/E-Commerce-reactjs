import React, { useState } from 'react'
import { getNodeText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Reducers/cartSlice';
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    
    
const [amount,setAmount]= useState(1)
  return (
    <>   
     <div className="cartt">
      <div className='cartitems'>
      {products.map((product) => (
                    <div key={product.id} className="cartCard">
                    <table className='table table-bordered text-center table-hover '>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <tbody>
                    <td>
                        <img src={product.image} alt="Error" className='productimage' /></td>
                        <td><h5>{product.name}</h5></td>
                        <td><h5>{product.amount}</h5></td>
                       <td> <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button></td>
                        <td>
                          <div className='proqwantity'>
                      <button className='btn btn-secondary' onClick={(setDcrease) => { amount > 1 ? setAmount(amount - 1) : setAmount(1); }}> -</button>
                      <div>{amount}</div>
                      <button className='btn btn-primary' onClick={(setIncrease) => {
                        amount < product.stockqwantity ? setAmount(amount + 1) : setAmount(product.stockqwantity);
                      }}>+</button>
                    </div>
                        </td>

                        </tbody>
                        </table>
                    </div>
                ))}

      </div>
      <div className='cartcalculation'>

      </div>
     </div>
            <div >
                
            </div>

    </>
  )
}

export default Cart
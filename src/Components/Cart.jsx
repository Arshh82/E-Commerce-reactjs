import React, { useState } from 'react'
import { getNodeText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Reducers/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    
    
const [amount,setAmount]= useState(1)
  return (
    <>

      <div className='d-flex w-100 h-30'>
      </div>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                    <table className='table table-bordered text-center table-hover '>
                    <tbody>
                    <td>
                        <img src={product.image} alt="--" className='d-flex w-20 h-30' /></td>
                        <td><h5>{product.name}</h5></td>
                        <td><h5>{product.amount}</h5></td>
                        <td><h5>{product.stockqwantity}</h5></td>
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

    </>
  )
}

export default Cart
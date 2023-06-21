import React, { useState } from 'react'
import { getNodeText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove,clearCart,toggleCartQty } from '../Reducers/cartSlice';
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
    const {data,totalItems} = useSelector((state) => state.cart);
    console.log(data);

    const [qty,setQty]= useState(1)
    // console.log(totalItems)

    const handleRemove = (id) => {
        dispatch(remove(id));
        console.log(id)
    };
    
    
    const handleDecrement = (card_id) => {
       
      // data.map( (item)  => (
      //   item.id === card_id ? setQty(qty+1) :console.log('ok') 
      // )
      //  )

      // // console.log(card_id)
      

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
                        <td><h5>{product.amount*qty}</h5></td>
                       <td> <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button></td>
                        <td>{ product.quantity}</td>
                        <td>
                          <div className='proqwantity'>
                      <button className='btn btn-secondary' onClick={() => dispatch(toggleCartQty({id: product.id, type: "INC"}))}> -</button>

                      {/* <div>{amount}</div> */}
                      {/* <button className='btn btn-primary' onClick={(setIncrease) => {
                        amount < product.stockqwantity ? setAmount(amount + 1) : setAmount(product.stockqwantity);
                      }}>+</button> */}
                    </div>
                        </td>

                        </tbody>
                        <button type = "button" className='btn-danger' onClick={() => dispatch(clearCart())}>
                                    <span className = "fs-16">Clear Cart</span> 
                                </button>
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
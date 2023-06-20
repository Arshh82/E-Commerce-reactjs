import React, { useState } from 'react'
import { getNodeText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Reducers/cartSlice';
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
    const {data,totalItems} = useSelector((state) => state.cart);
    const [qty,setQty]= useState(1)
    console.log(totalItems)

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    console.log(totalItems)
    
    const handleDecrement = (card_id) => {
       
      // data.map( (item)  => (
      //   item.id === card_id ? setQty(qty+1) :console.log('ok') 
      // )
      //  )

      // // console.log(card_id)
      

    }

    const [quantity,setQuantity] = useState('');
    const [editQuantity,setEditQuantity] = useState({
      id:'',
      status:false
    })

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
                        <td>{ totalItems}</td>
                        <td>
                          <div className='proqwantity'>
                      <button className='btn btn-secondary' onClick={ () =>  handleDecrement(product.id, totalItems+1 )}> -</button>

                      {/* <div>{amount}</div> */}
                      {/* <button className='btn btn-primary' onClick={(setIncrease) => {
                        amount < product.stockqwantity ? setAmount(amount + 1) : setAmount(product.stockqwantity);
                      }}>+</button> */}
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
import React from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
  const {id} = useParams();
  console.log('akki',id);
  return (
    <div>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    <p>Cart</p>
    </div>
  )
}

export default Cart
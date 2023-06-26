import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Navbar/navbar.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart,FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { HiShoppingCart } from "react-icons/hi";
import { useEffect } from 'react';
import { getCartTotal,toggleCartQty } from '../../Reducers/cartSlice';



const Navbarr = () => {
  const dispatch = useDispatch();
  let fi12 = new URL("/public/images/Brandlogo/Brand logo.PNG", import.meta.url)
  const {data,totalItems} = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
}, [useSelector(state => state.cart)]); 

  

  return (
    <>
    <div className='sticky-top'>
        <div className='navbar  '>
        
          <div>
            <Link to='/'><img src={fi12} alt='no_img' className='brandlogo ' /></Link>
          </div>
          <div className='popo'>
          
          <div>
            <Link><FiUser className='cartico' /></Link>
          </div>
          
          <div >
            <Link to='/cart'>
              <span> <HiShoppingCart className='cartico' onClick={() => dispatch(toggleCartQty({data, type: "DEC"}))} />
              </span>
              <span className='cartcount'>{totalItems}</span>
            </Link>
          </div>
          </div>
        </div>
      <div className='navbar2  '>
      <Link to="/eyeglass" className='nalink' style={{ textDecoration: 'none' }}>Eye Glass</Link>
        <Link to="/computerglass" className='nalink' style={{ textDecoration: 'none' }}>Computer Glass</Link>
        <Link to="/kidsglass" className='nalink' style={{ textDecoration: 'none' }}>Kids Glass</Link>
        <Link to="/contactlenses" className='nalink' style={{ textDecoration: 'none' }}>Contact Lenses</Link>
        <Link to="/sunglass" className='nalink' style={{ textDecoration: 'none' }}>Sun Glasses</Link>
        <Link to="/storelocator" className='nalink' style={{ textDecoration: 'none' }}>Store Locator</Link>
        <Link to="/storelocator" className='nalink' style={{ textDecoration: 'none' }}>Admin Login</Link>
        
      </div>
      </div>
    </>
  )
}

export default Navbarr;

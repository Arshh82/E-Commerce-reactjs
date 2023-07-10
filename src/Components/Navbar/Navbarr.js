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
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";






const Navbarr = () => {
  const dispatch = useDispatch();
  let fi12 = new URL("/public/images/Brandlogo/Brand logo.PNG", import.meta.url)
  const {data,totalItems} = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
}, [useSelector(state => state.cart)]); 

  const [display,setDisplay]=useState(false)

  return (
    <>
  {
    display?
  
    <div className='smmenu fixed-top'>
       <div className='smmenuclose' onClick={() => setDisplay(false)} >
      <AiOutlineClose></AiOutlineClose>
      </div>
       <div className='smmenunavbar  '>
       <Link to="/" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Home</Link>
       <Link to="/eyeglass" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Eye Glass</Link>
        <Link to="/computerglass" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Computer Glass</Link>
        <Link to="/kidsglass" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Kids Glass</Link>
        <Link to="/sunglass" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Sun Glasses</Link>
        <Link to="/storelocator" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Store Locator</Link>
        <Link to="/admin" className='nalink' style={{ textDecoration: 'none' }} onClick={() => setDisplay(false)}>Admin Login</Link>
        
        </div>
      
    </div>:null
  }
    <div className='sticky-top'>
        <div className='navbar  '>
        <div className='menu-tog m-2'onClick={() => setDisplay(true)} >
          <GiHamburgerMenu></GiHamburgerMenu>
        </div>
          <div>
            <Link to='/'><img src={fi12} alt='no_img' className='brandlogo ' /></Link>
          </div>
          <div className='popo'>
          
          <div>
            <Link><FiUser className='cartico m-3' /></Link>
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
        <Link to="/sunglass" className='nalink' style={{ textDecoration: 'none' }}>Sun Glasses</Link>
        <Link to="/storelocator" className='nalink' style={{ textDecoration: 'none' }}>Store Locator</Link>
        <Link to="/admin" className='nalink' style={{ textDecoration: 'none' }}>Admin Login</Link>
        
      </div>
      </div>
    </>
  )
}

export default Navbarr;

import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Navbar/navbar.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart,FiUser } from 'react-icons/fi';
import { NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Navbarr = () => {
  let fi12 = new URL("/public/images/Brandlogo/metrix logo-.PNG", import.meta.url)
  const products = useSelector((state) => state.cart);
  return (
    <>
    <div>
      <Navbar expand="md" className='navvbar fixed-top' >
      <Link to='/'>
      <img src={fi12} alt='no_img' className='brandlogo  fixed-top'/> 
      </Link>
        <Container>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              className="me-auto my-8 my-lg-0 "
              navbarScroll>
              <Link to="/eyeglass" className='nalink' style={{ textDecoration: 'none' }}>Eye Glass</Link>
              <Link to="/computerglass" className='nalink' style={{ textDecoration: 'none' }}>Computer Glass</Link>
              <Link to="/kidsglass" className='nalink' style={{ textDecoration: 'none' }}>Kids Glass</Link>
              <Link to="/contactlenses" className='nalink' style={{ textDecoration: 'none' }}>Contact Lenses</Link>
              <Link to="/sunglass" className='nalink' style={{ textDecoration: 'none' }}>Sun Glasses</Link>
              <Link to="/storelocator" className='nalink' style={{ textDecoration: 'none' }}>Store Locator</Link>
              <Link to="/storelocator" className='nalink' style={{ textDecoration: 'none' }}>Admin Login</Link>
            </Nav>
            <div className='inc'>
              <Form className="nlst d-flex">
                <Form.Control
                  type="search"
                  placeholder="What are you Looking "
                  className="me-2"
                  aria-label="Search"
                />
                <Link to='/cart'><FiShoppingCart className='cartico'/> {products.length}</Link>
                <Link><FiUser className='cartico'/></Link>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      </div>
    </>
  )
}

export default Navbarr;

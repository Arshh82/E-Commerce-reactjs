import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Navbar/navbar.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const Navbarr = () => {
  return (
    <>
      <Navbar expand="md" className='navvbar'>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              className="me-auto my-8 my-lg-0"
              navbarScroll>
              <Link to="/" className='nalink' style={{textDecoration:'none'}}>Eye Glass</Link>
              <Link to="/computerglass" className='nalink' style={{textDecoration:'none'}}>Computer Glass</Link>
              <Link to="/kidsglass" className='nalink' style={{textDecoration:'none'}}>Kids Glass</Link>
              <Link to="/contactlenses" className='nalink'  style={{textDecoration:'none'}}>Contact Lenses</Link>
              <Link to="/sunglass" className='nalink'  style={{textDecoration:'none'}}>Sun Glasses</Link>
              <Link to="/storelocator" className='nalink'  style={{textDecoration:'none'}}>Store Locator</Link>
            </Nav>
            <div className='inc'>
            <Form className="nlst d-flex">
              <Form.Control
                type="search"
                placeholder="What are you Looking "
                className="me-2"
                aria-label="Search"
              />
              
              <svg xmlns="http://www.w3.org/2000/svg"  color="currentColor" className="navicon" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg"  color="currentColor" className="navicon" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  color="currentColor" className="navicon" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            
            </Form>
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      
    </>
  )
}

export default Navbarr;

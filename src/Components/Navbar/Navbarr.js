import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Navbar/navbar.css"
import { Link } from 'react-router-dom';
const Navbarr = () => {
  return (
    <>

      <Navbar expand="md" className='navvbar'>
        <Container>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '50px', margin: '20px' }}
              navbarScroll
            >
              <Link to="/">Eye Glass</Link>
              <Link to="/computerglass">Computer Glass</Link>
              <Link to="/kidsglass">Kids Glass</Link>
              <Link to="/contactlenses" >Contact Lenses</Link>
              <Link to="/sunglass" >Sun Glasses</Link>
              <Link to="/storelocator" >Store Locator</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="What are you Looking for ?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      
    </>
  )
}

export default Navbarr;

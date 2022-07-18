import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppRouter from './AppRouter';



function NavScrollExample() {
  return (
    <>
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#">Takscom</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link  href="http://localhost:3000/home">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/weather" >Weather</Nav.Link>
         


          </Nav>

        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          
          <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
            <Nav.Link href="http://localhost:3000/signup">Sign-up</Nav.Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <AppRouter/>
    </>
  );
}

export default NavScrollExample;

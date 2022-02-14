import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import '../../index.css'

const Header = () => {
  return (
    <header>
      <>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Travel</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: '40px' }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#destination">Destination</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#partner">Partner</Nav.Link>
              </Nav>
              <Nav>
                <Button id="btn-login" className="m-1">
                  Search
                </Button>
                <Button id="btn-register" className="m-1">
                  Register
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  )
}

export default Header

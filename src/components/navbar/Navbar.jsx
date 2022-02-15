import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import '../../index.css'

const Header = () => {
  return (
    <header>
      <>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#travel">
              <img
                src="/images/element2.png"
                alt="element-2"
                width="30"
                height="30"
                className="d-inline-block align-top ml-5"
              />
            </Navbar.Brand>
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
                <Button id="btn-login" className="m-1 text-capitalize">
                  Search
                </Button>
                <Button id="btn-register" className="m-1 text-capitalize">
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

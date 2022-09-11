import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import './Header.scss'

const Header = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/img/Logo.png"
              height="100"
              className="d-inline-block align-top"
              alt="Artech"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/paintings">Paintings</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">
                      Register
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <span><box-icon name="cart" style={{fontSize: '30px'}} /></span>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header;
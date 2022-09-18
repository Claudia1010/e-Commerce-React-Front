import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import "boxicons";
import AuthUser from "../AuthUser/AuthUser";
import "./Header.scss";
import { Badge, Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import SearchBox from "../SearchBox/SearchBox";
import { useLocation } from "react-router";

const Header = () => {
  const value = useContext(DataContext);
  const location = useLocation()
  const [cart] = value.cart;
  const [menu, setMenu] = value.menu;

  const { getRole, getUser } = AuthUser();

  const toogleMenu = () => {
    setMenu(!menu);
  };

  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };

  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  return (
    <>
    
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="header mb-3">
          <Container fluid className="row justify-content-md-center">
          <Navbar.Brand className="col col-md-3" href="/">
            <img
              src="/img/Logo.png"
              height="100"
              className="d-inline-block align-top"
              alt="Artech"
            />
          </Navbar.Brand>
          {location.pathname === "/products" ? <SearchBox /> : null}
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
                  <Nav.Link href="/products">Products</Nav.Link>
                  {getRole() === "user" ? 
                    <NavDropdown
                    title={`Bienvenido ${getUser().full_name}`}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/orders">Ordenes</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
                  </NavDropdown>
                  :
                    <NavDropdown
                      title="Sign in"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    </NavDropdown>
                  }
                </Nav>
                {getRole() === "user" &&
                <Button variant="light" onClick={toogleMenu}>
                  <box-icon name='cart' color='#000000' ></box-icon>
                  <Badge pill  bg="danger">
                    <span className="item__total"> {cart.length} </span>
                  </Badge>
                </Button>
              }
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;

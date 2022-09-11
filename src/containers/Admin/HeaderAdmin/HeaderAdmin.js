
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import AuthUser from '../../../components/AuthUser/AuthUser';
import './HeaderAdmin.scss'


const HeaderAdmin = () => {
  const {getRole, getUser, token, logout} = AuthUser();
  
  const logoutUser = () => {
      if(token !== undefined){
          logout();
      }
  }


  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="navbar-admin mb-3">
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
                  <NavDropdown
                      title="Products"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/products">Show Products</NavDropdown.Item>
                      <NavDropdown.Item href="/add_product">Create Products</NavDropdown.Item>
                    </NavDropdown>
                    
                    {getRole() === "admin" ? 
                    <NavDropdown
                    title={`Bienvenido ${getUser().full_name}`}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default HeaderAdmin;

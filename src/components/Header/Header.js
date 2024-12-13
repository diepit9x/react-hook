import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"} className="navbar-brand">
          DiepIT
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/user"} className="nav-link">
              User
            </NavLink>
            <NavLink to={"/admin"} className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign up</button>
            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React , {useContext}from 'react'
import {Navbar, Container, Offcanvas , Nav , NavDropdown, Form, FormControl , Button } from 'react-bootstrap'
import Passengers from '../pages/Passengers'
import { useHistory } from "react-router";
import { FlightContext } from '../context/FlightContext'
import {Link} from "react-router-dom";

const NavbarHeader = () => {
  const history = useHistory();
  const { islogin } = useContext(FlightContext)

    return (
        <div>

  <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand className='fs-2 fw-bold text-primary'href="">Güvercin Airlines</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
          {islogin ? <Nav.Link onClick={() => history.push("/passenger")} >Passengers</Nav.Link> : null}
          {! islogin ? <Nav.Link onClick={() => history.push("/login")}>Login</Nav.Link> : null}
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarHeader

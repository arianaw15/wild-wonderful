import React from 'react'
import { Container,Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

function NavBar() {
    return (
        <Container className="navbar">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Tops">Wild and Wonderful</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Swim" id="basic-nav-dropdown">
        <NavDropdown.Item href="#tops">Tops</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">One-Piece</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">All</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Accessories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Totes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Sandals</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Wraps</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title="Sale" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Swim</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Accessories</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">All</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
    )
}

export default NavBar

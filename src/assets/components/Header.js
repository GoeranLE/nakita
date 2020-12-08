import React from 'react';
import '../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo_nakita.png';

export default function NavBar() {
  return (
    <Container class="d-flex justify-content-center">
      <Navbar bg="transparent" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <div>
            <img
              src={logo}
              alt="Logo of the Kita Search Webapp"
              className="logo"
            />
          </div>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#Kitas">Kitas</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}
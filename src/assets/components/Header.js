import React from 'react';
import '../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



import logo from '../img/logo.jpg';

export default function NavBar() {
  return (
    <Container>
      <Navbar bg="transparent" variant="light" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Parents">Hi, Parent XY</Nav.Link>
          <Nav.Link href="#Kitas">Kitas</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}
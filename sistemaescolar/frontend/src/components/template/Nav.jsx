import './Nav.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default props =>
<aside className="menu-area">

    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="Home">Escola Fulano de Tal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Cadastro">Cadastro</Nav.Link>
            <Nav.Link href="Tabela">Gestão Administrativa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</aside>
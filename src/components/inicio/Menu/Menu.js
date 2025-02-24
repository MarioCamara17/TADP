import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import {Link} from "react-router-dom"

export function Menu() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/">Barra de herramientas</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/producto">Productos</Link>
            <Link to="/formproductos">Gestion de productos</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

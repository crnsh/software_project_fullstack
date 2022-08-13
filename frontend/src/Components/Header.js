import React from 'react'
import {Container, Navbar, Nav} from  'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar variant="light" style = {{backgroundColor: '#F5F5F5'}}>
    <Container>
      <Navbar.Brand href="#home">candid.</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home">about</Nav.Link>
        <Nav.Link href="#features">download</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    </>
  )
}

export default Header
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


export const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SIGUS</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">Sobre Nós</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

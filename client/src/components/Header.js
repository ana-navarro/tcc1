import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


export const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SIGUS</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Cadastre-se</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


export const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className='flex flex-wrap items-center justify-between mx-auto-auto'>
                <Container className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
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
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container className='d-flex items-center'>
                <Nav className='d-flex'>

                    <img src="/tlogo.png" alt="" height="70px" />

                    <h3 className='mt-3'>The TSC Cafe</h3>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="secondary">Login</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
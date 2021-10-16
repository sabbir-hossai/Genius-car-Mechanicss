import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Genius car Mechanics</Navbar.Brand>
                        <Nav className="me-auto " >
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#experts">Experts</Nav.Link>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </>
        </div>
    );
};

export default Header;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container >
            <Navbar.Brand href="#">PROSHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/cart"> <i class="fas fa-shopping-cart"></i> Cart</Nav.Link>
                <Nav.Link href="/login"> <i class="fas fa-user"></i> Sing in</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    );
};

export default Header;
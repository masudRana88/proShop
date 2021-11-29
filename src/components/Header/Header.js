import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container >
            <Link to="/"><Navbar.Brand >PROSHOP</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                
            <Link to="/cart"><a className="nav-link"> <i className="fas fa-shopping-cart"></i> Cart</a></Link>           
                
            <Link to="/login"><a className="nav-link"> <i className="fas fa-user"></i> Sing in</a></Link>   
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    );
};

export default Header;

import React from 'react';
import { useSelector } from "react-redux"
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import LinkContainer from '../LinkContainer/LinkContainer';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/action/userAction/userAction';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    console.log(userInfo)
    const dispach = useDispatch()
    const hendleLogout = () => {
        dispach(userLogout())
    }
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
                
           

             {userInfo.email ? (
                <NavDropdown  title={userInfo.name}>
                    <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={hendleLogout}>Log Out</NavDropdown.Item>
                </NavDropdown>
                ) : <Link to="/login"><a className="nav-link"> <i className="fas fa-user"></i> Sing in</a></Link>}                
            </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    );
};

export default Header;
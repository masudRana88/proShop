import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <footer style={{ height: "50px", marginBottom: 0}} className='footer bg-primary text-light'>
            <Container className='h-100'>
                <Row  className='w-100 h-100'>
                    <Col className="d-flex justify-content-center align-items-center">
                        copyright &copy; ProShope 
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
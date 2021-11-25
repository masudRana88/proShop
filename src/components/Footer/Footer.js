import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer >
            <Container>
                <Row>
                    <Col className="text-center">
                        copyright &copy; ProShope 
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({children}) => {
    return (
        <Container>
            <Row>
                <Col xm={12} sm={6} className='mx-auto'>
                {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ProductContainer from '../../ProductContainer/ProductContainer';

const HomePage = () => {
    return (
        <><main className="py-3">
                <Container>
                <ProductContainer/>
                </Container>
        </main>
        </>
    );
};

export default HomePage;
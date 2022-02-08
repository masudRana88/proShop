import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselContainer from '../../CarouselContainer/CarouselContainer';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ProductContainer from '../../ProductContainer/ProductContainer';

const HomePage = () => {
    return (
        <><div className="py-3 ">
            <CarouselContainer/>   
            <Container>
                <ProductContainer/>
            </Container>
        </div>
        </>
    );
};

export default HomePage;
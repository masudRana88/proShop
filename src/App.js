import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductContainer from './components/ProductContainer/ProductContainer';


const App = () => {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <ProductContainer/>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default App;
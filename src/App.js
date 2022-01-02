import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartPage from './components/Pages/CartPage/CartPage';
import HomePage from './components/Pages/HomePage/HomePage';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import ProductPage from './components/Pages/ProductPage/ProductPage';

const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/cart/:id' element={<CartPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/login' element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
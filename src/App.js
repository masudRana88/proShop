import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import HomePage from './components/Pages/HomePage/HomePage';
import ProductPage from './components/Pages/ProductPage/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
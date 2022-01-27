import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import AdminRoutes from './components/AdminRoutes/AdminRoutes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartPage from './components/Pages/CartPage/CartPage';
import HomePage from './components/Pages/HomePage/HomePage';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import OrderPage from './components/Pages/OrderPage/OrderPage';
import PaymentPage from './components/Pages/PaymentPage/PaymentPage';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';
import ShopingPage from './components/Pages/ShopingPage/ShopingPage';
import UserListPage from './components/Pages/UserListPage/UserListPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
          <Route path='/singup' element={<RegisterPage/>} />
          <Route path='/profile' element={<PrivateRoute><ProfilePage/></PrivateRoute> } />
          <Route path='/shipping' element={<PrivateRoute><ShopingPage/></PrivateRoute>} />
          <Route path='/payment' element={<PrivateRoute><PaymentPage/></PrivateRoute>} />
          <Route path='/place-order' element={<PrivateRoute><PlaceOrder/></PrivateRoute>} />
        <Route path='/order/:id' element={<PrivateRoute><OrderPage /></PrivateRoute>} />
        <Route path='/users' element={<AdminRoutes><UserListPage/></AdminRoutes>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
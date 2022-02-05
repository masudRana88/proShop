import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import AdminRoutes from './components/AdminRoutes/AdminRoutes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import CartPage from './components/Pages/CartPage/CartPage';
import HomePage from './components/Pages/HomePage/HomePage';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import OrderListPage from './components/Pages/OrderListPage/OrderListPage';
import OrderPage from './components/Pages/OrderPage/OrderPage';
import PaymentPage from './components/Pages/PaymentPage/PaymentPage';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import ProductsListPage from './components/Pages/ProductsListPage/ProductsListPage';
import ProductUpdatePage from './components/Pages/ProductUpdatePage/ProductUpdatePage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';
import ShopingPage from './components/Pages/ShopingPage/ShopingPage';
import UserListPage from './components/Pages/UserListPage/UserListPage';
import UsersEditPage from './components/Pages/UsersEditPage/UsersEditPage';
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
        <Route path='/admin/users' element={<AdminRoutes><UserListPage/></AdminRoutes>} />
        <Route path='/admin/users/:id/edit' element={<AdminRoutes><UsersEditPage/></AdminRoutes>} />
        <Route path='/admin/products' element={<AdminRoutes><ProductsListPage/></AdminRoutes>} />
        <Route path='/admin/products/:id/edit'  element={<AdminRoutes><ProductUpdatePage/></AdminRoutes>} />
        <Route path='/admin/products/add' element={<AdminRoutes><AddProduct/></AdminRoutes>} />
        <Route path='/admin/order' element={<AdminRoutes><OrderListPage/></AdminRoutes>} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
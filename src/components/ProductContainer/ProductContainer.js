
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import { productRequest } from "../../redux/action/productRequest/productRequest"
import { productListReduser } from '../../redux/reduser/productListReduser';
import { store } from '../../redux/store';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';


const ProductContainer = () => {
    const dispacth = useDispatch()
    
    const productList = useSelector(state => state.productList)
    const { isLoding, error, products } = productList; 
    console.log(productList)
    useEffect(() => {
        productRequest(dispacth, productListReduser)
    },[])
    return (
        <>
            <h3>Our Letest Product</h3>
            {isLoding ?
                <Loader /> : error ? <Message variant="danger"><p>{ error}</p></Message> : <Row>
                {
                 products.map(product => (
                     <Col key={product._id} sm={12} md={6} lg={4}>
                       <Product product={ product}/>
                    </Col>
                     ))
                }
            </Row>}
        </>
    );
};

export default ProductContainer;
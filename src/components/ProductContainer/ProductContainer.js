import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';


const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:5000/api/products")
        .then(function (rsc) {
          setProducts(rsc.data)
      })
  },[])
    return (
        <>
            <h3>Our Letest Product</h3>
            <Row>
                {
                 products.map(product => (
                     <Col key={product._id} sm={12} md={6} lg={4}>
                       <Product product={ product}/>
                    </Col>
                     ))
                }
            </Row>
        </>
    );
};

export default ProductContainer;
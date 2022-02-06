
import React, { useEffect } from 'react';
import { Button, Col, Pagination, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import { productRequest } from "../../redux/action/productRequest/productRequest"
import { store } from '../../redux/store';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { useState } from 'react'
import axios from 'axios';


const ProductContainer = () => {
    const dispacth = useDispatch()
    
    const productList = useSelector(state => state.productList)
    const { isLoding, error, products } = productList;
    const [pageCount, setPageCount] = useState(0)
    const [courentPage,setCourentPage] = useState(1)
    const size = 6
    
    const PageCount = async() => {
    const { data } = await axios.get("http://localhost:5000/api/products")
    const productCount = data.productCount
    const pagenumber = Math.ceil(Number(productCount) / size)
    setPageCount(pagenumber)
    }
    
    
    useEffect(() => {
        if (pageCount === 0) {
            PageCount()
        }
        dispacth(productRequest(courentPage,size))
    },[pageCount,courentPage])
    return (
        <>
            <h3>Our Letest Product</h3>
            {isLoding ?
                <Loader /> : error ? <Message variant="danger"><p>{ error}</p></Message> : <Row>
                {
                 products?.limitedProduct?.map(product => (
                     <Col key={product._id} sm={12} md={6} lg={4}>
                       <Product product={ product}/>
                    </Col>
                     ))
                    }
            </Row>}
                <div className={pageCount===1 ? `d-none`: ""}>
                    <Button className='btn btn-sm btn-secondary ps-icon' disabled={courentPage === 1} onClick={()=>setCourentPage(courentPage - 1)}><i class="fas fa-chevron-left " ></i></Button>
                    {
                        [...Array(pageCount).keys()].map((item, index) => <button className={(courentPage === index +1)?`btn btn-sm btn-primary pageBtn`: `btn btn-sm btn-secondary pageBtn`} onClick={()=>setCourentPage(index +1)}>{index +1}</button>)
                    }
                    <button className='btn btn-sm btn-secondary ps-icon' disabled={courentPage === pageCount} onClick={()=>setCourentPage(courentPage + 1)}><i class="fas fa-chevron-right"></i></button>
                </div>
        </>
    );
};

export default ProductContainer;
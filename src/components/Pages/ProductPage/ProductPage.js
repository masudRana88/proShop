import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, ListGroup, Row , Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productDetailsRequest } from '../../../redux/action/productRequest/productRequest';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import Rating from '../../Rating/Rating';



const ProductPage = () => {
    const idName = useParams()
    const dispach = useDispatch()
    const productDetails = useSelector(state => state.productDetails);
    const { product,error,isLoding} = productDetails
    console.log(productDetails)
    useEffect(() => {
        dispach(productDetailsRequest(idName.id))
    },[idName.id])
    return (
        <>
        <Header/>
        <Container>
            <Link className="btn btn-light my-3" to="/"> Back </Link>
                {isLoding ? <Loader /> : error ? <Message variant="denger">{ error}</Message>:<Row>
                <Col md={6} lg={6}>
                    <Image src={product.image} fluid/>
                </Col>
                <Col md={3} lg={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating valu={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: $ {product.price}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3} lg={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price :
                                </Col>
                                <Col>
                                    <strong>$ {product.price}</strong>
                                </Col>
                            </Row>        
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status :
                                </Col>
                                <Col>
                                    {product.countInStock >= 1? "In Stock" : "Out Of Stock"}
                                </Col>
                            </Row>        
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button className="btn-block bg-dark" type="button" disabled={product.countInStock === 0}>Add To Cart</Button>
                      </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>}
        </Container>
        <Footer/>    
        </>
    );
};

export default ProductPage;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, ListGroup, Row , Button, ListGroupItem, FormControl} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { productDetailsRequest } from '../../../redux/action/productRequest/productRequest';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import Rating from '../../Rating/Rating';



const ProductPage = () => {
    const idName = useParams()
    const navigate = useNavigate()
    const dispach = useDispatch()
    const [qty, setQty] = useState(1)

    const productDetails = useSelector(state => state.productDetails);
    const { product, error, isLoding } = productDetails
    // Add to card
    const addToCart = () => {
        navigate(`/cart/${idName.id}?qty=${qty}`)
    }
    useEffect(() => {
        dispach(productDetailsRequest(idName.id))
    },[idName.id])
    return (
        <>
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
                        {product.countInStock >0 && <ListGroup.Item>
                            <Row>
                                <Col>
                                    Qty :
                                </Col>   
                                <Col>
                                <FormControl as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map(x => <option key={x + 1} value={x + 1}>{x +1}</option>)}        
                                </FormControl>
                                </Col>    
                            </Row>
                        </ListGroup.Item> } 
                      <ListGroup.Item>
                        <Button className="btn-block bg-dark" type="button" disabled={product.countInStock === 0} onClick={addToCart}>Add To Cart</Button>
                      </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>}
        </Container> 
        </>
    );
};

export default ProductPage;
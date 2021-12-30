import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, FormControl, Image, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import {addToCart, removeToCart} from "../../../redux/action/cartAction/cartAction"
import Message from '../../Message/Message';


const CartPage = () => {
    const {id} = useParams()
    const url = useLocation()
    const navigate = useNavigate()
    const dispach = useDispatch()
    const qty = url.search ? Number(url.search.split("=")[1]) : 1;
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const { cartItem } = cart; 

    const hendleIdemRemove = (id) => {
        dispach(removeToCart(id))
    }
    console.log(cartItem)
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id,qty))
        }
    },[dispatch,id, qty])

    return (
        <>
        <Container fluid>
            <h2 className='mt-3 mb-2'>Soping Cart</h2>
           <Row className='h-100'>
            <Col md={8} sm={12} xs={12}>
            {cartItem.length === 0 ? <Message>Your Cart is Emtey. <Link to='/'>Go Back</Link></Message> : (<ListGroup variant='flush'>
                {cartItem.map(item =>
                    <ListGroup.Item key={item.product}>
                        <Row>
                            <Col md={2} sm={2} xs={4}>
                                <Image src={ item.image} className='img-fluid rounded'/>
                            </Col>
                            <Col md={2} sm={2} xs={4}>
                                <Link to={`/product/${item.product}`}>{ item.name}</Link>
                            </Col>
                            <Col md={2} sm={2} xs={4}>
                                $ {item.price}
                            </Col>
                            <Col md={2} sm={2} >
                                <FormControl as="select" value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                                    {[...Array(item.countInStock).keys()].map(x => <option key={x + 1} value={x + 1}>{x +1}</option>)}        
                                </FormControl>
                            </Col>
                            <Col md={2} sm={2}>
                                <button className='btn btn-light' onClick={()=>hendleIdemRemove(item.product)}><i style={{fontSize: "20px"}} class="fas fa-trash-alt navbar-dark"></i></button>
                            </Col>
                        </Row>
                   </ListGroup.Item>)}
                </ListGroup>)}
            </Col>
            <Col md={4} sm={12}>
                <Card>
                    <ListGroup variant='flush'>

                    <ListGroup.Item>
                      <h4>Subtotal ({cartItem.reduce((rem ,item)=> rem+ item.qty , 0)}) Item</h4>              
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                      <h5>Price: $ {cartItem.reduce((rem ,item)=> rem+ item.qty * item.price , 0).toFixed(2)}</h5>              
                    </ListGroup.Item>
                    
                    <ListGroup.Item className='text-center'>
                        <button className='btn btn-dark' onClick={()=> navigate("/shipping")}>proceed to chackout</button>     
                    </ListGroup.Item>
                                
                    </ListGroup>   
                </Card>
            </Col>    
        </Row>        
        </Container>
        </>
    );
};

export default CartPage;
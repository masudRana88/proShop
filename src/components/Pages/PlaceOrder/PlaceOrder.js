import React from 'react';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ChackOut from '../../ChackOut/ChackOut';
import {orderSend, removeOrderToClintSide} from '../../../redux/action/OrderAction/OrderAction'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const PlaceOrder = () => {
    const {cart} = useSelector(state=> state)
    const { shippingAddress, paymentMethod, cartItem } = cart
    const { orderCreate } = useSelector(state => state)
    const {success,order} = orderCreate

    const navigate = useNavigate()
    const fixTowDesimal = (value) => {
        return (value* 100/ 100).toFixed(2)
    }

    cart.item = fixTowDesimal(cartItem.reduce((previousValue, item) => item.qty * item.price + previousValue, 0))
    
    cart.shipping = fixTowDesimal(cart.item > 100 ? 50 : 0)
    // 5% tax
    cart.tax = fixTowDesimal(cart.item * 0.05)
    cart.total = fixTowDesimal(Number(cart.item) + Number(cart.shipping) + Number(cart.tax))

    const dispach = useDispatch()
    const hendlePlaceOrder = async(e) => {
        e.preventDefault()
        await dispach(orderSend({
            shippingAddress,
            paymentMethod,
            textPrice: cart.tax,
            totalPrice: cart.total,
            orderItem: cartItem,
            itemPrice : cart.item,
            shippingPrice: cart.shipping,
        }))
    }
    useEffect(() => {
        if (success) {
           navigate(`/order/${order._id}`)
        }
        if (cartItem.length === 0) {
            navigate(`/cart`)
        }
    },[success,cartItem])
    return (
        <Container>
            <ChackOut step1 step2 step3 step4/>
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shiping</h2>
                    <p>
                        {`Address : ${shippingAddress.address}, City : ${shippingAddress.city}, Postal Code : ${shippingAddress.zip}, Country : ${shippingAddress.country}`}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method :</strong> {paymentMethod}
                    </p>
                </ListGroup.Item>
                <ListGroup className='mb-4' variant="flush">
                    <ListGroup.Item>
                    <h2>Order Item</h2>  
                    </ListGroup.Item>
                    {
                     cartItem.map((item)=><ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={1}>
                                    <Image src={item.image} fluid rounded/>
                                </Col>
                                <Col>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={4}>
                                    {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                </Col>
                            </Row>
                            </ListGroup.Item>
                     )
                    }
                </ListGroup>
            </ListGroup>
          </Col>
          <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                    <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Items
                        </Col>
                        <Col>
                            ${cart.item}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Shipping
                        </Col>
                        <Col>
                            ${cart.shipping}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Tax
                        </Col>
                        <Col>
                            ${cart.tax}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Total
                        </Col>
                        <Col>
                            ${cart.total}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className='w-100' onClick={hendlePlaceOrder}disabled={orderCreate&&orderCreate.message}>Place Order</Button>
                </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        </Container>
    );
};

export default PlaceOrder;
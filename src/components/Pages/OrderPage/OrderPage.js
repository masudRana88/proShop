import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import { useEffect } from 'react';
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {useParams } from 'react-router-dom';
import { getOrderById, removeOrderToClintSide, orderPayAction } from "../../../redux/action/OrderAction/OrderAction.js"
import {clearCart} from "../../../redux/action/cartAction/cartAction"
import Message from '../../Message/Message.js';


const OrderPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const paypleClintId = process.env.REACT_APP_PAYPAL_CLINT_ID

    const { order, isLoding } = useSelector(state => state.orderItem);
    const { userInfo } = useSelector(state => state.userLogin)
    const {orderPay} = useSelector(state=> state.payDetails)
    useEffect(() => {
        dispatch(getOrderById(id))
    },[id,orderPay])
    return (
       <Container>
        <Row>
          <Col md={8} className='mt-4'>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shiping</h2>
                    {order&&
                    <p>
                        {`Address : ${order.shippingAddress.address}, City : ${order.shippingAddress.city}, Postal Code : ${order.shippingAddress.zip}, Country : ${order.shippingAddress.country}`}
                    </p>
                    }
                    <p><strong>Name: </strong>{userInfo.name}</p>
                    <p><strong>Email: </strong>{userInfo.email}</p>
                    {order && order.isDeliverd? <Message variant="success">Order is Deleverd</Message>:<Message variant="danger">Not Deleverd</Message>}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method :</strong> {order && order.paymentMethod}
                    </p>
                    {order&& order.isPaid? <Message variant="success">Paid</Message>:<Message variant="danger">Not Paid</Message>}
                </ListGroup.Item>
                <ListGroup className='mb-4' variant="flush">
                    <ListGroup.Item>
                    <h2>Order Item</h2>  
                    </ListGroup.Item>
                    {order &&
                     order.orderItem.map((item)=><ListGroup.Item key={item.product}>
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
          <Col md={4} className='mt-4'>
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
                            ${order&& order.itemPrice}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Shipping
                        </Col>
                        <Col>
                            ${order&&order.shippingPrice}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Tax
                        </Col>
                        <Col>
                            ${order&&order.textPrice}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Total
                        </Col>
                        <Col>
                            ${order&&order.totalPrice}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <PayPalScriptProvider options={{ "client-id": `${paypleClintId}`}}>
                    <PayPalButtons 
                createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: `10`
                                // value: order && order.itemPrice
                            }
                        }
                    ]
                });
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture(); 
                    await dispatch(orderPayAction(id, order))
                    await dispatch(removeOrderToClintSide())
                    dispatch(clearCart())
                }
            }

                    />
                </PayPalScriptProvider>
                </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        </Container>
    );
};

export default OrderPage;
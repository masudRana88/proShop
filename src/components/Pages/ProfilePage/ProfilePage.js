import React, { useEffect, useState } from 'react';
import {Row,Col, Container, Form, FormGroup, FormLabel, FormControl, ListGroup, Button, Table} from "react-bootstrap"

import { useDispatch, useSelector } from 'react-redux';
import Message from '../../Message/Message';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile, userLoginMessegeClear } from '../../../redux/action/userAction/userAction';
import {getOrderByUserId} from "../../../redux/action/OrderAction/OrderAction"
import Loader from '../../Loader/Loader';

const ProfilePage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispach = useDispatch()
    const navigate = useNavigate()

    const {userOrder} = useSelector(state=>state)
    const userLogin = useSelector(state => state.userLogin)
    const userProfile = useSelector(state => state.userProfile)
    const { order } = useSelector(state => state.userOrder)
    const { user } = userProfile
    const { error, messege } = userLogin
    
    const hendleUpdateUser = (e, email, name, password) => {
        e.preventDefault()
        dispach(updateUserProfile(email, name, password))
        console.log(name,email)
    }

    useEffect(() => {
        if (userLogin && !userLogin.userInfo.email) {
            dispach(getUserProfile())
        }
        else {
            if (userLogin.userInfo) {
                setName(userLogin.userInfo.name)
                setEmail(userLogin.userInfo.email)
            }
            else {
                setName(user.name)
                setEmail(user.email)
            }
        }
        dispach(userLoginMessegeClear())
        dispach(getOrderByUserId())
    },[dispach, navigate])
    return (
        <Container>
        <Row>
            <Col md={3}>
                <h3 className='text-center'>My Profile</h3>
                <ListGroup variant="flush" className='mt-2 border p-1'>
                {error && <Message variant="danger">{error}</Message>}
                {messege && <Message variant="success">{messege}</Message>}
                <Form className=''>
                    <FormGroup controlId='name' className='mb-3'>
                        <FormLabel>Name:</FormLabel>
                        <FormControl type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </FormGroup>    
                    <FormGroup controlId='email' className='mb-3'>
                        <FormLabel>Email:</FormLabel>
                        <FormControl type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </FormGroup>    
                    <FormGroup controlId='password' className='mb-3'>
                        <FormLabel>New Password:</FormLabel>
                        <FormControl type='password' placeholder='Enter Your Name' onChange={(e)=>setPassword(e.target.value)}/>
                    </FormGroup>
                    <Button onClick={(e)=>hendleUpdateUser(e,email, name, password)}>Update</Button>    
                </Form>

                </ListGroup>
            </Col>
            <Col md={9}>
                <h3 className='text-center'>My Orders</h3>
                {order.length ?<Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Delevered</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {order.map(item=><tr key={item._id}>
                           <td>{ item._id}</td>
                           <td>{ item.createdAt.slice(0, 10)}</td>
                           <td>{ item.totalPrice}</td>
                           <td className='text-center'>{ item.isPaid?<i class="fas fa-check text-success"></i> :<i class="fas fa-times text-danger "></i> }</td>
                           <td className='text-center'>{ item.isDeliverd? <i class="fas fa-check text-success"></i> :<i class="fas fa-times text-danger"></i>}</td>
                           <td><button type="button" className='btn btn-sm btn-light' onClick={()=>navigate(`/order/${item._id}`)}>Details</button></td>
                       </tr>)} 
                    </tbody>
                </Table>: userOrder.isLoding ?
                <Loader/>: !order.length &&
                <Message>Empty</Message>
                }
                
            </Col>
        </Row>
        </Container>
    );
};

export default ProfilePage;
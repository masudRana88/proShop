import React, { useEffect, useState } from 'react';
import {Row,Col, Container, Form, FormGroup, FormLabel, FormControl, ListGroup, Button} from "react-bootstrap"

import { getUserProfile, updateUserProfile , userLoginMessegeClear} from '../../../redux/action/userAction/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../Message/Message';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispach = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const userProfile = useSelector(state => state.userProfile)
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
    },[dispach, navigate])
    return (
        <Container>
        <Row>
            <Col md={3}>
                <ListGroup variant="flush" className='mt-5'>
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
                <h3>My Orders</h3>
            </Col>
        </Row>
        </Container>
    );
};

export default ProfilePage;
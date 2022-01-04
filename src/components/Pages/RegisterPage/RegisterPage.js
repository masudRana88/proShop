import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../../FromContainer/FormContainer';
import {userRegisterRequest,userLoginRequest} from "../../../redux/action/userAction/userAction"
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';


const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const dispach = useDispatch()
    const userRegister = useSelector(state => state.userRegister);
    const { regInfo } = userRegister;
    const isLoding = false
    const hendleRegister = async(e) => {
        e.preventDefault()
        await dispach(userRegisterRequest(name,email,password))
        dispach(userLoginRequest(email, password))
    }
    return (
        <div>
            <FormContainer>
                <h2 className="text-center mt-3 mb-3">Register</h2>
                {regInfo && regInfo.error && <Message variant="danger">{regInfo.error}</Message>}

                {regInfo && regInfo.message && <Message variant="success">{regInfo.message}</Message>}

                {regInfo && regInfo.isLoding? <Loader/>:
                <Form onSubmit={hendleRegister}>
                <FormGroup controlId='name' className='mb-3'>
                    <FormLabel>Name:</FormLabel>
                    <FormControl type='text' placeholder='Enter Your Name' onBlur={(e) => setName(e.target.value)} required/>
                </FormGroup>
                <FormGroup controlId='email' className='mb-3'>
                    <FormLabel>Email:</FormLabel>
                    <FormControl type='email' placeholder='Enter Your Email' onBlur={(e) => setEmail(e.target.value)} required/>
                </FormGroup>
                <FormGroup controlId='password' className='mb-3'>
                    <FormLabel>Password:</FormLabel>
                    <FormControl type='password' placeholder='Enter Your Password' onBlur={(e) => setPassword(e.target.value)} required/>
                </FormGroup>
                <Button type='submit' variant='primary'>Register</Button>     
                </Form>
                }
                <Row>
                <Col className='py-3'>You Have an Account? <Link to="/login">Log In</Link></Col>
                </Row>
            </FormContainer>
        </div>
    );
};

export default RegisterPage;
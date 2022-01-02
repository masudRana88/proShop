import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { userLoginRequest } from "../../../redux/action/userAction/userAction";
import FormContainer from '../../FromContainer/FormContainer';
import Message from '../../Message/Message';
import Loader from '../../Loader/Loader';

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email)
    console.log(password)
    const dispach = useDispatch()
    const userLogin = useSelector(state => state.userLogin);
    const { isLoding, error, userInfo } = userLogin;
    const formSubmitHendeler = (e) => {
        e.preventDefault()
        dispach(userLoginRequest(email,password))
    }
    return (
        <FormContainer>
            <h2 className="text-center">Login</h2>
            { error && <Message variant="danger">{ error}</Message>}
            {isLoding? <Loader/>:<Form onSubmit={formSubmitHendeler}>
                {/* take Email */}
            <FormGroup controlId='email' className='mb-3'>
                <FormLabel>Email:</FormLabel>
                <FormControl type='email' placeholder='Enter Your Email' onBlur={(e) => setEmail(e.target.value)} required/>
            </FormGroup>
                {/*take Password */}
            <FormGroup controlId='password' className='mb-3'>
                <FormLabel>Password:</FormLabel>
                <FormControl type='password' placeholder='Enter Your Password' onBlur={(e) => setPassword(e.target.value)} required/>
            </FormGroup>
            <Button type='submit' variant='primary'>Log In</Button>    
            </Form>}
            <Row>
                <Col className='py-3'>New Costomer? <Link to="/singup">Sing Up</Link></Col>
            </Row>
        </FormContainer>
    );
};

export default LoginPage;
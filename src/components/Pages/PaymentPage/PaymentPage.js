import React from 'react';
import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ChackOut from '../../ChackOut/ChackOut';
import FormContainer from '../../FromContainer/FormContainer';
import {addPaymentMetod} from "../../../redux/action/cartAction/cartAction"
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    const dispach = useDispatch()
    const navigate = useNavigate()
    const hendleSubmit = async(e) => {
        e.preventDefault()
        await dispach(addPaymentMetod(paymentMethod))
        navigate("/place-order")
    }
    return (
        <FormContainer>
            <ChackOut step1 step2 step3 />
            <h2 className='mt-4'>Payment Method</h2>
            <Form onSubmit={hendleSubmit}>
                <Form.Group className='my-3'>
                    <Form.Label as="legend">Select Method</Form.Label>
                </Form.Group>
                <Col>
                    <Form.Check type="radio" label="PayPal or Cradit Card" id='PayPal' value='PayPal' checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
                </Col>
                <Button type='submit' className='mt-4'>Continue</Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentPage;
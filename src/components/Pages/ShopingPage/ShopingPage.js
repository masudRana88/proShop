import React from 'react';
import { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import FormContainer from '../../FromContainer/FormContainer';
import { addShippingAddress } from '../../../redux/action/cartAction/cartAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ChackOut from '../../ChackOut/ChackOut';


const ShopingPage = () => {
    const shippingAddress = useSelector(state => state.cart.shippingAddress)

    // inisialize value
    const [address , setAddress] = useState(shippingAddress? shippingAddress.address: "")
    const [city , setCity] = useState(shippingAddress? shippingAddress.city: "")
    const [zip , setZip] = useState(shippingAddress? shippingAddress.zip: "")
    const [country, setCountry] = useState(shippingAddress? shippingAddress.country: "")

    const dispach = useDispatch()
    const navigate = useNavigate()
    
    const hendleShipping = async(e) => {
        e.preventDefault()
        await dispach(addShippingAddress({ address, city, zip, country }))
        navigate("/payment")
    }
    return (
        <FormContainer>
            <ChackOut step1/>
            <h2 className='mt-4 mb-3'>Shopping</h2>
            <Form onSubmit={hendleShipping}>
                <FormGroup controlId='address' className='mb-3'>
                    <FormLabel>Address:</FormLabel>
                    <FormControl type='text' value={address} placeholder='Enter Your Address' required onChange={(e)=>setAddress(e.target.value)}/>
                </FormGroup>   

                <FormGroup controlId='city' className='mb-3'>
                    <FormLabel>City:</FormLabel>
                    <FormControl type='text' value={city} placeholder='Enter Your City' required onChange={(e)=>setCity(e.target.value)}/>
                </FormGroup>

                <FormGroup controlId='zip' className='mb-3'>
                    <FormLabel>Zip Code:</FormLabel>
                    <FormControl type='text' value={zip} placeholder='Enter Your Zip code' required onChange={(e)=>setZip(e.target.value)}/>
                </FormGroup>

                <FormGroup controlId='country' className='mb-3'>
                    <FormLabel>Country:</FormLabel>
                    <FormControl type='text' value={country} placeholder='Enter Your Country' required onChange={(e)=>setCountry(e.target.value)}/>
                </FormGroup>
                <Button type='submit' className='mb-3'>Continue</Button>
            </Form>
        </FormContainer>
    );
};

export default ShopingPage;
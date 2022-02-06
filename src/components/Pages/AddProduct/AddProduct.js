import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct } from '../../../redux/action/productRequest/productRequest';
import Message from '../../Message/Message';

const AddProduct = () => {
    const dispach = useDispatch()
    const navigate = useNavigate()
    
    const resetForm = () => {
        document.getElementById("updateForm").reset()
        setName('')
        setBrand("")
        setCategory("")
        setPrice("")
        setStock("")
        setDescription("")
    }

    const hendleUplode = (e) => {
        e.preventDefault()
        setSuccess(false)
        let formData = new FormData()
        formData.append('image', image);
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('stock', stock);
        formData.append('price', price);
        formData.append('description', description);
        dispach(addProduct(formData, setSuccess))
        resetForm()
    }
    
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)
    return (
        <Container>
             <Row>
                <Col md={6} className='mx-auto mt-3'>
                    <Button className='btn-light' onClick={()=> navigate("/admin/products")}><i class="fas fa-chevron-left"></i> Back</Button>
                    <h1 className='text-center mt-3'>Add Product</h1>
                    {success&& <Message variant="success">Product is Added</Message>}
                    <Form onSubmit={hendleUplode} id="updateForm">
                        <FormGroup className='mb-3' controlId='name'>
                            <FormLabel >Name</FormLabel>
                            <FormControl type="text" required placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='brand'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" required placeholder="Enter Brand" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" required placeholder="Enter category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='stock'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" required placeholder="Enter stock number" value={stock} onChange={(e)=>setStock(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" required placeholder="Enter price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" required type="text" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='email'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" required placeholder="Enter email" accept="image/*" onChange={(e)=> setImage(e.target.files[0])}/>
                        </FormGroup>
                    <Button className='mt-3' type='submit'>Uplode</Button>
                    </Form>
                </Col>
            </Row> 
        </Container>
    );
};

export default AddProduct;
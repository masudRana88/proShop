import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdatePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispach = useDispatch()
    const productList = useSelector(state => state.productList)
    const { products, isLoding } = productList
    
    const [product, setProduct] = useState({})
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const hendleUpdate = e => {
        e.preventDefault()
        console.log("update")
    }
    
    useEffect(() => {
        if (products.length === 0) {
           navigate("/admin/products")
        }else{
        const selectProduct = products.find(i => i._id === id)
        setName(selectProduct.name)
        setBrand(selectProduct.brand)
        setCategory(selectProduct.category)
        setStock(selectProduct.countInStock)
        setPrice(selectProduct.price)
        setDescription(selectProduct.description)
        }
    },[id])
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto border'>
                    <h1 className='text-center'>Update Product</h1>
                    <p className='text-center'>ID: {id}</p>
                    <Form onSubmit={hendleUpdate}>
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
                            <Form.Control as="textarea" type="text" required placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='email'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Enter email" accept="image/*" onChange={(e)=> setImage(e.target.file)}/>
                        </FormGroup>
                    <Button className='mt-3' type="submit">Update</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductUpdatePage;
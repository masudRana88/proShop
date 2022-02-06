import React from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, productRequest } from '../../../redux/action/productRequest/productRequest';
import Loader from '../../Loader/Loader';

const ProductsListPage = () => {
    const dispach = useDispatch()
    const navigate = useNavigate()

    const productLists = useSelector(state => state.productList)
    const { products, isLoding } = productLists
    const {productsList} = products

    const hendleDelete = (id) => {
        if (window.confirm("You wants to delete this Product?") == true) {
            dispach(deleteProduct(id))
        }
    }
    useEffect(() => {
            dispach(productRequest())
    },[])
    return (
        <Container >
            <div className='d-flex justify-content-between my-4'>
                <h2>All Products</h2>
                <Button onClick={()=>navigate("/admin/products/add")}><i class="fas fa-plus"></i>  Create Product</Button>
            </div>
            {isLoding?<Loader/>:
            <Table striped bordered hover responsive size="sm" className='mb-4'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Catagory</th>
                    <th>Brand</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {productsList?.map(item=><tr key={item.email}>
                        <td>{ item._id}</td>
                        <td>{ item.name}</td>
                        <td>{ item.category}</td>
                        <td >{ item.brand}</td>
                        <td >{ item.countInStock}</td>
                        <td >{ item.price}</td>
                    <td>
                        <button className='btn btn-sm' onClick={()=>navigate(`/admin/products/${item._id}/edit`)}>
                            <i class="far fa-edit ps-icon text-info"></i>
                        </button>
                        <button className='btn btn-sm' onClick={()=>hendleDelete(item._id)}><i class="bi bi-trash-fill ps-icon text-danger"></i></button>
                    </td>
                    </tr>
                )}
                </tbody>
            </Table> }
        </Container>
    );
};

export default ProductsListPage;
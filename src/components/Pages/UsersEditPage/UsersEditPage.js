import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../../../redux/action/userAction/userAction';
import Message from '../../Message/Message';

const UsersEditPage = () => {
    const navigate = useNavigate()
    const dispach = useDispatch()
    const { id } = useParams()
    const usersList = useSelector(state => state.usersList)
    const { users } = usersList;

    const [user, setUser] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [messege, setMessege] = useState(false);
    
    const hendleUpdate = (e) => {
        e.preventDefault()
        dispach(editUser({name,email,isAdmin,id: user._id}, setMessege))
    }

    useEffect(() => {
    if (users.length === 0) {
        navigate("/users")
    } else {
        const editabeUser = users.find(i => i._id === id)
        setUser(editabeUser)
        setName(editabeUser.name)
        setEmail(editabeUser.email)
        setIsAdmin(editabeUser.isAdmin)
        setMessege(false)
    }
    },[id,dispach])
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={6} className='mx-auto border border-primary'>
                    <Button className='btn-light' onClick={()=> navigate("/users")}><i class="fas fa-chevron-left"></i> Back</Button>
                    <h2 className='text-center mt-3'>Edit User</h2>
                    <h6 className='text-center'>Id : {user._id}</h6>
                    {messege&&<Message variant="success">User is updated</Message>}
                    {usersList.error&&<Message variant="danger">User is not updated</Message>}
                    <Form onSubmit={hendleUpdate}>
                        <FormGroup className='mb-3' controlId='name'>
                            <FormLabel >Name</FormLabel>
                            <FormControl type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className="mb-3" controlId="checkbox">
                            <FormCheck type="checkbox" label="Make Admin" checked={isAdmin} onChange={(e)=>setIsAdmin(e.target.checked)}/>
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UsersEditPage;
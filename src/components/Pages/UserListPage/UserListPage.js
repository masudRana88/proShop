import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Container,Table} from "react-bootstrap"
import { deleteUser, getUserList } from '../../../redux/action/userAction/userAction';
import Loader from '../../Loader/Loader';
import LinkContainer from '../../LinkContainer/LinkContainer';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
    const dispach = useDispatch()
    const navigate = useNavigate()
    const userList = useSelector(state => state.usersList)
    const { users } = userList
    // Hendle user Delete
    const hendleUserDelete = (id) => {
        if (window.confirm("You wants to delete this user??") == true) {
            dispach(deleteUser(id))
        }
    }

    useEffect(() => {
        dispach(getUserList())
    },[dispach])
    return (
        <Container >
            <h2 className='text-center mt-3'>All Users</h2>
            {userList.isLoding?<Loader/>:
            <Table striped bordered hover responsive size="sm" className='mb-4'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {userList && users.map(item=><tr key={item.email}>
                        <td>{ item._id}</td>
                        <td>{ item.name}</td>
                        <td>{ item.email}</td>
                        <td className='text-center'>{item.isAdmin?<i class="fas fa-check ps-icon text-success"></i>:<i class="fas fa-times ps-icon text-danger"></i> }</td>
                    <td>
                        <button className='btn btn-sm' onClick={()=>navigate(`/admin/users/${item._id}/edit`)}>
                            <i class="far fa-edit ps-icon text-info"></i>
                        </button>
                        <button className='btn btn-sm' onClick={()=>hendleUserDelete(item._id)}><i class="bi bi-trash-fill ps-icon text-danger"></i></button>
                    </td>
                    </tr>
                )}
                </tbody>
            </Table> }
        </Container>
    );
};

export default UserListPage;
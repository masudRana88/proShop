import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserList } from '../../../redux/action/userAction/userAction';

const UserListPage = () => {
    const dispach = useDispatch()
    useEffect(() => {
        dispach(getUserList())
    },[])
    return (
        <div>
            <h2>This is user List pages</h2>
        </div>
    );
};

export default UserListPage;
import React from 'react';
import { useEffect } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllOrder, orderDeleverdAction ,deleteOrder} from '../../../redux/action/OrderAction/OrderAction';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const OrderListPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ordersState = useSelector(state => state.allOrderList)
    const deleverdDetels = useSelector(state => state.orderDeleverdDetails)
    const {orderDeleverd} = deleverdDetels
    const { isLoding, error, allOrder } = ordersState

    const hendleDeleverd = (id) => {
        dispatch(orderDeleverdAction(id))
    }
    const hendleDelete = (id) => {
        console.log(id)
        dispatch(deleteOrder(id))
    }
    useEffect(() => {
        dispatch(getAllOrder())
    },[orderDeleverd])
    return (
        <Container >
            <h2 className='text-center mt-3'>All Order</h2>
            
            {
                isLoding ? <Loader /> :
                <Table striped bordered hover responsive size="sm" className='mb-4'>
                <thead>
                    <tr>
                    <th>Order Id</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Deleverd</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allOrder.map( order => <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.userEmail}</td>
                    <td>{order.createdAt.slice(0,10)}</td>
                    <td>${order.totalPrice}</td>
                    <td className='text-center'>{ order.isPaid?<i class="fas fa-check ps-icon text-success"></i>:<i class="fas fa-times ps-icon text-danger"></i>}</td>
                    <td className='text-center'>{order.isDeliverd?<i class="fas fa-check ps-icon text-success"></i>:<i class="fas fa-times ps-icon text-danger"></i>}</td>
                    
                    <td>
                        <button className='btn btn-sm btn-success' onClick={()=>hendleDeleverd(order._id)}>
                            Deliverd
                        </button>
                        <button className='btn btn-sm btn-info' onClick={()=>navigate(`/order/${order._id}`)}>
                            DETAILS
                        </button>
                        
                        <button className='btn btn-sm' onClick={()=>hendleDelete(order._id)}><i class="bi bi-trash-fill ps-icon text-danger"></i></button>
                    </td>
                    </tr>
                    )}
                
                </tbody>
            </Table>
            } 
        </Container>
    );
};

export default OrderListPage;
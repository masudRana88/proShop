import axios from "axios"

export const orderSend = (order) => async(dichpach) => {
    try {
            dichpach({
                type: "ORDER_SEND_TO_DB_REQUEST"
            })

            const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
            }                               
            const { data } = await axios.post("http://localhost:5000/api/order", order, config)
            dichpach({
                type: "ORDER_SEND_TO_DB",
                paylod: data
            })
    } catch (error) {
        dichpach({
                type: "ORDER_SEND_TO_DB_FAIL"
            })
    }
    
}

// Get All order
export const getAllOrder = () => async (dispatch) => {
    try {   
        dispatch({
                type: "ALL_ORDER_GET_REQUEST"
            })
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
        } 
        const { data } = await axios.get(`http://localhost:5000/api/order/admin/order/`, config)
        dispatch({
            type: "ALL_ORDER_GET_SUCCESS",
            paylod : data
            })

    } catch (error) {
        dispatch({
            type: "ALL_ORDER_GET_FAIL",
        })
    }
}

// Delete order 
export const deleteOrder = (id) => async (dispatch,getStore) => {
    try {   
        dispatch({
                type: "DELETE_ORDER_REQUEST"
            })
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
        } 
  
        const { data } = await axios.delete(`http://localhost:5000/api/order/delete/${id}`, config)
        dispatch({
            type: "DELETE_ORDER_SUCCESS",
            paylod : data
        })
        const store = getStore()
        const newOrder = store.allOrderList.allOrder.filter(item => item._id !== id)
        dispatch({
            type: "UPDATE_ORDER",
            paylod:newOrder
        })
    } catch (error) {
        dispatch({
            type: "DELETE_ORDER_FAIL",
        })
    }
}

// Get order by Order Id
export const getOrderById = (id) => async (dispatch) => {
    
    try {   
        dispatch({
                type: "ORDER_GET_REQUEST"
            })
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
        } 
            const { data } = await axios.get(`http://localhost:5000/api/order/${id}`, config)
        dispatch({
            type: "ORDER_GET_SUCCESS",
            paylod : data
            })

    } catch (error) {
        dispatch({
            type: "ORDER_GET_FAIL",
        })
    }

}

// Get Order By User Id
export const getOrderByUserId = () => async (dichpach) => {
    try {
    dichpach({
        type: "USER_ORDER_GET_REQUEST"
    })


    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
            } 

    const {data} = await axios.get("http://localhost:5000/api/order/user/order",config)
    
    dichpach({
        type: "USER_ORDER_GET_SUCCESS",
        payload: data
    })

    } catch (error) {
        dichpach({
        type: "USER_ORDER_GET_FAIL"
    })
    }
}


// Update Order To PAY
export const orderPayAction = (id,details) => async (dichpach) => {
    try {
        dichpach({
            type: "ORDER_PAY_REQUEST"
        })
        const {data} = await axios.put(`http://localhost:5000/api/order/pay/${id}`, details)
        dichpach({
            type: "ORDER_PAY_SUCCESS",
            payload : data
        })
    } catch (error) {
        dichpach({
            type: "ORDER_PAY_FAIL"
        })
    }
}
// Update Order to Deleverd
export const orderDeleverdAction = (id) => async (dichpach,getStore) => {
    try {
        dichpach({
            type: "ORDER_DELEVERD_REQUEST"
        })
        
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
        } 
        const {data} = await axios.put(`http://localhost:5000/api/order/deleverd/`,{id},config)
        dichpach({
            type: "ORDER_DELEVERD_SUCCESS",
            payload : data
        })
        const store = getStore()
        const deleverd = store.allOrderList.allOrder.find(item => item._id === id)
        // dichpach({
        //     type: "UPDATE_ORDER",
        //     paylod:newOrder
        // })
    } catch (error) {
        dichpach({
            type: "ORDER_DELEVERD_FAIL"
        })
    }
}

export const removeOrderToClintSide = () => async (dichpach) => {
    dichpach({
        type: "REMOVE_ORDER_MESSEGE"
    })
}
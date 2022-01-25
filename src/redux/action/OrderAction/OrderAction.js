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
// 
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

export const removeOrderToClintSide = () => async (dichpach) => {
    dichpach({
        type: "REMOVE_ORDER_MESSEGE"
    })
}
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

export const removeError = () => async (dichpach) => {
    dichpach({
        type: "REMOVE_ORDER_MESSEGE"
    })
}
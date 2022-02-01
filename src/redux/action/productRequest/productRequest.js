import axios from "axios"


export const productRequest = ()=> async(dispach) => {
    try {
        dispach({ type: "PRODUCT_LIST_REQUEST" })
        

        const {data} = await axios.get("http://localhost:5000/api/products")
        

        await dispach({type: "PRODUCT_LIST_SUCCESS", payload: data})
    } catch (error) {
        dispach({type: "PRODUCT_LIST_FAIL", error: "Sorry! Product is not found ..."})
    }
}

export const productDetailsRequest =(action)=> async (dispach)=>{
    try {
        dispach({ type: "PRODUCT_Details_REQUEST" })
        

        const {data} = await axios.get(`http://localhost:5000/api/products/${action}`)
        

        await dispach({type: "PRODUCT_Details_SUCCESS", payload: data})
    } catch (error) {

        dispach({type: "PRODUCT_Details_FAIL", error: "Sorry! Product is not found ..."})
    }
}

export const addProduct = (formdata) =>async(dispach)=> {
    try {
        dispach({ type: "ADD_PRODUCT_REQUEST" })
        
        //  Admin Auth token
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                token
                }
        } 
        
        const { data } = await axios.get("http://localhost:5000/api/order/admin/add-order", formdata, config)
        dispach({
            type: "ADD_PRODUCT_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispach({ type: "ADD_PRODUCT_FAIL" })
    }
}
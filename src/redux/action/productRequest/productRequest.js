import axios from "axios"


export const productRequest = (page,size)=> async(dispach) => {
    try {
        dispach({ type: "PRODUCT_LIST_REQUEST" })
        

        const {data} = await axios.get(`http://localhost:5000/api/products?page=${page}&&size=${size}`)
        

        await dispach({type: "PRODUCT_LIST_SUCCESS", payload: data})
    } catch (error) {
        dispach({type: "PRODUCT_LIST_FAIL", error: "Sorry! Product is not found ..."})
    }
}

export const getTopProduct = () => async (dispach) => {
    try {
        dispach({ type: "TOP_PRODUCT_LIST_REQUEST" })
        

        const {data} = await axios.get("http://localhost:5000/api/products/top")
        

        await dispach({type: "TOP_PRODUCT_LIST_SUCCESS", payload: data})
    } catch (error) {
        dispach({type: "TOP_PRODUCT_LIST_FAIL", error: "Sorry! Product is not found ..."})
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

export const addProduct = (formdata,setSuccess) =>async(dispach)=> {
    try {
        dispach({ type: "ADD_PRODUCT_REQUEST" })
        
        //  Admin Auth token
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                token
                }
        } 
        
        const { data } = await axios.post("http://localhost:5000/api/products/admin/add-product", formdata, config)
        dispach({
            type: "ADD_PRODUCT_SUCCESS",
            payload: data
        })
        setSuccess(true)
    } catch (error) {
        dispach({ type: "ADD_PRODUCT_FAIL" })
    }
}

export const updateProduct = (FormData, setSuccess) => async (dispach)=>{
    try {
         dispach({ type: "UPDATE_PRODUCT_REQUEST" })
        
        //  Admin Auth token
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                token
                }
        } 
        
        const { data } = await axios.put("http://localhost:5000/api/products/admin/update-product", FormData, config)
        dispach({
            type: "UPDATE_PRODUCT_SUCCESS",
            payload: data
        })
        setSuccess(true)
    } catch (error) {
         dispach({ type: "UPDATE_PRODUCT_FAIL" })
    }
}

export const deleteProduct = (id) => async (dispach) => {
    try {
        dispach({ type: "DELETE_PRODUCT_REQUEST" })

        //  Admin Auth token
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            const token = "Bearer "+ userInfo.token
            const config = {
                headers: {
                token
                }
        } 
        
        const { data } = await axios.delete(`http://localhost:5000/api/products/admin/delete-product/${id}`, config)

        dispach({
            type: "DELETE_PRODUCT_SUCCESS",
            payload: data
        })

    } catch (error) {
        dispach({ type: "DELETE_PRODUCT_FAIL" })
    }
}
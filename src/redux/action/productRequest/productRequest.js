import axios from "axios"

export const productRequest = async(dispach, reduser) => {
    try {
        dispach({ type: "PRODUCT_LIST_REQUEST" }, reduser)
        

        const {data} = await axios.get("http://localhost:5000/api/products")
        
        
        await dispach({type: "PRODUCT_LIST_SUCCESS", payload: data},reduser)
    } catch (error) {
        dispach({type: "PRODUCT_LIST_FAIL", error: "Sorry! No Product is found"},reduser)
    }
}
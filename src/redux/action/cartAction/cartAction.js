import axios from "axios"

export const addToCart = (id, qty) => async (dispach, getState) => {
    const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)

    dispach({
        type: "ADD_TO_CART",
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty
        }
    })
    
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem))
}



export const removeToCart = (id) => async (dispach, getState) => {
    dispach({
        type: "REMOVE_TO_CART",
        payload: id
    })
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem))
}
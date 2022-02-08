import axios from "axios"


// Add to card
export const addToCart = (id, qty) => async (dispach, getState) => {
    const {data} = await axios.get(`https://safe-citadel-09142.herokuapp.com/api/products/${id}`)

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


// Remove to card
export const removeToCart = (id) => async (dispach, getState) => {
    dispach({
        type: "REMOVE_TO_CART",
        payload: id
    })
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem))
}
// Clear Cart
export const clearCart = () => async (dichpach) => {
    localStorage.setItem("cartItem", "[]");
    dichpach({
        type: "CLEAR_CART",
    })
}

// Add shiping addtess
export const addShippingAddress = (data) => async (dispach) => {
    dispach({
        type: "ADD_SHIPPING_ADDRESS",
        payload : data
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

// Add PaymentMethode 
export const addPaymentMetod = (paymentMethod) => async (dispach) => {
    dispach({
        type: "ADD_PAYMENT_METHODE",
        payload : paymentMethod
    })
   
}

export const addToCartReducer = (state={cartItem: [],shippingAddress: {},paymentMethod: ""}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const exiestItem = state.cartItem.find(x => x.product === item.product) 
            
            if (exiestItem) {
                return {
                    ...state,
                    cartItem : state.cartItem.map(x=> x.product === exiestItem.product ? item : x)
                }
            }
            else {
                return {
                    ...state,
                    cartItem: [...state.cartItem,item]
                }
            }
        case "REMOVE_TO_CART":
             return {
                ...state,
                cartItem: state.cartItem.filter(x => x.product !== action.payload)
            }
        case "ADD_SHIPPING_ADDRESS":
            return {
                ...state, shippingAddress : action.payload
            }
        case "ADD_PAYMENT_METHODE":
            return {
                ...state, paymentMethod : action.payload
            }
        default:
            return state
    }
}

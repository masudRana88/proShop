export const addToCartReducer = (state={cartItem: []}, action) => {
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
        default:
            return state
    }
}

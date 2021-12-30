export const productListReduser = (state= {products : []}, action) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return {...state, isLoding: true, products: [] };
        case "PRODUCT_LIST_SUCCESS":
            return {...state, isLoding: false, products: action.payload };
        case "PRODUCT_LIST_FAIL":
            return {...state, isLoding: false, products: [], error: action.error };
        default: 
            return state
    }
}

export const productDetailsReduser = (state = {product: {}}, action) => {
    switch (action.type) {
        case "PRODUCT_Details_REQUEST":
            return {...state, isLoding: true, product: {} };
        case "PRODUCT_Details_SUCCESS":
            return {...state, isLoding: false, product: action.payload };
        case "PRODUCT_Details_FAIL":
            return {...state, isLoding: false, product: [], error: action.error };
        default:
            return state;
    }
}
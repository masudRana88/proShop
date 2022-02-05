export const productListReduser = (state= {products : []}, action) => {
    switch (action.type) {
        // get product list
        case "PRODUCT_LIST_REQUEST":
            return {...state, isLoding: true, products: [] };
        case "PRODUCT_LIST_SUCCESS":
            return {...state, isLoding: false, products: action.payload };
        case "PRODUCT_LIST_FAIL":
            return { ...state, isLoding: false, products: [], error: action.error };
        // Add Product 
        case "ADD_PRODUCT_REQUEST":
            return { ...state, isLoding: true, error: false };
        case "ADD_PRODUCT_SUCCESS":
            return { ...state, isLoding: false, error: false, products: action.payload };
        case "ADD_PRODUCT_FAIL":
            return { ...state, isLoding: false, error: true };
        // Update Product
        case "UPDATE_PRODUCT_REQUEST":
            return { ...state, isLoding: true, error: true };
        case "UPDATE_PRODUCT_SUCCESS":
            return { ...state, isLoding: false, error: false, products: action.payload }
        case "UPDATE_PRODUCT_FAIL":
            return { ...state, isLoding: false, error: true };
        // Delete product
        case "DELETE_PRODUCT_REQUEST":
            return { ...state, isLoding: true, error: false };
        case "DELETE_PRODUCT_SUCCESS":
            return { ...state, isLoding: false, error: false, products: action.payload };
        case "DELETE_PRODUCT_FAIL":
            return { ...state, isLoding: false, error: true };
        default: 
            return state
    }
}

export const topProductReduser = (state = {products : []},action) => {
    switch (action.type) {
       case "TOP_PRODUCT_LIST_REQUEST":
            return {...state, isLoding: true, products: [] };
        case "TOP_PRODUCT_LIST_SUCCESS":
            return {...state, isLoding: false, products: action.payload };
        case "TOP_PRODUCT_LIST_FAIL":
            return { ...state, isLoding: false, products: [], error: action.error };
        default: 
            return {...state}
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
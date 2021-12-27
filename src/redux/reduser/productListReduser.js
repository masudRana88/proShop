export const productListReduser = (state= {products : []}, action) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return { isLoding: true, products: [] };
        case "PRODUCT_LIST_SUCCESS":
            return { isLoding: false, products: action.payload };
        case "PRODUCT_LIST_FAIL":
            return { isLoding: false, products: [], error: action.payload };
        default: 
            return state
    }
}
import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReduser } from "../redux/reduser/productListReduser"

const reduser = combineReducers({
    productList : productListReduser,
});

// itial store
const inisialState = {}

const store = createStore(reduser, inisialState, composeWithDevTools())


export default store;
import { createStore, combineReducers,applyMiddleware, compose } from "redux"
import { productListReduser ,productDetailsReduser} from "./reduser/productReduser"
import thunk from "redux-thunk"
import { addToCartReducer } from "./reduser/cartReduser";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduser = combineReducers({
    productList: productListReduser,
    productDetails: productDetailsReduser,
    cart: addToCartReducer
});

const cardItemFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []

const initialState = {
    cart: { cartItem: cardItemFromLocalStorage }
}

const store = createStore(reduser, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store;
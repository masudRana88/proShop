import { createStore, combineReducers,applyMiddleware, compose } from "redux"
import { productListReduser, productDetailsReduser } from "./reduser/productReduser"
import {userLoginReduser, userProfile, userRegisterReduser,updateUserProfile} from "../redux/reduser/userReduser.js"
import thunk from "redux-thunk"
import { addToCartReducer } from "./reduser/cartReduser";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduser = combineReducers({
    productList: productListReduser,
    productDetails: productDetailsReduser,
    cart: addToCartReducer,
    userLogin: userLoginReduser,
    userRegister: userRegisterReduser,
    userProfile: userProfile,
    // updateProfile: updateUserProfile
});

const cardItemFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []

const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {};

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};
    
const initialState = {
    cart: { cartItem: cardItemFromLocalStorage, shippingAddress:shippingAddressFromLocalStorage},
    userLogin: {userInfo: userInfoFromLocalStorage}
}

const store = createStore(reduser, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store;
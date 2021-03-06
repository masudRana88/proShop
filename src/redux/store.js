import { createStore, combineReducers,applyMiddleware, compose } from "redux"
import { productListReduser, productDetailsReduser,topProductReduser } from "./reduser/productReduser"
import {userLoginReduser, userProfile, userRegisterReduser,userListReducer} from "../redux/reduser/userReduser.js"
import thunk from "redux-thunk"
import { addToCartReducer } from "./reduser/cartReduser";
import {orderSavaToDb,getOrderByIdReducer,getUserOrderReducer,orderPayReducer, getAllOrderReducer,orderDeleverdReducer,deleteOrderReducer} from './reduser/orderReduser'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduser = combineReducers({
    productList: productListReduser,
    topProduct: topProductReduser,
    productDetails: productDetailsReduser,
    cart: addToCartReducer,
    userLogin: userLoginReduser,
    userRegister: userRegisterReduser,
    userProfile: userProfile,
    usersList : userListReducer,
    orderCreate: orderSavaToDb,
    orderItem: getOrderByIdReducer,
    allOrderList: getAllOrderReducer,
    orderDeleverdDetails: orderDeleverdReducer,
    orderDeleteDetails:deleteOrderReducer,
    payDetails: orderPayReducer,
    userOrder : getUserOrderReducer
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
import { createStore, combineReducers,applyMiddleware, compose } from "redux"
import { productListReduser ,productDetailsReduser} from "./reduser/productReduser"
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduser = combineReducers({
    productList: productListReduser,
    productDetails: productDetailsReduser
});


const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)))


export default store;
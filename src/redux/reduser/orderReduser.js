// Create Order And Send to DB

export const orderSavaToDb = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_SEND_TO_DB":
      return {
        ...state,
        isLoding: false,
        error: false,
        success: true,
        order: action.paylod
      }
    case "ORDER_SEND_TO_DB_REQUEST":
      return {
        ...state,
        isLoding: true,
        error: false,
        success: false,}
    case "ORDER_SEND_TO_DB_FAIL":
      return {
        ...state,
        isLoding: false,
        error: "Sorry, Something is Wrong !",
        success: false,}
    case "REMOVE_ORDER_MESSEGE":
      return {
        ...state,
        isLoding: false,
        error: false,
        success: false,}
    default:
      return {...state}
    }
}


// GET All Order
export const getAllOrderReducer = (state = {allOrder:[]},action) => {
  switch (action.type) {
    case "ALL_ORDER_GET_REQUEST":
      return { ...state, isLoding: true, error: false,allOrder: [] }
    case "ALL_ORDER_GET_SUCCESS":
      return {...state, isLoding: false, error: false, allOrder: action.paylod}
    case "ALL_ORDER_GET_FAIL":
      return {...state, isLoding: false, error: true, allOrder: []}
    case "UPDATE_ORDER":
      return {...state, isLoding: false, error: true, allOrder: action.paylod}
    default:
      return { ...state }
  }
}

// Get Order by Id name
export const getOrderByIdReducer = (state={}, action) => {
  
  switch (action.type) {
    case "ORDER_GET_REQUEST":
      return {...state,isLoding: true, error: false}
    case "ORDER_GET_SUCCESS":
      return { ...state, isLoding: false, error: false, order: action.paylod }
    case "ORDER_GET_FAIL":
      return {...state,isLoding: false, error: true }
    default:
      return {...state}
  }

}

// Order pay reducer
export const orderPayReducer = (state={orderPay:{}}, action) => {
  
  switch (action.type) {
    case "ORDER_PAY_REQUEST":
      return {isLoding: true, error: false}
    case "ORDER_PAY_SUCCESS":
      return {isLoding: false, error: false, orderPay: action.payload }
    case "ORDER_PAY_FAIL":
      return {isLoding: false, error: true }
    default:
      return {...state}
  }
}


export const deleteOrderReducer = (state={}, action) => {
  switch (action.type) {
    case "DELETE_ORDER_REQUEST":
      return {...state,error: false}
    case "DELETE_ORDER_SUCCESS":
      return {...state,deleteOrder:action.paylod }
    case "DELETE_ORDER_FAIL":
      return {...state,error: true }
    default:
      return {...state}
  }
}

export const orderDeleverdReducer = (state={orderDeleverd:{}}, action) => {
  
  switch (action.type) {
    case "ORDER_DELEVERD_REQUEST":
      return {...state,isLoding: true, error: false}
    case "ORDER_DELEVERD_SUCCESS":
      return {...state,isLoding: false, error: false, orderDeleverd: action.payload }
    case "ORDER_DELEVERD_FAIL":
      return {...state,isLoding: false, error: true }
    default:
      return {...state}
  }

}

export const getUserOrderReducer = (state={order:{}},action) => {
  
  switch (action.type) {
    case "USER_ORDER_GET_REQUEST":
      return {...state, isLoding: true, error: false}
    case "USER_ORDER_GET_SUCCESS":
      return {...state, isLoding: false, error: false,order: action.payload}
    case "USER_ORDER_GET_FAIL":
      return {...state, isLoding: false, error: true}
    default:
      return {...state}
  }

}
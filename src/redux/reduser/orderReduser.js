export const orderSavaToDb = (state={}, action) => {
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

export const getOrder = (state={}, action) => {
  
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
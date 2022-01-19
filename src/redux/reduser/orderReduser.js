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
// Login
export const userLoginReduser = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return {...state, isLoding: true, error: false};
        case "USER_LOGIN_SUCCESS":
            return {...state, isLoding: false, userInfo: action.payload, error:false, messege: "Login sesscesfull" };
        case "USER_LOGIN_FAIL":
            return { ...state, isLoding: false, error: action.payload,messege: false};
        case "USER_LOGOUT":
            return { ...state, userInfo: {} }
        case "USER_LOGIN_MESSEGE_CLEAR":
            return {...state, messege: false, error: false}
        default: 
            return state
    }
}

// Register
export const userRegisterReduser = (state = {}, action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST":
            return { ...state,regInfo: action.payload};
        case "USER_REGISTER_SUCCESS":
            return { ...state, regInfo: action.payload};
        case "USER_REGISTER_FAIL":
            return {...state, regInfo: action.payload}
        default:
            return {...state}
    }
}

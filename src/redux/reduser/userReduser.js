export const userLoginReduser = (state={}, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return {...state, isLoding: true};
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
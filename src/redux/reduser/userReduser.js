export const userLoginReduser = (state={}, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return {...state, isLoding: true};
        case "USER_LOGIN_SUCCESS":
            return {...state, isLoding: false, userInfo: action.payload, error:false };
        case "USER_LOGIN_FAIL":
            return { ...state, isLoding: false, error: action.payload };
        case "USER_LOGOUT":
            return {}
        default: 
            return state
    }
}
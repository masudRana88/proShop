// Login
export const userLoginReduser = (state = {userInfo:{}}, action) => {
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
            return { ...state, messege: false, error: false }
        // profile update
        case "USER_PROFILE_UPDATE_SUCCESS":
            return { ...state,messege: "Profile Update successfull !", error: false, userInfo: action.payload };
        case "USER_PROFILE_UPDATE_FAIL":
            return { ...state, messege: false, error: "Profile Update Fail !" };
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
// get user profile
export const userProfile = (state = {}, action) => {
    switch (action.type) {
        case "USER_PROFILE_REQUEST":
            return { ...state, user: action.payload };
        case "USER_PROFILE_SUCCESS":
            return { ...state, user: action.payload };
        case "USER_PROFILE_FAIL":
            return { ...state, user: action.payload };
        default:
            return{...state};
    }
}

// get users List
export const userListReducer = (state = {users:[]}, action) => {
    switch (action.type) {
        case "USER_LIST_REQUEST":
            return {...state, isloding: true, error: false}
        case "USER_LIST_SUCCESS":
            return {...state, isloding: false, error: false,users: action.payload}
        case "USER_LIST_FAIL":
            return {...state, isloding: false, error: "User can Not be Loed"}
        case "USER_LIST_RESET":
            return { ...state, isloding: false, error: false, users: [] }
        case "USER_DELETE_REQUEST":
            return { ...state, isloding: true, error: false }
        case "USER_DELETE_SUCCESS":
            return { ...state, isloding: false, error: false, users: action.payload }
        case "USER_DELETE_FAIL":
            return {...state, isloding: false, error: "User Can not be delete"}
        default:
            return {...state};
    }
}

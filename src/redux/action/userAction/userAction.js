import axios from "axios"

// Login
export const userLoginRequest = (email, password,goBack) => async (dispach) => {
    try {
        // Login request
        dispach({
            type: "USER_LOGIN_REQUEST",
        })

        const config = {
             headers: {
                'Content-Type': 'application/json',
            }
        }

        const {data} = await axios.post("http://localhost:5000/api/user/login",{email, password},config)
        //Login success 
        dispach({
            type: "USER_LOGIN_SUCCESS",
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))
        goBack()
    } catch (error) {
        dispach({
            type: "USER_LOGIN_FAIL",
            payload: error.response && error.response.status === 401 && "Email and Password is not valid"
        })
    }
}

// Register
export const userRegisterRequest = (name, email, password) => async (dispach) => {
    try {
        const config = {
             headers: {
                'Content-Type': 'application/json',
            }
        }
    const { data } = await axios.post("http://localhost:5000/api/user/register", { name, email, password }, config)
        dispach({
            type: "USER_REGISTER_REQUEST",
            payload: {
                isLoding: true,
                error: false,
                message: false,
                userInfo: {}
            }
        })
        
        dispach({
            type: "USER_REGISTER_SUCCESS",
            payload:  {
                isLoding: false,
                error: false,
                message: "successfully Register",
                userInfo: data
            }
        })
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
         dispach({
            type: "USER_REGISTER_FAIL",
            payload:  {
                isLoding: false,
                error: error.response.data.message ? error.response.data.message : {},
                message: false,
                userInfo: {}
            }
        })
    }
}

// Get user Profile 
export const getUserProfile = (user) => async (dispach, getState) => {
    try {
        dispach({
            type: "USER_PROFILE_REQUEST",
            payload: {
                isLoding: true,
                error: false,
                message: false,
            }
        });
        
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const token = "Bearer "+ userInfo.token
        const config = {
             headers: {
            'Content-Type': 'application/json',
            token
            }
        }
        const { data } = await axios.get("http://localhost:5000/api/user/profile", config)
        dispach({
            type: "USER_PROFILE_SUCCESS",
            payload:  {
                ...data,
                isLoding: false,
                error: false,
            }
        })
    } catch (error) {
         dispach({
            type: "USER_PROFILE_FAIL",
             payload: {
                 error: "user is not found !"
            }
        })
    }
}

// Get User List
export const getUserList = () => async (dispach) => {
    try {
        dispach({
            type : "USER_LIST_REQUEST"
        })
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const token = "Bearer "+ userInfo.token
        const config = {
             headers: {
            'Content-Type': 'application/json',
            token
            }
        }
        const { data } =await axios.get("http://localhost:5000/api/user", config)
        // console.log(data)
        dispach({
            type: "USER_LIST_SUCCESS",
            payload : data
        })
    } catch (error) {
        dispach({
            type: "USER_LIST_FAIL"
        })
    }
}

// DELETE user
export const deleteUser = (id) => async (dispach) => {
    try {
        dispach({
            type: "USER_DELETE_REQUEST"
        })
        console.log(id)
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const token = "Bearer "+ userInfo.token
        const config = {
             headers: {
            'Content-Type': 'application/json',
            token
            }
        }
        const { data } = await axios.delete(`http://localhost:5000/api/user/${id}`, config)
        console.log(id)
        dispach({
            type: "USER_DELETE_SUCCESS",
            payload: data
        })

    } catch (error) {
        dispach({
            type: "USER_DELETE_FAIL"
        })
    }
}

// Update Profile 
export const updateUserProfile = (email, name, password) => async (dispach,getState) => {
    try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const token = "Bearer "+ userInfo.token
        const config = {
             headers: {
            'Content-Type': 'application/json',
            token
            }
        }
        const { data } = await axios.post("http://localhost:5000/api/user/profile", { email, name, password }, config)
        
        dispach({
            type: "USER_PROFILE_UPDATE_SUCCESS",
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispach({
            type: "USER_PROFILE_UPDATE_FAIL",
            payload: {
                message: false,
                error : "Profile Update Fail!",
            }
        })
    }
}
// Logout
export const userLogout = () => async (dispach) => {
    dispach({
        type: "USER_LOGOUT"
    })
    dispach({
        type: "USER_LIST_RESET"
    })
    localStorage.setItem("userInfo", JSON.stringify({}))
}

export const userLoginMessegeClear = () => async (dispach) => {
    dispach({
        type: "USER_LOGIN_MESSEGE_CLEAR"
    })
}
import axios from "axios"

// Login
export const userLoginRequest = (email, password) => async (dispach) => {
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

        const {data} = await axios.post("http://localhost:5000/api/login",{email, password},config)
        //Login success 
        dispach({
            type: "USER_LOGIN_SUCCESS",
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

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
    const { data } = await axios.post("http://localhost:5000/api/register", { name, email, password }, config)
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

// Logout
export const userLogout = () => async (dispach) => {
    dispach({
        type: "USER_LOGOUT"
    })
    localStorage.setItem("userInfo", JSON.stringify({}))
}

export const userLoginMessegeClear = () => async (dispach) => {
    dispach({
        type: "USER_LOGIN_MESSEGE_CLEAR"
    })
}
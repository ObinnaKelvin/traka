import axios from "axios";

//1
const API_URL_R = "http://localhost:3005/api/auth/register"
const API_URL_L = "http://localhost:3005/api/auth/login"
//2
//const API_URL = "https://traka.onrender.com/api/"

//Register User
const register = async (userData) => {
    const response = await axios.post(API_URL_R, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Login User
const login = async (userData) => {
    const response = await axios.post(API_URL_L, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}



//Logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService
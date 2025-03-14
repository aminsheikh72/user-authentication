import axios from "axios";

const register = async(formData)=>{
    const response = await axios.post("/api/user/register",formData)
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}
const login = async(formData)=>{
    const response = await axios.post("/api/user/login",formData)
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}

const authService = {register,login}
export default authService;
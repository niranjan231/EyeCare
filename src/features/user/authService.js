import axios from "axios";

const API_URL = '/api/v1/auth'

const registerUser =async(data)=>{
console.log(data);
const respons = await axios.post(API_URL + "/register",data)
localStorage.setItem("data", JSON.stringify(respons.data));
console.log(respons.data);}

const loginUser = async (data) => {
    try {
      const response = await axios.post(API_URL + "/login", data);
      localStorage.setItem("data", JSON.stringify(response.data));
      return response.data;  
    } catch (error) {
      console.error("Error during login:", error);
      throw error.response ? error.response.data : new Error('Something went wrong'); 
    }
  }
const authService={
registerUser,
loginUser
}


export default authService









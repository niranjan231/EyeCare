import axios from "axios"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const BASE_URL = "https://eye-care.developmentalphawizz.com";



export async function FetchProduct(){
    return axios.get(`${BASE_URL}/api/v1/brands/products/7`,{
        headers : {
            'x-access-token': localStorage.getItem("token")
        }
    })
}
import axios from "axios"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const BASE_URL = "https://fakestoreapi.com";



export async function FetchCategoryApi(){
    return axios.get(`${BASE_URL}/products`,{
        headers : {
            'x-access-token': localStorage.getItem("token")
        }
    })
}
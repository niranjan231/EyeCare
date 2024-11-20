import axios from "axios"
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
const BASE_URL = "https://eye-care.developmentalphawizz.com";



export async function FetchBrandApi() {
    return axios.get(`${BASE_URL}/api/v1/brands`, {
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    })
}
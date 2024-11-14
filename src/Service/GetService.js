import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";
export async function GetProduct() {
    return axios.get(`${BASE_URL}
/posts`, { // use backticks here
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    });
}

// second
// import axios from 'axios';

// export const GetProduct = axios.create({
//   baseURL: 'https://eye-care.developmentalphawizz.com/api/v1/brands/products/7',
// });

// other
//  export const GetProduct = axios.create({
//     baseURL: 'https://eye-care.developmentalphawizz.com',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   export default GetProduct;
import { useEffect, useState } from "react";
import "../App.css"
import { FetchBrandApi } from "../Api/BrandApi";



const Brand=()=>{

const [brandData , setBrandData] = useState([])

    useEffect(()=>{
        FetchBrandApi()
        .then(res=>{
           
            // console.log("brand data",res.data)
            setBrandData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return (
        <div>
        {
            brandData.map((re,index)=>{
                // console.log("re",re)
                return <>
                <img
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/brands/${re.image}`}
                alt=""
                className="product-image"
              />
              </>
              
            })
        }
        
        Brand
        </div>
    )
}
export default Brand;
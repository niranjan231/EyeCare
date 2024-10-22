import axios from "axios";
import { useState, useEffect } from "react";





const Demo = () => {


    useEffect(() => {
        axios.get('http://eye-care.developmentalphawizz.com/api/v1/products/latest')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            Demo
        </div>
    )
}
export default Demo;
import axios from "axios";
import { useState, useEffect } from "react";

const Demo = () => {
  const [data, setData] = useState(null); // Initialize as null for an object

  useEffect(() => {
    axios.get("https://grocypay.com/api/v1/products/search?name=c2Ftb3Nh")
      .then((res) => {
        console.log(res.data);
        setData(res.data); // Set the whole response data to state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    
       {/* { <div>
          <p>ID: {data.id}</p>
          <p>Order Status: {data.status}</p>
          <p>Tracking Number: {data.shipping_address_datacontact_person_name
}</p>
        </div>} */}
    
    </div>
  );
};

export default Demo;

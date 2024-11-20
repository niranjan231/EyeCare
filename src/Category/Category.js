import { useEffect, useState } from "react";
import { FetchCategoryApi } from "../Api/ApiCategory";
import "../App.css";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    FetchCategoryApi()
      .then((res) => {
        setCategoryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="catgy1-1">
        {categoryData.map((data4, id) => {
          return (
            <div key={id} className="catgy1-2">
              <img src={data4.image} alt=""></img>
              <div className="text-center">
              <p>{data4.category}</p>
                <p>RS:{data4.price}</p>
              </div>
                <button className="catgy1-4">Add to Card</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Category;

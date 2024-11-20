import { useEffect, useState } from "react";
import "../App.css";
import { FetchBrandApi } from "../Api/BrandApi";
import BrandDetales from "./BrandDetales";

const Brand = () => {
  const [brandData, setBrandData] = useState([]);
  const [showBrand , setShowBrand] = useState(false)
  const handleBrandDetales=()=>{
    setShowBrand(true)
  }

  useEffect(() => {
    FetchBrandApi()
      .then((res) => {
        console.log("brand data", res.data);
        setBrandData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);
  return (
    <div className="container-fluid py-4">
        <p className="h3 font-bolder">BRANDS</p>
      <div className="d-flex flex-wrap align-items-center gap-2">
        {brandData.map((brand, index) => {
          return (
            <div key="index" className="brand-image-container d-grid align-items-center">
              <img onClick={handleBrandDetales}
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/brand/${brand.image}`}
                alt="Glasses 1"
                className="brand-image"
              />
            </div>
          );
        })}
      </div>
      {
        showBrand && <BrandDetales/>
      }
    </div>
  );
};
export default Brand;

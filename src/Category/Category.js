import { useEffect, useState } from "react";
import { FetchCategoryApi } from "../Api/ApiCategory";
import "../App.css";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]); // All categories from API
  const [filteredData, setFilteredData] = useState([]); // Filtered categories
  const [selectedCategory, setSelectedCategory] = useState("All CATEGORY"); // Dropdown selected category

  // Fetch Categories from API
  useEffect(() => {
    FetchCategoryApi()
      .then((res) => {
        setCategoryData(res.data);
        setFilteredData(res.data); // Initially show all categories
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle Dropdown Selection
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(categoryData); // Show all if "All" is selected
    } else {
      setFilteredData(categoryData.filter((item) => item.category === category));
    }
  };

  return (
    <>
      {/* Dropdown */}
      <div className="dropdown">
        <button
          className="catgy-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedCategory}
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleFilter("All")}
            >
              All
            </button>
          </li>
          {Array.from(new Set(categoryData.map((item) => item.category))).map(
            (category, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Display Filtered Data */}
      <div className="catgy1-1">
        {filteredData.map((data4, id) => (
          <div key={id} className="catgy1-2">
            <img src={data4.image} alt="" />
            <div className="text-center">
              <p>{data4.category}</p>
              <p>RS:{data4.price}</p>
            </div>
            <button className="catgy1-4">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;

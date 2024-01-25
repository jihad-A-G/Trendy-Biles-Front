import React from "react";
import "./Categories.css";
import CategoryCard from "../../Components/CategoryCardComponent/CategoryCard.jsx"
export default function Categories() {
  return (
    <div className="CategoryPage">
      <h1>Categories</h1>
      <div className="CategoryCards">
        <CategoryCard/>
      </div>
    </div>

  );
}




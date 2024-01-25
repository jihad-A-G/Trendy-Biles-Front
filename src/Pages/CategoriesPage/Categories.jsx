import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCardComponent/CategoryCard.jsx"
export default function Categories() {
  return (
    <div className="CategoryPage">
     <div className="Links"> <Link to="/">Home / <Link to="/Category">Categories</Link></Link> </div>
      <h1>Categories</h1>
      <div className="CategoryCards">
        <CategoryCard/>
      </div>
    </div>

  );
}




import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCardComponent/CategoryCard.jsx";
export default function Categories() {
  const data = useLoaderData();
  return (
    <div className="CategoryPage">
      <div className="Links"> 
        {" "}
        <Link to="/">
          Home / <Link to="/Category">Categories</Link>
        </Link>{" "}
      </div>
      <h1>Categories</h1>
      <div className="CategoryCards">
        {data.map((item) => (
          <CategoryCard category={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

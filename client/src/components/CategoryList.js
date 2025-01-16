import React from "react";
import "../styles/DietPlanner.css";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const CategoryList = ({ onCategoryChange }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <button key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;

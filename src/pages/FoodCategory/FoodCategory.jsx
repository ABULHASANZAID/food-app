import React, { useEffect, useState } from "react";
import "./FoodCategory.css";

const FoodCategory = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setFoods(data.recipes);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchFood();
  }, []);

  if (!foods || foods.length === 0) {
    return <></>;
  }

  return (
    <div className="foodCategory">
      {foods.map((food, index) => (
        <div className="foodItem" key={food.id}>
          hello
          <div>
            <img src={food.image} height={"300px"} alt="" />
          </div>
          <div>{food.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FoodCategory;

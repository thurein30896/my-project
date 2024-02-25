import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loading from "./Loading";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [loading,setLoading] = useState(true);
  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    setMeals(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, []);
  return (
    
        loading ? <Loading/> : <div className="grid grid-cols-4 gap-5 py-10">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    
  );
};

export default Meals;

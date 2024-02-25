import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Detail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);
  const getSingleMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setMeal(data.meals[0]);
    // console.log(data.meals[0]);
    setLoading(false);
  };
  useEffect(() => {
    getSingleMeal();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="my-5">
      <div className=" p-0 w-1/3 mb-5 mx-auto">
        <img className="rounded-3xl" src={meal.strMealThumb} alt="" />
      </div>
      <div className="shadow-md overflow-hidden  rounded-3xl text-center">
        <h3 className="text-white bg-pink-500 p-2">{meal.strCategory}</h3>
        <h1 className="font-bold text-lg py-3">{meal.strMeal}</h1>
        <h2 className="font-semibold mb-3">Instruction</h2>
        <p className="px-10">{meal.strInstructions}</p>
        <a
          href={meal.strYoutube}
          className="underline text-red-600 font-medium shadow-xl rounded-xl block my-5 mx-auto px-4 py-2 w-fit active:scale-105 duration-200"
        >
          Watch on Youtube
        </a>
      </div>
    </div>
  );
};

export default Detail;

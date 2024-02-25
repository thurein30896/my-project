import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <div className="w-64 relative h-[400px] border-2 flex justify-center items-center flex-col p-5 rounded-xl gap-5 shadow-lg hover:scale-105 duration-200 hover:shadow-xl">
      <img className="w-[200px] rounded-xl" src={meal.strMealThumb} alt="" />
      <h3 className="">{meal.strMeal}</h3>
      <Link to={`/detail/${meal.idMeal}`} >
        <button className="text-white bg-blue-500 py-2 px-10 rounded-xl absolute bottom-3 right-[50%] translate-x-[50%]">
            <FaEye className="text-lg" />
        </button>
      </Link>
    </div>
  );
};

export default Card;

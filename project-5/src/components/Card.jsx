import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({product}) => {
  return (
    <div className="rounded-lg shadow p-5 duration-100 hover:scale-105 hover:shadow-lg">
      <img src={product.image} className=" h-[200px] mx-auto my-3" alt="" />
      <h3 className=" line-clamp-1 font-bold text-xl text-secondary tracking-wide my-3">
        {product.title}
      </h3>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-primary" />
        <small className="font-semibold text-info">({product.rating.rate})</small>
      </div>
      <p className="text-xl my-2">${product.price}</p>
      <div className="flex items-center gap-3">
        <button className="bg-primary text-header rounded-lg px-4 py-2 shadow-md hover:scale-90 duration-100">
          Add To Cart
        </button>
        <button className="bg-info text-secondary rounded-lg px-4 py-2 shadow-md hover:scale-90 duration-100">
          Detail
        </button>
      </div>
    </div>
  );
};

export default Card;

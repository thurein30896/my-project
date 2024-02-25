import React, { useContext } from "react";
import { FcShop } from "react-icons/fc";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StateContext } from "../context/StateContext";

const Navbar = () => {
  const {search,setSearch} = useContext(StateContext);
  return (
    <div className="flex justify-between items-center px-5 py-2 my-3 shadow-md rounded-md bg-primary">
      <Link to={"/"} >
        <div className="flex items-center gap-3">
          <FcShop className="text-4xl" />
          <h1 className="text-xl font-semibold tracking-wider text-header">
            MMS-Shop
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <div className=" flex items-center gap-2 bg-header text-info px-3 py-2 rounded-md">
          <FaShoppingCart />
          <small>10</small>
        </div>
        <div className="flex items-center gap-3 border-2 border-header rounded px-3 py-2">
          <FaSearch className="text-header" />
          <input
            className="text-header outline-none bg-transparent"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

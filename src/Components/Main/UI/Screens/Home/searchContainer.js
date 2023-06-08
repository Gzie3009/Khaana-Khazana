import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [dish,setDish]=useState("")
  return (
    <>
      <div className="w-full flex shadow-xl shadow-red-100">
        <input
          value={dish}
          onChange={(e)=>setDish(e.target.value)}
          type="text"
          placeholder="Chicken Butter Masala"
          className="w-3/4 h-16 sm:h-16 rounded-l rounded-y p-5 text-lg sm:text-3xl border-l-2 border-y-2 border-rose-600"
        ></input>
        <Link to={dish===""?"/":"/searchrecipes/"+dish} className="grid place-items-center w-1/4 bg-rose-400 text-lg sm:text-4xl hover:bg-rose-500 text-white rounded-r border-R-2 border-y-2 border-rose-600">
          Search
        </Link>
      </div>
    </>
  );
};

export default SearchBox;

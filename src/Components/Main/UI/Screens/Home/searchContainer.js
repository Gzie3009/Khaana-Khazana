import React from "react";

const SearchBox = () => {
  return (
    <>
      <div className="w-full flex shadow-xl shadow-red-100">
        <input
          type="text"
          placeholder="Chicken Butter Masala"
          className="w-3/4 h-16 sm:h-16 rounded-l rounded-y p-5 text-lg sm:text-3xl border-l-2 border-y-2 border-rose-600"
        ></input>
        <button className="w-1/4 bg-rose-400 text-lg sm:text-4xl hover:bg-rose-500 text-white rounded-r border-R-2 border-y-2 border-rose-600">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBox;

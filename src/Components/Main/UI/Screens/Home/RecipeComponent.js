import React from "react";
import { Link } from "react-router-dom";
import veg from "../../../../../Assets/veg:nonveg/veg.png";
import nveg from "../../../../../Assets/veg:nonveg/nveg.png";
const RecipeComponent = (props) => {
  let { id, title, aggregateLikes, dishTypes, vegetarian, readyInMinutes } =
    props.data;
  const image = props.data.image? props.data.image: "https://demofree.sirv.com/nope-not-here.jpg";
  return (
    <>
      <div className="xl:w-[25%] md:w-1/2 p-4">
        <div className="bg-rose-50 p-4 rounded-lg shadow-xl shadow-rose-300 hover:border-2 border-rose-600">
          <div className="relative">
            <img
              className="h-40 rounded w-full object-fit object-center mb-2"
              src={image}
              alt="content"
            />
            <img
              className="absolute -bottom-2 right-0 bg-white p-1 h-14 w-14 object-fit object-center mb-2"
              src={vegetarian ? veg : nveg}
            />
            <p className="absolute bottom-0 left-0 flex bg-green-100 w-max rounded text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
          </div>
          <p className="flex flex-wrap text-rose-600 text-xs font-medium title-font">
            {dishTypes.map((type, index) => {
              return (
                <p key={index} className="pr-3 uppercase">
                  {type}
                </p>
              );
            })}
          </p>
          <h2 className="text-lg text-gray-900 font-medium title-font my-2">
            {title}
          </h2>
          <p className="leading-relaxed text-base w-full text-rose-500">
            &#9829;
            {aggregateLikes ? (
              <>{aggregateLikes} </>
            ) : (
              <>Not Available </>
            )}Likes{" "}
          </p>
          <p className="leading-relaxed text-base w-full flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p> {readyInMinutes} Minutes</p>
          </p>
          <Link
            to={"/recipe/" + id}
            className="flex text-center mt-5 py-2.5 w-full rounded hover:bg-red-400 shadow-lg shadow-rose-300 bg-red-400 text-xl text-white ml-auto hover:border-2 border-rose-600"
          >
            <div className="w-3/4">
              <p className="hover-underline-animation text-white">Get Recipe</p>
            </div>
            <div className="w-1/4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeComponent;

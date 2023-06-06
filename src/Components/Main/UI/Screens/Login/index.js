//Login form Component. Since No backend is available so, The temporary login mechanism acts such that the
//email and password is stored in the frontend inside localstorage.

//to authenticate the user whenever he visits the web app, we will check the localstorage if Email and Password is present then
// we will set the user as logged in. I know there are security concers but since we dont have a backend , this method is being used temporarily.

import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="grid place-items-center w-screen p-10">
        <div className="lg:w-2/6 md:w-1/2 bg-red-50 rounded-lg p-8 flex flex-col my-20 w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              placeholder="johndoe@mail.com"
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              placeholder="********"
              type="password"
              id="passowrd"
              name="passowrd"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg">
            Login
          </button>
          <p className="text-md text-gray-500 mt-3">
            New to Khaana Khazana?{" "}
            <Link to="/signup" className="text-blue-400 underline">
              {" "}
              Sign Up
            </Link>{" "}
            now.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

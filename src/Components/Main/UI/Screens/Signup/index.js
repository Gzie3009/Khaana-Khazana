import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebase";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignupSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("signed up ",user)
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert (errorMessage,errorMessage)
        // ..
      });
  };
  return (
    <>
      <div className="grid place-items-center w-screen p-10">
        <div className="lg:w-2/6 md:w-1/2 bg-red-50 rounded-lg p-8 flex flex-col my-20 w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              type="password"
              id="passowrd"
              name="passowrd"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button onClick={()=>handleSignupSubmit()} className="text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg">
            Login
          </button>
          <p className="text-md text-gray-500 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 underline">
              {" "}
              Login
            </Link>{" "}.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

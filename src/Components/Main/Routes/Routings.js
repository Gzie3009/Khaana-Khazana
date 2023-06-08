import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
import Error from "../UI/Screens/Error";
import Home from "../UI/Screens/Home";
import RecipeDetails from "../UI/Screens/RecipeDetails";
import Login from "../UI/Screens/Login";
import Signup from "../UI/Screens/Signup";
import SearchResults from "../UI/Screens/Search";
const Routings = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/searchrecipes/:dish" element={<SearchResults/>}/> 
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routings;

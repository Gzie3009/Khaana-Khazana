import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithCustomToken } from "firebase/auth";
const Navbar = () => {
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  }
  const authorizeUser=()=>{
    const auth=getAuth();
    const authToken = getCookie("authToken");
    if (authToken) {
      console.log(authToken)
      // Restore the user's authentication state using the token
      signInWithCustomToken(auth, authToken)
        .then((userCredential) => {
          // User is successfully authenticated
          const user = userCredential.user;
          alert("loggedIn")
          console.log("User is logged in:", user);
        })
        .catch((error) => {
          // An error occurred while restoring the authentication state
          alert("error")
          console.error("Error restoring authentication state:", error);
        });
    }
    else{
      alert("not found")
    }
  }
  useEffect(() => {
    authorizeUser();
  }, []);

  return (
    <>
      <header className="text-gray-600 font-bold bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="https://img.icons8.com/?size=512&id=1itCmhFEiqIW&format=png"
              className="w-32"
            ></img>

            <span className="ml-3 text-xl font-black">Khaana Khazana</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="#"
              className="mr-5 md:mr- lg:mr-10 hover-underline-animation hover:text-gray-900"
            >
              Veg Recipe
            </Link>
            <Link
              to="#"
              className="mr-5 md:mr-10 hover-underline-animation hover:text-gray-900"
            >
              Non-Veg Recipe
            </Link>
            <Link
              to="#"
              className="mr-5 md:mr-10 hover-underline-animation hover:text-gray-900"
            >
              Indian Cuisine
            </Link>
            <Link
              to="#"
              className="mr-5 md:mr-10 hover-underline-animation hover:text-gray-900"
            >
              Chineese Cuisine
            </Link>
          </nav>
          <Link
            to="/login"
            className="inline-flex items-center bg-rose-400 border-0 py-1 px-3 focus:outline-none hover:bg-rose-600 rounded text-white mt-4 md:mt-0"
          >
            Login/Signup
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;

import React,{useEffect} from "react";
import { Link,useNavigate} from "react-router-dom";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../../Core/store/slice/userSlice";
const Navbar = () => {
  const dispatch =useDispatch()

  const authorizeUser=()=>{
   const loggedIn=localStorage.getItem("LOGIN")
   if(loggedIn){
     dispatch(loginUser())
   }
  }
  const user=useSelector((state)=>{
    return state.users.auth
  })
  const handleLogout=()=>{
    localStorage.clear();
  }
  useEffect(() => {
    authorizeUser()
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
          {user?<Link
          onClick={()=> handleLogout()}
            className="inline-flex items-center bg-rose-400 border-0 py-1 px-3 focus:outline-none hover:bg-rose-600 rounded text-white mt-4 md:mt-0"
          >
            Logout
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
          </Link>:<Link
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
          </Link>}
        </div>
      </header>
    </>
  );
};

export default Navbar;

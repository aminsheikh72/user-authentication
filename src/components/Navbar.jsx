import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {


const {user}= useSelector((state)=> state.auth)

const dispatch = useDispatch()
const {pathname} = useLocation()

const handleLogout =()=>{  
  dispatch(logoutUser())
}

  return (
    <nav className=" bg-pink-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          {" "}
          <Link
            to="/"
            className={
              pathname === "/" ? "flex items-center gap-2 px-3 py-2 rounded-lg transition bg-indigo-700" : "flex items-center gap-2 px-3 py-2 rounded-lg transition hover:bg-indigo-700"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            My App
          </Link>
        </div>
        <div className="flex gap-4">
             

            
             {
              !user ? (
                <>
                <Link
                to="/login"
                className={
              pathname === "/login" ? "flex items-center gap-2 px-3 py-2 rounded-lg transition bg-indigo-700" : "flex items-center gap-2 px-3 py-2 rounded-lg transition hover:bg-indigo-700"
            }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-in"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
                Login
              </Link>
              <Link
                to="/register"
                className={
              pathname === "/register" ? "flex items-center gap-2 px-3 py-2 rounded-lg transition bg-indigo-700" : "flex items-center gap-2 px-3 py-2 rounded-lg transition hover:bg-indigo-700"
            }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-plus"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
                Register
              </Link>
                </>
              ) : (
                <>
                <button
                onClick={handleLogout}
              to="/register"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition bg-indigo-700"
            >
              Logout
            </button>
                </>
              )
             }
                
             
               
           




           
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

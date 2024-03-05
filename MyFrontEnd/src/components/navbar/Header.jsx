import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 w-full shadow-md bg-white">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <div className="text-2xl font-bold text-blue-500">Vehi-X-world</div>
        <div className="font-bold">
          <ul className="flex flex-wrap gap-8 md:gap-12">


          <NavLink to="/home" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
          border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
            >Home
            </NavLink>
                                    




            <NavLink
              to="/explore"
              className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
          border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
            >
              Explore
            </NavLink>
            <NavLink
              to="/deals"
              className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
          border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
            >
              Deals
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
          border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
            >
              About
            </NavLink>
            <NavLink
              to="/contactus"
              className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
          border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div>
          <Link to="user/login">
            <button className="rounded bg-orange-400 py-1 px-4 font-bold hover:bg-orange-500 focus:outline-none">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

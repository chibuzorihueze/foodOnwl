import React from "react";
import logo from "./foodOnwl.png";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";



const Navbar = () => {
  return (
    <nav className="bg-white shadow-m">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-40 w-48" src={logo} alt="Logo" />
          </div>
          <div className="flex items-center">
            <div className="mr-8"><AiOutlineShoppingCart/></div>
            <button className="bg-[#229900] hover:bg-[#FF9900] text-white font-bold py-2 px-4 rounded">
              Sign up
            </button>
            <div className="rounded-full border border-[#BDBDBD] bg-[#EAEAEA] ml-6 p-2.5 "><AiOutlineUser/></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

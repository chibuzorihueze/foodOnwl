import React from "react";
import logo from "../../../assets/foodOnwl.png";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import OWButton from "../../common/buttons/Button";

const TopNav = ({ hasSearch }) => {
  return (
    <nav className="bg-white shadow-m">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-40 w-48" src={logo} alt="Logo" />
          </div>
          {hasSearch && (
            <div className="flex items-center justify-center flex-1">
              <input
                className="h-10 w-96 bg-[#f2f2f2] rounded-lg border-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Search menu..."
              />
            </div>
          )}
          <div className="flex items-center">
            <div className="mr-8">
              <AiOutlineShoppingCart />
            </div>
            <OWButton className="btns_green" disabled>
              Sign Up
            </OWButton>
            <div className="rounded-full border border-[#BDBDBD] bg-[#EAEAEA] ml-6 p-2.5 ">
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

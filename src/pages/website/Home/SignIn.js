import React from "react";
import { Ramen, Shawarma } from "../../../assets/images/home/FormImg";

const SignIn = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img
        className="absolute left-0 top-0 w-20 sm:w-32 md:w-40 lg:w-48"
        src={Ramen}
        alt="ramen"
      />
      <img
        className="absolute right-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-48"
        src={Shawarma}
        alt="shawarma"
      />
      <form className="relative z-10 w-80 sm:w-96 h-auto bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center">
        <div className="text-start pr-16">
          <h2 className="text-lg text-start font-bold mb-2">Let us know</h2>
          <p className="text-gray-600 text-start text-sm  mb-4">
            Enter your phone number to sign in
          </p>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter first name"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter last name"
          />
        </div>
        <button
          className="bg-[#229900] hover:bg-[#33CC33] text-white font-bold py-2 px-4 rounded-md w-full max-w-md"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignIn;

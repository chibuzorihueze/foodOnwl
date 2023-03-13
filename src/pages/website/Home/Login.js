import React from 'react';
import { Ramen, Shawarma } from '../../../assets/images/home/FormImg';

const Login = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img
        className="absolute left-0 top-0 w-16 sm:w-28 md:w-36 lg:w-44 mt-4 ml-4 lg:mt-6 lg:ml-6"
        src={Ramen}
        alt="ramen"
      />
      <img
        className="absolute right-0 bottom-0 w-16 sm:w-28 md:w-36 lg:w-44 mb-4 mr-4 lg:mb-6 lg:mr-6"
        src={Shawarma}
        alt="shawarma"
      />
      <form className="relative z-10 w-96 h-80 bg-white shadow-md rounded-md p-6">
        <h2 className="text-lg font-bold mb-2">Hi, login to proceed</h2>
        <p className="text-gray-600 text-sm  mb-4">Enter your phone number to sign in</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Enter phone number
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
        <button className="bg-[#229900] hover:bg-[#33CC33] text-white font-bold py-2 px-4 rounded-md w-full" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { Ramen, Shawarma } from '../../../assets/images/home/FormImg';

const Verify = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img
        className="absolute left-0 top-0 w-32 sm:w-48 md:w-56"
        src={Ramen}
        alt="ramen"
      />
      <img
        className="absolute right-0 bottom-0 w-32 sm:w-48 md:w-56"
        src={Shawarma}
        alt="shawarma"
      />
      <form className="relative z-10 w-96 sm:w-112 md:w-120 h-80 bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2">Verify your number</h2>
          <p className="text-gray-600 text-sm mb-4">Enter the OTP</p>
          <div className="flex gap-4">
            <input
              className="appearance-none border rounded-md w-16 h-16 text-center text-2xl font-bold text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
              id="otp1"
              type="text"
              placeholder="_"
            />
            <input
              className="appearance-none border rounded-md w-16 h-16 text-center text-2xl font-bold text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
              id="otp2"
              type="text"
              placeholder="_"
            />
            <input
              className="appearance-none border rounded-md w-16 h-16 text-center text-2xl font-bold text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
              id="otp3"
              type="text"
              placeholder="_"
            />
            <input
              className="appearance-none border rounded-md w-16 h-16 text-center text-2xl font-bold text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
              id="otp4"
              type="text"
              placeholder="_"
            />
          </div>
        </div>
        <button className="bg-[#229900] hover:bg-[#33CC33] text-white font-bold py-2 px-4 rounded-md w-full" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Verify;

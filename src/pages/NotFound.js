import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-semibold text-5xl">404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="my-2 px-6 py-2 rounded font-semibold bg-blue-400 text-white hover:bg-blue-600">
        <button>Return to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;

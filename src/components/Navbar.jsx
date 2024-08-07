import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-8 shadow-sm font-medium text-gray-600">
      <div className="flex items-center text-lg gap-5 ">
        <a href="/">
          <img
            src="/logo2.png"
            alt="sdfgsd"
            className="w-40 md:w-48 lg:w-48 xl:w-48"
          />
        </a>
        <a href="/">
          <span className="hover:text-black cursor-pointer hidden lg:inline">
            Remove Background
          </span>
        </a>
        <span className="hover:text-black  cursor-pointer hidden lg:inline">
          How to use
        </span>
        <span className="hover:text-black cursor-pointer hidden lg:inline">
          Tools&Api
        </span>
        <span className="hover:text-black cursor-pointer hidden lg:inline">
          Pricing
        </span>
      </div>
      <a
        href="https://portfolio-cms-web1s-projects.vercel.app/"
        target="_blank"
      >
        <h1 className="bg-gray-300 py-2 px-3 rounded-full">SG</h1>
      </a>
    </nav>
  );
};

export default Navbar;

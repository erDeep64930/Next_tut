import Link from "next/link";
import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center p-4 top-8">
      <div class="relative ml-auto hidden lg:block ">
        <span class="absolute left-3 top-3 text-sm text-gray-600 ">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className=" w-full rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-200 text-sm text-gray-600 shadow-sm shadow-slate-300 "
        />
      </div>

      <div class="ml-5">
        <Link
          href="#"
          class="flex items-center font-semibold text-md text-gray-900 hover:text-blue-700 transition"
        >
          <span class="mr-2">
            <FaUser />
          </span>
          Login/Register
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;

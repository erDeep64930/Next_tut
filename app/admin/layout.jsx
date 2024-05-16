import AdminHeader from "@/components/AdminHeader";
import SearchBar from "@/components/SearchBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="px-2   ">
      <AdminHeader />
      <div className="bg-green-400 sm:ml-72 ">
        <SearchBar />
        {children}
      </div>
    </div>
  );
};

export default layout;

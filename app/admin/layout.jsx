import AdminHeader from "@/components/AdminHeader";
import RandomPost from "@/components/RandomPost";
import SearchBar from "@/components/SearchBar";
import Services from "@/components/Services";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="px-2   ">
      <AdminHeader />
      <div className="bg-green-400 sm:ml-72 ">
        <SearchBar />
        {children}
        <RandomPost />
        <Services />
      </div>
    </div>
  );
};

export default layout;

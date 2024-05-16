import React from "react";
import SideNav from "./_components/SideNav";

const layout = ({ children }) => {
  return (
    <div className="sm:w-64 hidden sm:block fixed bg-orange-400">
      <SideNav />
      <div className="sm:ml-64 bg-green-300">{children}</div>
    </div>
  );
};

export default layout;

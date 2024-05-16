import { categoryList, socialPluggin } from "@/constant/constant";
import Link from "next/link";
import React from "react";




const AdminHeader = () => {
  return (
    <div>
      <div class="text-gray-700 space-y-2 mt-4 p-4 shadow-sm shadow-white rounded-xl border  border-gray-400 bg-white">
        {categoryList.map(({ id, title, icon, rank }) => {
          return (
            <Link
              href="#"
              class="flex items-center font-normal leading-4 uppercase hover:text-blue-700 transition hover:bg-gray-200 p-2 rounded-md "
              key={id}
            >
              <span class="mr-2">{icon}</span>
              <span>{title}</span>
              <span class="font-normal ml-auto ">({rank})</span>
            </Link>
          );
        })}
      </div>
      {/* social pluggin */}

      <div class="w-full bg-white shadow-sm rounded-xl p-4 mt-2">
          <h3 class="text-xl font-semibold text-gray-700 font-roboto "> Social Plugin  </h3>
          <div class="flex gap-2 mt-4 ">

            {socialPluggin.map(({id,icon})=>{
              return (
                <Link href="#" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800 hover:text-blue-700 transition " key={id}>
                {icon}
           </Link>
              )
            })}
              

             
          </div> 
      </div> 
    </div>
  );
};

export default AdminHeader;

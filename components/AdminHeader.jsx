import Link from 'next/link'
import React from 'react';
import { FaDove } from 'react-icons/fa';

const categoryList = [
  { id: 1, title: "Beauty", icon: <FaDove />, rank: 12 },
  { id: 2, title: "Business", icon: <FaDove />, rank: 17 },
  { id: 3, title: "Fashion", icon: <FaDove />, rank: 11 },
  { id: 4, title: "Nature", icon: <FaDove />, rank: 9 },
  { id: 1, title: "Technology", icon: <FaDove />, rank: 6 },
  { id: 1, title: "Sports", icon: <FaDove />, rank: 10 },
]

const AdminHeader = () => {
  return (
    <div>


      <div class="text-gray-700 space-y-2 mt-4 p-2 shadow-sm shadow-white rounded-xl border ring-2 hover:ring-4">
        {categoryList.map(({ id, title, icon, rank }) => {
          return (
            <Link href="#" class="flex items-center font-semibold leading-4 uppercase hover:text-blue-700 transition" key={id}>
              <span class="mr-2">
                {icon}
              </span>
              <span>{title}</span>
              <span class="font-normal ml-auto ">({rank})</span>
            </Link>
          )
        })}






      </div>
    </div>
  )
}

export default AdminHeader
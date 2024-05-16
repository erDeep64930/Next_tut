import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock } from "react-icons/fa";
const randomPostList = [
    {
        id: 1,
        title: "Farewell of 2k14-18 .",
        occured: "19 June,2022",
        img: "/img1.jpg",
    },
    {
        id: 2,
        title: "With all the blessing .",
        occured: "9 September,2022",
        img: "/img2.jpg",
    },
    {
        id: 3,
        title: "Learn love live .",
        occured: "9 March,2022",
        img: "/img1.jpg",
    },
];

const RandomPost = () => {
    return (
        <div className="m-6">
            <div className="bg-white shadow-sm shadow-white rounded-xl p-4 mt-6 ">
                <h3 className="text-xl font-semibold text-gray-700 ">
                    Random Posts
                </h3>

                <div className="mt-4">
                    <Link href="#" className="flex gap-4">
                        {randomPostList.map(({ id, title, img, occured }) => {
                            return (
                                <card key={id} className="justify-between items-center flex mt-5">
                                    <div className="flex-shrink-0 ">
                                        <Image
                                            src={img}
                                            width={100}
                                            height={100}
                                            className="h-14 w-20 rounded object-cover hover:brightness-200 "
                                        />
                                    </div>
                                    <div className="flex-grow pl-3 flex flex-col">
                                        <h5 className="text-md leading-5 block  font-semibold transition ">
                                            {title}
                                        </h5>
                                        <div className="flex text-gray-400 text-sm items-center ">
                                            <span className="mr-1 text-xs">
                                                <FaClock />
                                            </span>
                                            {occured}
                                        </div>
                                    </div>
                                </card>
                            );
                        })}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RandomPost;

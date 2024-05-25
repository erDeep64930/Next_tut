"use client"


import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourAngle = (hour % 12) * 30 + minute * 0.5; // 360 degrees / 12 hours + minute offset
    const minuteAngle = minute * 6; // 360 degrees / 60 minutes
    const secondAngle = second * 6; // 360 degrees / 60 seconds

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">

                <div className="relative w-full pb-[100%] bg-gray-300 rounded-full flex items-center justify-center">
                    {/* Watch face */}
                    <div className="absolute w-2 h-2 bg-black rounded-full"></div>
                    {/* Hour hand */}
                    <div
                        className="absolute w-1 h-16 bg-black origin-bottom transform"
                        style={{ transform: `rotate(${hourAngle}deg)` }}
                    ></div>
                    {/* Minute hand */}
                    <div
                        className="absolute w-1 h-20 bg-black origin-bottom transform"
                        style={{ transform: `rotate(${minuteAngle}deg)` }}
                    ></div>
                    {/* Second hand */}
                    <div
                        className="absolute w-0.5 h-24 bg-red-500 origin-bottom transform"
                        style={{ transform: `rotate(${secondAngle}deg)` }}
                    ></div>
                    {/* Numbers */}
                    {numbers.map((num, index) => {
                        const angle = (index + 1) * 30; // 360 degrees / 12 numbers
                        const x = 40 * Math.sin((angle * Math.PI) / 180);
                        const y = -40 * Math.cos((angle * Math.PI) / 180);

                        return (
                            <div
                                key={num}
                                className="absolute text-lg font-semibold"
                                style={{
                                    transform: `translate(${x}%, ${y}%)`,
                                    width: '10%',
                                    height: '10%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transformOrigin: 'center',
                                }}
                            >
                                {num}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Watch;

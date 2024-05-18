import Link from 'next/link';
import React from 'react'

const GroupButtonPage = ({props}) => {
    return (
        <div>

            <CTAButton active={true} href="/">Click Me </CTAButton>
            <CTAButton active={false} href="/">Read More... </CTAButton>
        </div>
    )
}

export default GroupButtonPage;


const CTAButton = ({ active, children, href }) => {
    return (
        <Link href={href}>
            <button className={`text-center px-5 py-3 border shadow-md  text-white ${active ? "bg-blue-400" : "bg-green-500"}`} >{children}</button>

        </Link>
    )
}


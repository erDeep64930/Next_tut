import Link from 'next/link'
import React from 'react'

const CTAButton = ({active,children,href}) => {
  return (
    <Link href="#">
        <button className={`text-center px-5 py-3 border shadow-md  text-white ${active?"bg-orange-400":"bg-green-500"}`} >{children}</button>

    </Link>
  )
}

export default CTAButton
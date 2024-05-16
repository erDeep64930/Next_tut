import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-gray-400 border px-3 py-2 inline-block m-3 hover:text-blue-500'>
      <Link href="/admin/dashboard">Admin Dashboard</Link>
    </div>
  )
}

export default page
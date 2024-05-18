import CTAButton from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-gray-400 border px-3 py-2 inline-block m-3 hover:text-blue-500 gap-y-10 '>
     <div>
     <Link href="/admin/dashboard">Admin Dashboard</Link>
      </div> 
     <CTAButton active="true">Click Me </CTAButton>
     <CTAButton active="false">Read More... </CTAButton>
     <Link href="/reusable_components" className='border px-5 py-3 bg-lime-600 text-white shadow-md'>Reusable componente example</Link>
    </div>
   
  )
}

export default page